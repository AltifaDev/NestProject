import { c as createComponent, b as addAttribute, g as renderScript, f as renderHead, d as renderSlot, a as renderTemplate, e as createAstro } from './astro/server_DT-sokh3.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { p as payloadClient } from './payload-client_0exDmbme.mjs';

const $$Astro = createAstro();
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const {
    title = "NEST ELITE | Agent Portal",
    description = "Agent productivity suite for Nest of Assets."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Google Fonts: IBM Plex Sans Thai --><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Mapbox & Leaflet CSS --><link href="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css" rel="stylesheet"><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">${renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/layouts/DashboardLayout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/layouts/DashboardLayout.astro", void 0);

function NotificationBell() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const fetchRecentLeads = async () => {
      try {
        const user = payloadClient.getUser();
        if (!user || user.role !== "agent") return;
        let agentId = user.agent;
        if (typeof agentId === "object" && agentId !== null) {
          agentId = agentId.id;
        }
        const res = await fetch(`${"http://localhost:3000"}/api/leads?where[agent][equals]=${agentId}&sort=-createdAt&limit=5`);
        if (!res.ok) return;
        const data = await res.json();
        if (data && data.docs) {
          setNotifications(data.docs);
          const newLeads = data.docs.filter((lead) => lead.status === "new").length;
          setUnreadCount(newLeads);
        }
      } catch (err) {
        console.error("Failed to fetch lead notifications", err);
      }
    };
    fetchRecentLeads();
    const interval = setInterval(fetchRecentLeads, 3e4);
    return () => clearInterval(interval);
  }, []);
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.round(diffMs / 6e4);
    const diffHours = Math.round(diffMins / 60);
    const diffDays = Math.round(diffHours / 24);
    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins} min ago`;
    if (diffHours < 24) return `${diffHours} hr ago`;
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  };
  const handleLeadClick = () => {
    setShowDropdown(false);
    window.location.href = "/dashboard/leads";
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: dropdownRef, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setShowDropdown(!showDropdown),
        className: "w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all relative shadow-sm",
        "aria-label": "Notifications",
        children: [
          /* @__PURE__ */ jsx(Bell, { size: 18, strokeWidth: 2.5 }),
          unreadCount > 0 && /* @__PURE__ */ jsx("span", { className: "absolute top-2 right-2.5 w-2 h-2 rounded-full bg-red-500 animate-pulse border border-white" })
        ]
      }
    ),
    showDropdown && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-12 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden transform origin-top-right transition-all", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-800 text-sm", children: "Notifications" }),
        unreadCount > 0 && /* @__PURE__ */ jsxs("span", { className: "bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full", children: [
          unreadCount,
          " New"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-h-[360px] overflow-y-auto", children: notifications.length > 0 ? notifications.map((lead, idx) => /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: handleLeadClick,
          className: `p-4 border-b border-slate-50 cursor-pointer transition-colors hover:bg-slate-50 flex gap-3 ${lead.status === "new" ? "bg-blue-50/30" : ""}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${lead.status === "new" ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`, children: lead.name ? lead.name.charAt(0).toUpperCase() : "?" }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-slate-800 truncate", children: [
                "New Lead: ",
                lead.name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 truncate mt-0.5", children: lead.message ? lead.message : "Interested in a property" }),
              /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-slate-400 font-medium mt-1.5 flex justify-between items-center", children: [
                /* @__PURE__ */ jsx("span", { children: formatTimeAgo(lead.createdAt) }),
                lead.status === "new" && /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-blue-500" })
              ] })
            ] })
          ]
        },
        lead.id || idx
      )) : /* @__PURE__ */ jsx("div", { className: "p-6 text-center text-slate-400 text-sm", children: "No recent notifications" }) }),
      /* @__PURE__ */ jsx("div", { className: "p-2 bg-slate-50 border-t border-slate-100", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleLeadClick,
          className: "w-full text-center text-xs font-bold text-blue-600 hover:text-blue-700 p-2",
          children: "View all leads"
        }
      ) })
    ] })
  ] });
}

export { $$DashboardLayout as $, NotificationBell as N };
