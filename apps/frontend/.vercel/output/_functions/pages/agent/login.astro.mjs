import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DWAGZd-H.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { p as payloadClient } from '../../chunks/payload-client_0exDmbme.mjs';
import { AlertCircle, Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

function AgentLoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await payloadClient.login(email, password);
      if (data.user && data.user.role !== "agent") {
        setError("Access denied. This portal is for agents only.");
        payloadClient.logout();
        return;
      }
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "agent-form-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "form-header", children: [
      /* @__PURE__ */ jsxs("h2", { className: "title", children: [
        "AGENT ",
        /* @__PURE__ */ jsx("span", { className: "highlight", children: "ACCESS" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "subtitle", children: "Please sign in to manage your listings" })
    ] }),
    error && /* @__PURE__ */ jsxs("div", { className: "error-badge", children: [
      /* @__PURE__ */ jsx(AlertCircle, { size: 18 }),
      /* @__PURE__ */ jsx("span", { children: error })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleLogin, className: "login-form", children: [
      /* @__PURE__ */ jsxs("div", { className: "input-field", children: [
        /* @__PURE__ */ jsx(Mail, { className: "field-icon", size: 20 }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "Agent Email",
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "input-field", children: [
        /* @__PURE__ */ jsx(Lock, { className: "field-icon", size: 20 }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            required: true,
            value: password,
            onChange: (e) => setPassword(e.target.value),
            placeholder: "Password",
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "submit-button",
          children: loading ? /* @__PURE__ */ jsx(Loader2, { className: "animate-spin", size: 20 }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { children: "LOGIN TO DASHBOARD" }),
            /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
          ] })
        }
      )
    ] })
  ] });
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Agent Login | Nest of Assets" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login-page"> <div class="login-card"> ${renderComponent($$result2, "AgentLoginForm", AgentLoginForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/AgentLoginForm.tsx", "client:component-export": "default" })} </div> </div> ` })} `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/agent/login.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/agent/login.astro";
const $$url = "/agent/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Login,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
