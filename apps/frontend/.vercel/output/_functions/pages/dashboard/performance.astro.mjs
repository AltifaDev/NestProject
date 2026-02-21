import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
import { $ as $$DashboardLayout, N as NotificationBell } from '../../chunks/NotificationBell_DhIfkeMo.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { p as payloadClient, P as PAYLOAD_URL } from '../../chunks/payload-client_0exDmbme.mjs';
import { Loader2, Activity, Home, Eye, ArrowUpRight, Users, TrendingUp, ArrowDownRight } from 'lucide-react';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

function AnalyticsDashboard() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState({
    totalProperties: 0,
    totalViews: 0,
    newLeads: 0,
    activeLeads: 0,
    conversionRate: 0
  });
  useEffect(() => {
    const fetchAnalytics = async () => {
      const user = payloadClient.getUser();
      if (!user || user.role !== "agent" || !user.agent) return;
      const agentId = typeof user.agent === "object" ? user.agent.id : user.agent;
      try {
        const propsRes = await fetch(`${PAYLOAD_URL}/api/properties?where[agent][equals]=${agentId}&limit=1000`, {
          headers: { "Authorization": `JWT ${localStorage.getItem("payload_token")}` }
        });
        const propsData = await propsRes.json();
        const totalProps = propsData.totalDocs || 0;
        let totalViews = 0;
        if (propsData.docs) {
          propsData.docs.forEach((p) => {
            totalViews += p.view_count || 0;
          });
        }
        const leadsRes = await fetch(`${PAYLOAD_URL}/api/leads?where[agent][equals]=${agentId}&limit=1000`, {
          headers: { "Authorization": `JWT ${localStorage.getItem("payload_token")}` }
        });
        const leadsData = await leadsRes.json();
        let newL = 0;
        let activeL = 0;
        let won = 0;
        if (leadsData.docs) {
          leadsData.docs.forEach((l) => {
            if (l.status === "new") newL++;
            if (["new", "contacted", "viewing", "negotiating"].includes(l.status)) activeL++;
            if (l.status === "closed_won") won++;
          });
        }
        const convRate = leadsData.totalDocs > 0 ? Math.round(won / leadsData.totalDocs * 100) : 0;
        setMetrics({
          totalProperties: totalProps,
          totalViews,
          newLeads: newL,
          activeLeads: activeL,
          conversionRate: convRate
        });
      } catch (err) {
        console.error("Failed to fetch analytics", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);
  if (loading) return /* @__PURE__ */ jsxs("div", { className: "ana-loading", children: [
    /* @__PURE__ */ jsx(Loader2, { className: "animate-spin" }),
    " Loading Analytics Data..."
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "ana-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "ana-header", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "ana-title", children: "Performance Analytics" }),
        /* @__PURE__ */ jsx("p", { className: "ana-description", children: "Monitor your property portfolio and lead engagement." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ana-badge", children: [
        /* @__PURE__ */ jsx(Activity, { size: 16 }),
        " Data is calculated in real-time"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ana-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "ana-card", children: [
        /* @__PURE__ */ jsx("div", { className: "ana-card-icon bg-blue-500/10 text-blue-500", children: /* @__PURE__ */ jsx(Home, { size: 22 }) }),
        /* @__PURE__ */ jsxs("div", { className: "ana-card-info", children: [
          /* @__PURE__ */ jsx("p", { className: "ana-card-label", children: "Active Properties" }),
          /* @__PURE__ */ jsx("h3", { className: "ana-card-value", children: metrics.totalProperties })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ana-card", children: [
        /* @__PURE__ */ jsx("div", { className: "ana-card-icon bg-purple-500/10 text-purple-500", children: /* @__PURE__ */ jsx(Eye, { size: 22 }) }),
        /* @__PURE__ */ jsxs("div", { className: "ana-card-info", children: [
          /* @__PURE__ */ jsx("p", { className: "ana-card-label", children: "Total Portfolio Views" }),
          /* @__PURE__ */ jsxs("div", { className: "ana-value-row", children: [
            /* @__PURE__ */ jsx("h3", { className: "ana-card-value", children: metrics.totalViews.toLocaleString() }),
            /* @__PURE__ */ jsxs("span", { className: "ana-trend positive", children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }),
              " 12%"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ana-card", children: [
        /* @__PURE__ */ jsx("div", { className: "ana-card-icon bg-yellow-500/10 text-yellow-500", children: /* @__PURE__ */ jsx(Users, { size: 22 }) }),
        /* @__PURE__ */ jsxs("div", { className: "ana-card-info", children: [
          /* @__PURE__ */ jsx("p", { className: "ana-card-label", children: "Active Leads" }),
          /* @__PURE__ */ jsxs("div", { className: "ana-value-row", children: [
            /* @__PURE__ */ jsx("h3", { className: "ana-card-value", children: metrics.activeLeads }),
            /* @__PURE__ */ jsxs("span", { className: "ana-badge-small", children: [
              metrics.newLeads,
              " new"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ana-card", children: [
        /* @__PURE__ */ jsx("div", { className: "ana-card-icon bg-green-500/10 text-green-500", children: /* @__PURE__ */ jsx(TrendingUp, { size: 22 }) }),
        /* @__PURE__ */ jsxs("div", { className: "ana-card-info", children: [
          /* @__PURE__ */ jsx("p", { className: "ana-card-label", children: "Conversion Rate" }),
          /* @__PURE__ */ jsxs("div", { className: "ana-value-row", children: [
            /* @__PURE__ */ jsxs("h3", { className: "ana-card-value", children: [
              metrics.conversionRate,
              "%"
            ] }),
            metrics.conversionRate >= 10 ? /* @__PURE__ */ jsxs("span", { className: "ana-trend positive", children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }),
              " Good"
            ] }) : /* @__PURE__ */ jsxs("span", { className: "ana-trend", children: [
              /* @__PURE__ */ jsx(ArrowDownRight, { size: 14 }),
              " Avg"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ana-charts-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "ana-chart-card", children: [
        /* @__PURE__ */ jsx("h3", { className: "ana-chart-title", children: "Views over time (Last 30 Days)" }),
        /* @__PURE__ */ jsxs("div", { className: "ana-chart-placeholder", children: [
          /* @__PURE__ */ jsx("div", { className: "ana-bar-wrapper", children: /* @__PURE__ */ jsx("div", { className: "ana-bar", style: { height: "30%" } }) }),
          /* @__PURE__ */ jsx("div", { className: "ana-bar-wrapper", children: /* @__PURE__ */ jsx("div", { className: "ana-bar", style: { height: "50%" } }) }),
          /* @__PURE__ */ jsx("div", { className: "ana-bar-wrapper", children: /* @__PURE__ */ jsx("div", { className: "ana-bar", style: { height: "40%" } }) }),
          /* @__PURE__ */ jsx("div", { className: "ana-bar-wrapper", children: /* @__PURE__ */ jsx("div", { className: "ana-bar", style: { height: "70%" } }) }),
          /* @__PURE__ */ jsx("div", { className: "ana-bar-wrapper", children: /* @__PURE__ */ jsx("div", { className: "ana-bar", style: { height: "60%" } }) }),
          /* @__PURE__ */ jsx("div", { className: "ana-bar-wrapper", children: /* @__PURE__ */ jsx("div", { className: "ana-bar", style: { height: "90%" } }) }),
          /* @__PURE__ */ jsx("div", { className: "ana-bar-wrapper", children: /* @__PURE__ */ jsx("div", { className: "ana-bar", style: { height: "80%" } }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ana-chart-card", children: [
        /* @__PURE__ */ jsx("h3", { className: "ana-chart-title", children: "Lead Sources" }),
        /* @__PURE__ */ jsxs("div", { className: "ana-chart-placeholder-circle", children: [
          /* @__PURE__ */ jsx("div", { className: "ana-donut" }),
          /* @__PURE__ */ jsxs("div", { className: "ana-legend", children: [
            /* @__PURE__ */ jsxs("div", { className: "ana-legend-item", children: [
              /* @__PURE__ */ jsx("span", { className: "ana-dot p-blue" }),
              " Website"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ana-legend-item", children: [
              /* @__PURE__ */ jsx("span", { className: "ana-dot p-purple" }),
              " Social"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "ana-legend-item", children: [
              /* @__PURE__ */ jsx("span", { className: "ana-dot p-yellow" }),
              " Referrals"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
                .ana-container { display: flex; flex-direction: column; gap: 1.5rem; width: 100%; max-width: 1200px; margin: 0 auto; }
                
                .ana-header { display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem; }
                .ana-title { font-size: 1.25rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.25rem; }
                .ana-description { font-size: 0.85rem; color: var(--text-muted); }
                
                .ana-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(16, 185, 129, 0.1); color: #10b981; padding: 0.4rem 0.75rem; border-radius: 99px; font-size: 0.75rem; font-weight: 500; border: 1px solid rgba(16, 185, 129, 0.2); }
                .ana-loading { padding: 4rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--text-muted); }

                .ana-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; }
                
                .ana-card { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; display: flex; align-items: center; gap: 1rem; transition: transform 0.2s; }
                .ana-card:hover { transform: translateY(-2px); border-color: var(--border-medium); }
                
                .ana-card-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                
                .ana-card-info { display: flex; flex-direction: column; gap: 0.25rem; }
                .ana-card-label { font-size: 0.8rem; color: var(--text-muted); font-weight: 500; }
                .ana-value-row { display: flex; align-items: baseline; gap: 0.75rem; }
                .ana-card-value { font-size: 1.75rem; font-weight: 700; color: var(--text-main); margin: 0; line-height: 1; }
                
                .ana-trend { font-size: 0.75rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.1rem; color: var(--text-dim); }
                .ana-trend.positive { color: #10b981; }
                
                .ana-badge-small { font-size: 0.65rem; background: rgba(59, 130, 246, 0.1); color: #3b82f6; padding: 0.1rem 0.4rem; border-radius: 4px; font-weight: 600; text-transform: uppercase; }

                .ana-charts-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 1.25rem; margin-top: 0.5rem; }
                @media (max-width: 768px) { .ana-charts-grid { grid-template-columns: 1fr; } }
                
                .ana-chart-card { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1.5rem; }
                .ana-chart-title { font-size: 1rem; font-weight: 600; color: var(--text-main); margin-bottom: 1.5rem; }
                
                .ana-chart-placeholder { height: 200px; display: flex; align-items: flex-end; justify-content: space-between; padding-top: 2rem; border-bottom: 1px solid var(--border-subtle); gap: 1rem; }
                .ana-bar-wrapper { flex: 1; height: 100%; display: flex; align-items: flex-end; justify-content: center; }
                .ana-bar { width: 100%; max-width: 32px; background: linear-gradient(to top, rgba(59,130,246,0.2), rgba(59,130,246,0.8)); border-radius: 4px 4px 0 0; border: 1px solid rgba(59,130,246,0.5); border-bottom: none; transition: height 1s ease-out; }
                .ana-bar:hover { background: rgba(59,130,246,1); }

                .ana-chart-placeholder-circle { height: 200px; display: flex; align-items: center; justify-content: center; gap: 2rem; }
                .ana-donut { width: 120px; height: 120px; border-radius: 50%; border: 20px solid var(--border-subtle); border-top-color: #3b82f6; border-right-color: #8b5cf6; border-bottom-color: #eab308; transform: rotate(-45deg); }
                .ana-legend { display: flex; flex-direction: column; gap: 0.75rem; }
                .ana-legend-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-muted); }
                .ana-dot { width: 10px; height: 10px; border-radius: 50%; }
                .p-blue { background: #3b82f6; }
                .p-purple { background: #8b5cf6; }
                .p-yellow { background: #eab308; }
            ` })
  ] });
}

const $$Performance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Analytics | NEST Elite Dashboard", "data-astro-cid-4zeozkx6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-root" data-astro-cid-4zeozkx6> <!-- Sidebar Navigation --> <aside class="dashboard-sidebar" data-astro-cid-4zeozkx6> <div class="sidebar-header" data-astro-cid-4zeozkx6> <div class="brand-box" data-astro-cid-4zeozkx6> <div class="brand-logo" data-astro-cid-4zeozkx6>N</div> <div class="brand-info" data-astro-cid-4zeozkx6> <span class="brand-name" data-astro-cid-4zeozkx6>NEST ELITE</span> <span class="brand-tag" data-astro-cid-4zeozkx6>AGENT PORTAL</span> </div> </div> </div> <nav class="sidebar-menu" data-astro-cid-4zeozkx6> <div class="menu-section" data-astro-cid-4zeozkx6> <span class="section-title" data-astro-cid-4zeozkx6>CORE</span> <a href="/dashboard" class="menu-item" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-4zeozkx6><rect width="7" height="9" x="3" y="3" rx="1" data-astro-cid-4zeozkx6></rect><rect width="7" height="5" x="14" y="3" rx="1" data-astro-cid-4zeozkx6></rect><rect width="7" height="9" x="14" y="12" rx="1" data-astro-cid-4zeozkx6></rect><rect width="7" height="5" x="3" y="16" rx="1" data-astro-cid-4zeozkx6></rect></svg> <span data-astro-cid-4zeozkx6>Overview</span> </a> <a href="/dashboard/properties" class="menu-item" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-4zeozkx6><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-4zeozkx6></path><polyline points="9 22 9 12 15 12 15 22" data-astro-cid-4zeozkx6></polyline></svg> <span data-astro-cid-4zeozkx6>Properties</span> </a> <a href="/dashboard/profile" class="menu-item" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-4zeozkx6><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" data-astro-cid-4zeozkx6></path><circle cx="12" cy="7" r="4" data-astro-cid-4zeozkx6></circle></svg> <span data-astro-cid-4zeozkx6>Profile</span> </a> </div> <div class="menu-section" data-astro-cid-4zeozkx6> <span class="section-title" data-astro-cid-4zeozkx6>ENGAGEMENT</span> <a href="/dashboard/leads" class="menu-item" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-4zeozkx6><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-4zeozkx6></path><circle cx="9" cy="7" r="4" data-astro-cid-4zeozkx6></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-4zeozkx6></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-4zeozkx6></path></svg> <span data-astro-cid-4zeozkx6>Leads & CRM</span> </a> <a href="/dashboard/calendar" class="menu-item" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-4zeozkx6><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-astro-cid-4zeozkx6></rect><line x1="16" x2="16" y1="2" y2="6" data-astro-cid-4zeozkx6></line><line x1="8" x2="8" y1="2" y2="6" data-astro-cid-4zeozkx6></line><line x1="3" x2="21" y1="10" y2="10" data-astro-cid-4zeozkx6></line></svg> <span data-astro-cid-4zeozkx6>Calendar</span> </a> </div> <div class="menu-section" data-astro-cid-4zeozkx6> <span class="section-title" data-astro-cid-4zeozkx6>GROWTH</span> <a href="/dashboard/marketing" class="menu-item" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-4zeozkx6><path d="m12 14 4-4" data-astro-cid-4zeozkx6></path><path d="M3.34 19a10 10 0 1 1 17.32 0" data-astro-cid-4zeozkx6></path></svg> <span data-astro-cid-4zeozkx6>Marketing</span> </a> <a href="/dashboard/performance" class="menu-item active" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-4zeozkx6><path d="M12 20V10" data-astro-cid-4zeozkx6></path><path d="M18 20V4" data-astro-cid-4zeozkx6></path><path d="M6 20v-4" data-astro-cid-4zeozkx6></path></svg> <span data-astro-cid-4zeozkx6>Analytics</span> </a> </div> </nav> <div class="sidebar-footer" data-astro-cid-4zeozkx6> <button id="theme-toggle" class="theme-switch" aria-label="Toggle Theme" data-astro-cid-4zeozkx6> <div class="switch-icons" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon" data-astro-cid-4zeozkx6><circle cx="12" cy="12" r="4" data-astro-cid-4zeozkx6></circle><path d="M12 2v2" data-astro-cid-4zeozkx6></path><path d="M12 20v2" data-astro-cid-4zeozkx6></path><path d="m4.93 4.93 1.41 1.41" data-astro-cid-4zeozkx6></path><path d="m17.66 17.66 1.41 1.41" data-astro-cid-4zeozkx6></path><path d="M2 12h2" data-astro-cid-4zeozkx6></path><path d="M20 12h2" data-astro-cid-4zeozkx6></path><path d="m6.34 17.66-1.41 1.41" data-astro-cid-4zeozkx6></path><path d="m19.07 4.93-1.41 1.41" data-astro-cid-4zeozkx6></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon" data-astro-cid-4zeozkx6><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-astro-cid-4zeozkx6></path></svg> </div> <span class="switch-text" data-astro-cid-4zeozkx6>Switch Theme</span> </button> <div class="footer-divider" data-astro-cid-4zeozkx6></div> <button id="logout-btn" class="menu-item logout" data-astro-cid-4zeozkx6> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon logout-icon" data-astro-cid-4zeozkx6><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-4zeozkx6></path><polyline points="16 17 21 12 16 7" data-astro-cid-4zeozkx6></polyline><line x1="21" x2="9" y1="12" y2="12" data-astro-cid-4zeozkx6></line></svg> <span data-astro-cid-4zeozkx6>Logout</span> </button> </div> </aside> <!-- Main Content Area --> <main class="dashboard-main" data-astro-cid-4zeozkx6> <header class="main-header" data-astro-cid-4zeozkx6> <div class="greeting-box" data-astro-cid-4zeozkx6> <h1 class="welcome-text" data-astro-cid-4zeozkx6>Analytics</h1> <p id="user-display" class="user-id" data-astro-cid-4zeozkx6>Performance Overview ✨</p> </div> <div class="header-actions" data-astro-cid-4zeozkx6> ${renderComponent($$result2, "NotificationBell", NotificationBell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/NotificationBell.tsx", "client:component-export": "default", "data-astro-cid-4zeozkx6": true })} <div class="profile-summary" data-astro-cid-4zeozkx6> <div class="profile-text" data-astro-cid-4zeozkx6> <span id="user-email-full" class="email-label" data-astro-cid-4zeozkx6></span> <span class="badge-elite" data-astro-cid-4zeozkx6>Elite Member</span> </div> <div class="profile-orb" data-astro-cid-4zeozkx6></div> </div> </div> </header> <div class="main-scroll" data-astro-cid-4zeozkx6> <div class="content-wrapper" data-astro-cid-4zeozkx6> ${renderComponent($$result2, "AnalyticsDashboard", AnalyticsDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/AnalyticsDashboard.tsx", "client:component-export": "default", "data-astro-cid-4zeozkx6": true })} </div> </div> </main> </div> ` })} ${renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/performance.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/performance.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/performance.astro";
const $$url = "/dashboard/performance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Performance,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
