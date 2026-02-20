/**
 * Payload CMS Client
 * Handles authentication and CRUD for properties/agents
 */

export const PAYLOAD_URL = import.meta.env.PUBLIC_PAYLOAD_URL || 'http://localhost:3000';

class PayloadClient {
    private baseURL: string;
    private token: string | null = null;

    constructor(baseURL: string = PAYLOAD_URL) {
        this.baseURL = baseURL;
        // Try to recover token from localStorage (client-side only)
        if (typeof window !== 'undefined') {
            this.token = localStorage.getItem('payload_token');
        }
    }

    private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;

        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...((options.headers as Record<string, string>) || {}),
        };

        if (this.token) {
            headers['Authorization'] = `JWT ${this.token}`;
        }

        try {
            const response = await fetch(url, {
                ...options,
                headers,
            });

            if (response.status === 401 && typeof window !== 'undefined') {
                // Handle unauthorized (maybe token expired)
                this.logout();
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.errors?.[0]?.message || `Request failed with status ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('Payload request error:', error);
            throw error;
        }
    }

    async login(email: string, password: string) {
        const data: any = await this.request('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });

        if (data.token) {
            this.token = data.token;
            if (typeof window !== 'undefined') {
                localStorage.setItem('payload_token', data.token);
                localStorage.setItem('payload_user', JSON.stringify(data.user));
            }
        }
        return data;
    }

    logout() {
        this.token = null;
        if (typeof window !== 'undefined') {
            localStorage.removeItem('payload_token');
            localStorage.removeItem('payload_user');
            window.location.href = '/agent/login';
        }
    }

    getUser() {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem('payload_user');
            return user ? JSON.parse(user) : null;
        }
        return null;
    }

    async getFreshestUser() {
        const localUser = this.getUser();
        if (!localUser) return null;
        try {
            const data = await this.request<any>('/api/users/me');
            if (data?.user) {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('payload_user', JSON.stringify(data.user));
                }
                return data.user;
            }
        } catch (error) {
            console.warn('Failed to fetch freshest user data', error);
        }
        return localUser;
    }

    async getMyProperties() {
        // Fetch freshest user to ensure agent relationship is picked up if changed
        const user = await this.getFreshestUser();
        if (!user) return { docs: [] };

        // If the user is an admin, they should see all properties
        if (user.role === 'admin') {
            return this.request<any>('/api/properties?depth=2&limit=100');
        }

        if (!user.agent) return { docs: [] };

        // Payload auto-filters by access control if logged in, 
        // but explicit filter is clearer
        // depth=2 to populate agent and thumbnail relationships
        const agentId = typeof user.agent === 'object' ? user.agent.id : user.agent;
        return this.request<any>(`/api/properties?where[agent][equals]=${agentId}&depth=2&limit=100`);
    }

    async createProperty(data: any) {
        return this.request('/api/properties', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async updateProperty(id: string, data: any) {
        return this.request(`/api/properties/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async getProperty(id: string) {
        // depth=2 to populate agent (with photo), thumbnail, and images
        return this.request<any>(`/api/properties/${id}?depth=2`);
    }

    async deleteProperty(id: string) {
        return this.request(`/api/properties/${id}`, {
            method: 'DELETE',
        });
    }

    // --- Increment view count ---
    async incrementViewCount(id: string) {
        try {
            // First get current view count
            const prop = await this.request<any>(`/api/properties/${id}?depth=0`);
            const currentViews = prop?.view_count || 0;
            // Then increment
            await this.request(`/api/properties/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({ view_count: currentViews + 1 }),
            });
        } catch (error) {
            // Non-critical, don't throw
            console.warn('Failed to increment view count:', error);
        }
    }

    // --- Utilities ---
    async uploadMedia(file: File, maxRetries = 3) {
        const formData = new FormData();
        formData.append('file', file);
        // The Media collection requires an 'alt' field — use filename as default alt text
        const altText = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
        formData.append('alt', altText);

        const url = `${this.baseURL}/api/media`;

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `JWT ${this.token}`,
                    },
                    body: formData,
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    const errorMsg = errorData?.errors?.[0]?.message || `Upload failed with status ${response.status}`;
                    throw new Error(errorMsg);
                }
                return await response.json();
            } catch (error) {
                console.warn(`Upload attempt ${attempt}/${maxRetries} failed:`, error);
                if (attempt === maxRetries) throw error;
                // Exponential backoff: 500ms, 1000ms, 2000ms...
                await new Promise(resolve => setTimeout(resolve, 500 * Math.pow(2, attempt - 1)));
            }
        }

        throw new Error('Failed to upload media after all retries');
    }
}

export const payloadClient = new PayloadClient();
