import { useState } from 'react';
import { payloadClient } from '../lib/payload-client';
import { Mail, Lock, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export default function AgentLoginForm() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data: any = await payloadClient.login(email, password);

            // Check if the user has the 'agent' role
            if (data.user && data.user.role !== 'agent') {
                setError('Access denied. This portal is for agents only.');
                payloadClient.logout(); // Clear the session
                return;
            }

            window.location.href = '/dashboard';
        } catch (err: any) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="agent-form-container">
            <div className="form-header">
                <h2 className="title">
                    AGENT <span className="highlight">ACCESS</span>
                </h2>
                <p className="subtitle">Please sign in to manage your listings</p>
            </div>

            {error && (
                <div className="error-badge">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                </div>
            )}

            <form onSubmit={handleLogin} className="login-form">
                <div className="input-field">
                    <Mail className="field-icon" size={20} />
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Agent Email"
                        className="form-input"
                    />
                </div>

                <div className="input-field">
                    <Lock className="field-icon" size={20} />
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="form-input"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="submit-button"
                >
                    {loading ? (
                        <Loader2 className="animate-spin" size={20} />
                    ) : (
                        <>
                            <span>LOGIN TO DASHBOARD</span>
                            <ArrowRight size={20} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
