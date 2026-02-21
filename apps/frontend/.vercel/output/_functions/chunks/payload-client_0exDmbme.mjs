const PAYLOAD_URL = "http://localhost:3000";
class PayloadClient {
  baseURL;
  token = null;
  constructor(baseURL = PAYLOAD_URL) {
    this.baseURL = baseURL;
    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("payload_token");
    }
  }
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      ...options.headers || {}
    };
    if (this.token) {
      headers["Authorization"] = `JWT ${this.token}`;
    }
    try {
      const response = await fetch(url, {
        ...options,
        headers
      });
      if (response.status === 401 && typeof window !== "undefined") {
        this.logout();
      }
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.errors?.[0]?.message || `Request failed with status ${response.status}`);
      }
      return data;
    } catch (error) {
      console.error("Payload request error:", error);
      throw error;
    }
  }
  async login(email, password) {
    const data = await this.request("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    if (data.token) {
      this.token = data.token;
      if (typeof window !== "undefined") {
        localStorage.setItem("payload_token", data.token);
        localStorage.setItem("payload_user", JSON.stringify(data.user));
      }
    }
    return data;
  }
  logout() {
    this.token = null;
    if (typeof window !== "undefined") {
      localStorage.removeItem("payload_token");
      localStorage.removeItem("payload_user");
      window.location.href = "/agent/login";
    }
  }
  getUser() {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("payload_user");
      return user ? JSON.parse(user) : null;
    }
    return null;
  }
  async getFreshestUser() {
    const localUser = this.getUser();
    if (!localUser) return null;
    try {
      const data = await this.request("/api/users/me");
      if (data?.user) {
        if (typeof window !== "undefined") {
          localStorage.setItem("payload_user", JSON.stringify(data.user));
        }
        return data.user;
      }
    } catch (error) {
      console.warn("Failed to fetch freshest user data", error);
    }
    return localUser;
  }
  async getMyProperties() {
    const user = await this.getFreshestUser();
    if (!user) return { docs: [] };
    if (user.role === "admin") {
      return this.request("/api/properties?depth=2&limit=100");
    }
    if (!user.agent) return { docs: [] };
    const agentId = typeof user.agent === "object" ? user.agent.id : user.agent;
    return this.request(`/api/properties?where[agent][equals]=${agentId}&depth=2&limit=100`);
  }
  async createProperty(data) {
    return this.request("/api/properties", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  async updateProperty(id, data) {
    return this.request(`/api/properties/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data)
    });
  }
  async getProperty(id) {
    return this.request(`/api/properties/${id}?depth=2`);
  }
  async deleteProperty(id) {
    return this.request(`/api/properties/${id}`, {
      method: "DELETE"
    });
  }
  // --- Increment view count ---
  async incrementViewCount(id) {
    try {
      const prop = await this.request(`/api/properties/${id}?depth=0`);
      const currentViews = prop?.view_count || 0;
      await this.request(`/api/properties/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ view_count: currentViews + 1 })
      });
    } catch (error) {
      console.warn("Failed to increment view count:", error);
    }
  }
  // --- Utilities ---
  async uploadMedia(file, maxRetries = 3) {
    const formData = new FormData();
    formData.append("file", file);
    const altText = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    formData.append("alt", altText);
    const url = `${this.baseURL}/api/media`;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Authorization": `JWT ${this.token}`
          },
          body: formData
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
        await new Promise((resolve) => setTimeout(resolve, 500 * Math.pow(2, attempt - 1)));
      }
    }
    throw new Error("Failed to upload media after all retries");
  }
}
const payloadClient = new PayloadClient();

export { PAYLOAD_URL as P, payloadClient as p };
