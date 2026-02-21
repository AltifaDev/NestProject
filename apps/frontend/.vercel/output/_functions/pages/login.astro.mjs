import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DWAGZd-H.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const supabase = createClient(
  "https://zskakdqvjrkwkzzamlkg.supabase.co",
  "sb_publishable_VtecDtvgpBBjSgBVEWlQ4g_O68LrugV"
);

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      if (isLogin) {
        const { error: error2 } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error2) throw error2;
        window.location.href = "/";
      } else {
        const { error: error2, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: name,
              phone
            }
          }
        });
        if (error2) throw error2;
        if (data.user && data.user.identities && data.user.identities.length === 0) {
          setError("This email is already registered. Please sign in instead.");
        } else {
          setMessage("We've sent a confirmation link to your email. Please verify to continue.");
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSocialLogin = async (provider) => {
    setLoading(true);
    setError(null);
    try {
      const { error: error2 } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });
      if (error2) throw error2;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "auth-root", children: [
    /* @__PURE__ */ jsx("style", { children: `
                .auth-root {
                    width: 100%;
                }

                .auth-card {
                    position: relative;
                    z-index: 10;
                }

                .auth-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .auth-title {
                    font-size: 2rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.03em;
                }

                .auth-subtitle {
                    color: rgba(255,255,255,0.4);
                    font-size: 0.95rem;
                    font-weight: 400;
                    line-height: 1.5;
                }

                /* Alerts */
                .auth-alert {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    padding: 1rem 1.25rem;
                    border-radius: 14px;
                    margin-bottom: 1.75rem;
                    font-size: 0.85rem;
                    font-weight: 500;
                    line-height: 1.5;
                }
                .auth-alert-error {
                    background: rgba(239,68,68,0.08);
                    border: 1px solid rgba(239,68,68,0.15);
                    color: #fca5a5;
                }
                .auth-alert-success {
                    background: rgba(34,197,94,0.08);
                    border: 1px solid rgba(34,197,94,0.15);
                    color: #86efac;
                }
                .auth-alert svg {
                    flex-shrink: 0;
                    margin-top: 1px;
                }

                /* Social buttons */
                .auth-social-row {
                    display: flex;
                    gap: 0.75rem;
                    margin-bottom: 1.75rem;
                }
                .auth-social-btn {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.6rem;
                    height: 52px;
                    border-radius: 14px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.03);
                    color: rgba(255,255,255,0.7);
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.25s ease;
                }
                .auth-social-btn:hover {
                    background: rgba(255,255,255,0.07);
                    border-color: rgba(255,255,255,0.2);
                    color: white;
                }
                .auth-social-btn svg {
                    width: 20px;
                    height: 20px;
                }

                /* Divider */
                .auth-divider {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.75rem;
                }
                .auth-divider-line {
                    flex: 1;
                    height: 1px;
                    background: rgba(255,255,255,0.08);
                }
                .auth-divider-text {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(255,255,255,0.2);
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                }

                /* Form fields */
                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .auth-field-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }
                .auth-label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(255,255,255,0.3);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    padding-left: 0.25rem;
                }
                .auth-input-wrap {
                    position: relative;
                }
                .auth-input-icon {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255,255,255,0.2);
                    pointer-events: none;
                }
                .auth-input {
                    width: 100%;
                    height: 52px;
                    background: rgba(255,255,255,0.04);
                    border: 1.5px solid rgba(255,255,255,0.08);
                    border-radius: 14px;
                    padding: 0 1rem 0 3rem;
                    color: white;
                    font-size: 0.95rem;
                    font-weight: 400;
                    outline: none;
                    transition: all 0.25s ease;
                    font-family: inherit;
                }
                .auth-input:focus {
                    border-color: #3b82f6;
                    background: rgba(59,130,246,0.04);
                    box-shadow: 0 0 0 4px rgba(59,130,246,0.1);
                }
                .auth-input::placeholder {
                    color: rgba(255,255,255,0.15);
                }

                /* Forgot link row */
                .auth-label-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 0.25rem;
                }
                .auth-forgot {
                    font-size: 0.7rem;
                    font-weight: 700;
                    color: rgba(59,130,246,0.7);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.2s;
                    padding: 0;
                }
                .auth-forgot:hover {
                    color: #3b82f6;
                }

                /* Submit */
                .auth-submit {
                    width: 100%;
                    height: 52px;
                    margin-top: 0.75rem;
                    background: white;
                    color: #020617;
                    border: none;
                    border-radius: 14px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    letter-spacing: 0.02em;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.6rem;
                    transition: all 0.3s ease;
                }
                .auth-submit:hover {
                    background: #3b82f6;
                    color: white;
                    transform: translateY(-1px);
                    box-shadow: 0 12px 30px -8px rgba(59,130,246,0.4);
                }
                .auth-submit:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }
                .auth-submit svg {
                    width: 18px;
                    height: 18px;
                }
                @keyframes spin { to { transform: rotate(360deg); } }
                .auth-spinner {
                    animation: spin 0.8s linear infinite;
                }

                /* Toggle */
                .auth-toggle {
                    text-align: center;
                    margin-top: 2.5rem;
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.35);
                    font-weight: 500;
                }
                .auth-toggle-btn {
                    color: white;
                    font-weight: 700;
                    background: none;
                    border: none;
                    cursor: pointer;
                    border-bottom: 1px solid rgba(255,255,255,0.15);
                    padding-bottom: 2px;
                    margin-left: 0.3rem;
                    transition: all 0.2s;
                }
                .auth-toggle-btn:hover {
                    color: #3b82f6;
                    border-color: #3b82f6;
                }

                /* Registration extra fields animation */
                .auth-extra-fields {
                    overflow: hidden;
                    transition: max-height 0.4s ease, opacity 0.3s ease;
                }
                /* Agent Link */
                .auth-agent-link {
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255,255,255,0.08);
                    display: flex;
                    justify-content: center;
                }
                .agent-link-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.8rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.2s;
                }
                .agent-link-btn:hover {
                    background: rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.9);
                    border-color: rgba(255, 255, 255, 0.15);
                }
                .agent-link-btn .icon {
                    opacity: 0.6;
                    font-size: 0.9rem;
                }
            ` }),
    /* @__PURE__ */ jsxs("div", { className: "auth-card", id: "auth-form-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "auth-header", children: [
        /* @__PURE__ */ jsx("h1", { className: "auth-title", children: isLogin ? "Welcome Back" : "Create Account" }),
        /* @__PURE__ */ jsx("p", { className: "auth-subtitle", children: isLogin ? "Sign in to explore properties and save your favorites" : "Join us to discover your perfect property" })
      ] }),
      error && /* @__PURE__ */ jsxs("div", { className: "auth-alert auth-alert-error", children: [
        /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
          /* @__PURE__ */ jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: error })
      ] }),
      message && /* @__PURE__ */ jsxs("div", { className: "auth-alert auth-alert-success", children: [
        /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
          /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
        ] }),
        /* @__PURE__ */ jsx("span", { children: message })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "auth-social-row", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "auth-social-btn",
            onClick: () => handleSocialLogin("google"),
            disabled: loading,
            children: [
              /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z", fill: "#4285F4" }),
                /* @__PURE__ */ jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
                /* @__PURE__ */ jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }),
                /* @__PURE__ */ jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
              ] }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "auth-social-btn",
            onClick: () => handleSocialLogin("facebook"),
            disabled: loading,
            children: [
              /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "#1877F2", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }),
              "Facebook"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "auth-divider", children: [
        /* @__PURE__ */ jsx("div", { className: "auth-divider-line" }),
        /* @__PURE__ */ jsx("span", { className: "auth-divider-text", children: "or continue with email" }),
        /* @__PURE__ */ jsx("div", { className: "auth-divider-line" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleAuth, className: "auth-form", children: [
        !isLogin && /* @__PURE__ */ jsxs("div", { className: "auth-extra-fields", children: [
          /* @__PURE__ */ jsxs("div", { className: "auth-field-group", style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ jsx("label", { className: "auth-label", children: "Full Name" }),
            /* @__PURE__ */ jsxs("div", { className: "auth-input-wrap", children: [
              /* @__PURE__ */ jsxs("svg", { className: "auth-input-icon", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "7", r: "4" })
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  className: "auth-input",
                  placeholder: "John Doe"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-field-group", children: [
            /* @__PURE__ */ jsx("label", { className: "auth-label", children: "Phone Number" }),
            /* @__PURE__ */ jsxs("div", { className: "auth-input-wrap", children: [
              /* @__PURE__ */ jsx("svg", { className: "auth-input-icon", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }) }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "tel",
                  value: phone,
                  onChange: (e) => setPhone(e.target.value),
                  className: "auth-input",
                  placeholder: "+66 XX XXX XXXX"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "auth-field-group", children: [
          /* @__PURE__ */ jsx("label", { className: "auth-label", children: "Email Address" }),
          /* @__PURE__ */ jsxs("div", { className: "auth-input-wrap", children: [
            /* @__PURE__ */ jsxs("svg", { className: "auth-input-icon", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
              /* @__PURE__ */ jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                required: true,
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "auth-input",
                placeholder: "name@example.com"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "auth-field-group", children: [
          /* @__PURE__ */ jsxs("div", { className: "auth-label-row", children: [
            /* @__PURE__ */ jsx("label", { className: "auth-label", children: "Password" }),
            isLogin && /* @__PURE__ */ jsx("button", { type: "button", className: "auth-forgot", children: "Forgot?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "auth-input-wrap", children: [
            /* @__PURE__ */ jsxs("svg", { className: "auth-input-icon", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
              /* @__PURE__ */ jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
              /* @__PURE__ */ jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "password",
                required: true,
                value: password,
                onChange: (e) => setPassword(e.target.value),
                className: "auth-input",
                placeholder: "••••••••"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "auth-submit",
            children: loading ? /* @__PURE__ */ jsx("svg", { className: "auth-spinner", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { children: isLogin ? "Sign In" : "Create Account" }),
              /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
                /* @__PURE__ */ jsx("polyline", { points: "12 5 19 12 12 19" })
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "auth-toggle", children: [
        isLogin ? "New to Nest of Assets?" : "Already have an account?",
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setIsLogin(!isLogin);
              setError(null);
              setMessage(null);
            },
            className: "auth-toggle-btn",
            children: isLogin ? "Create your account" : "Sign in now"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "auth-agent-link", children: /* @__PURE__ */ jsxs("a", { href: "/agent/login", className: "agent-link-btn", children: [
        /* @__PURE__ */ jsx("span", { className: "icon", children: "🔐" }),
        /* @__PURE__ */ jsx("span", { className: "text", children: "Agent Portal Access" })
      ] }) })
    ] })
  ] });
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sign In | Nest of Assets", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login-wrapper" data-astro-cid-sgpqyurt> <div class="background-effects" data-astro-cid-sgpqyurt> <div class="bg-image" data-astro-cid-sgpqyurt></div> <div class="noise" data-astro-cid-sgpqyurt></div> <div class="glow-orb top-left" data-astro-cid-sgpqyurt></div> <div class="glow-orb bottom-right" data-astro-cid-sgpqyurt></div> </div> <div class="content gsap-reveal" data-astro-cid-sgpqyurt> <div class="brand" data-astro-cid-sgpqyurt> <a href="/" class="logo" data-astro-cid-sgpqyurt> <div class="logo-icon" data-astro-cid-sgpqyurt>N</div> <span class="logo-text" data-astro-cid-sgpqyurt>Nest of Assets</span> </a> </div> <div class="form-container" data-astro-cid-sgpqyurt> ${renderComponent($$result2, "AuthForm", AuthForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/AuthForm.tsx", "client:component-export": "default", "data-astro-cid-sgpqyurt": true })} </div> <div class="footer" data-astro-cid-sgpqyurt> <p data-astro-cid-sgpqyurt>&copy; 2026 Nest of Assets. Trusted Property Platform.</p> <div class="links" data-astro-cid-sgpqyurt> <a href="#" data-astro-cid-sgpqyurt>Privacy</a> <span class="dot" data-astro-cid-sgpqyurt></span> <a href="#" data-astro-cid-sgpqyurt>Terms</a> <span class="dot" data-astro-cid-sgpqyurt></span> <a href="#" data-astro-cid-sgpqyurt>Security</a> </div> </div> </div> </div> ` })}  ${renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/login.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
