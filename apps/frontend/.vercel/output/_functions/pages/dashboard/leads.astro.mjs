import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
import { $ as $$DashboardLayout, N as NotificationBell } from '../../chunks/NotificationBell_DhIfkeMo.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { p as payloadClient, P as PAYLOAD_URL } from '../../chunks/payload-client_0exDmbme.mjs';
import { Loader2, Briefcase, User, Mail, Phone, MessageSquare, Clock } from 'lucide-react';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

function LeadsCRM() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    fetchLeads();
  }, []);
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const user = payloadClient.getUser();
      if (!user || user.role !== "agent" || !user.agent) return;
      const agentId = typeof user.agent === "object" ? user.agent.id : user.agent;
      const response = await fetch(`${PAYLOAD_URL}/api/leads?where[agent][equals]=${agentId}&depth=1&limit=100`, {
        headers: {
          "Authorization": `JWT ${localStorage.getItem("payload_token")}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setLeads(data.docs || []);
      }
    } catch (err) {
      console.error("Failed to fetch leads", err);
    } finally {
      setLoading(false);
    }
  };
  const updateLeadStatus = async (leadId, targetStatus) => {
    try {
      const response = await fetch(`${PAYLOAD_URL}/api/leads/${leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `JWT ${localStorage.getItem("payload_token")}`
        },
        body: JSON.stringify({ status: targetStatus })
      });
      if (response.ok) {
        setLeads(leads.map((lead) => lead.id === leadId ? { ...lead, status: targetStatus } : lead));
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "contacted":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "viewing":
        return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "negotiating":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "closed_won":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "closed_lost":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "new":
        return "New Lead";
      case "contacted":
        return "Contacted";
      case "viewing":
        return "Viewing Arranged";
      case "negotiating":
        return "Negotiating";
      case "closed_won":
        return "Closed (Won)";
      case "closed_lost":
        return "Closed (Lost)";
      default:
        return status;
    }
  };
  const filteredLeads = leads.filter((lead) => {
    if (filter === "all") return true;
    if (filter === "active") return ["new", "contacted", "viewing", "negotiating"].includes(lead.status);
    if (filter === "closed") return ["closed_won", "closed_lost"].includes(lead.status);
    return lead.status === filter;
  });
  if (loading) return /* @__PURE__ */ jsxs("div", { className: "lcrm-loading", children: [
    /* @__PURE__ */ jsx(Loader2, { className: "animate-spin" }),
    " Loading Leads..."
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "lcrm-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "lcrm-header", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "lcrm-title", children: "Leads & CRM Pipeline" }),
        /* @__PURE__ */ jsx("p", { className: "lcrm-description", children: "Track your client inquiries and deal progress." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lcrm-filters", children: [
        /* @__PURE__ */ jsx("button", { className: filter === "all" ? "active" : "", onClick: () => setFilter("all"), children: "All Leads" }),
        /* @__PURE__ */ jsx("button", { className: filter === "active" ? "active" : "", onClick: () => setFilter("active"), children: "Active" }),
        /* @__PURE__ */ jsx("button", { className: filter === "closed" ? "active" : "", onClick: () => setFilter("closed"), children: "Closed" })
      ] })
    ] }),
    filteredLeads.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "lcrm-empty", children: [
      /* @__PURE__ */ jsx(Briefcase, { size: 40, className: "lcrm-empty-icon" }),
      /* @__PURE__ */ jsx("p", { children: "No leads found in this category." }),
      /* @__PURE__ */ jsx("p", { className: "lcrm-empty-sub", children: "When clients contact you regarding properties, they will appear here." })
    ] }) : /* @__PURE__ */ jsx("div", { className: "lcrm-grid", children: filteredLeads.map((lead) => /* @__PURE__ */ jsxs("div", { className: "lcrm-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "lcrm-card-header", children: [
        /* @__PURE__ */ jsxs("div", { className: "lcrm-card-title", children: [
          /* @__PURE__ */ jsx(User, { size: 16 }),
          /* @__PURE__ */ jsx("h3", { children: lead.name })
        ] }),
        /* @__PURE__ */ jsx("span", { className: `lcrm-status-badge ${getStatusColor(lead.status)}`, children: getStatusLabel(lead.status) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lcrm-card-body", children: [
        (lead.email || lead.phone) && /* @__PURE__ */ jsxs("div", { className: "lcrm-contact-info", children: [
          lead.email && /* @__PURE__ */ jsxs("div", { className: "lcrm-info-row", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: lead.email })
          ] }),
          lead.phone && /* @__PURE__ */ jsxs("div", { className: "lcrm-info-row", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14 }),
            " ",
            /* @__PURE__ */ jsx("span", { children: lead.phone })
          ] })
        ] }),
        lead.property && /* @__PURE__ */ jsxs("div", { className: "lcrm-property-ref", children: [
          /* @__PURE__ */ jsx("strong", { children: "Inquiry for:" }),
          " ",
          lead.property.title
        ] }),
        lead.message && /* @__PURE__ */ jsxs("div", { className: "lcrm-message", children: [
          /* @__PURE__ */ jsx(MessageSquare, { size: 14, className: "lcrm-msg-icon" }),
          /* @__PURE__ */ jsx("p", { children: lead.message })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lcrm-info-row lcrm-timestamp", children: [
          /* @__PURE__ */ jsx(Clock, { size: 12 }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Received ",
            new Date(lead.createdAt).toLocaleDateString()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lcrm-card-footer", children: /* @__PURE__ */ jsxs(
        "select",
        {
          value: lead.status,
          onChange: (e) => updateLeadStatus(lead.id, e.target.value),
          className: "lcrm-status-select",
          children: [
            /* @__PURE__ */ jsx("option", { value: "new", children: "Move to: New" }),
            /* @__PURE__ */ jsx("option", { value: "contacted", children: "Move to: Contacted" }),
            /* @__PURE__ */ jsx("option", { value: "viewing", children: "Move to: Viewing" }),
            /* @__PURE__ */ jsx("option", { value: "negotiating", children: "Move to: Negotiating" }),
            /* @__PURE__ */ jsx("option", { value: "closed_won", children: "Deal Won" }),
            /* @__PURE__ */ jsx("option", { value: "closed_lost", children: "Deal Lost" })
          ]
        }
      ) })
    ] }, lead.id)) }),
    /* @__PURE__ */ jsx("style", { children: `
                .lcrm-container { display: flex; flex-direction: column; gap: 1.5rem; width: 100%; max-width: 1200px; margin: 0 auto; }
                .lcrm-header { display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem; }
                .lcrm-title { font-size: 1.25rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.25rem; }
                .lcrm-description { font-size: 0.85rem; color: var(--text-muted); }
                
                .lcrm-filters { display: flex; gap: 0.5rem; background: var(--bg-main); padding: 0.25rem; border-radius: 8px; border: 1px solid var(--border-subtle); }
                .lcrm-filters button { background: transparent; border: none; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.8rem; font-weight: 500; color: var(--text-muted); cursor: pointer; transition: all 0.2s; }
                .lcrm-filters button:hover { color: var(--text-main); }
                .lcrm-filters button.active { background: var(--text-main); color: var(--bg-main); }

                .lcrm-loading { padding: 4rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: var(--text-muted); }
                
                .lcrm-empty { padding: 5rem 2rem; background: var(--bg-card); border-radius: 12px; border: 1px dashed var(--border-medium); text-align: center; color: var(--text-muted); }
                .lcrm-empty-icon { opacity: 0.3; margin-bottom: 1rem; }
                .lcrm-empty p { font-size: 1rem; font-weight: 500; color: var(--text-main); }
                .lcrm-empty .lcrm-empty-sub { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem; font-weight: 400; }

                .lcrm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; }
                
                .lcrm-card { background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
                .lcrm-card:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px rgba(0,0,0,0.15); border-color: var(--border-medium); }

                .lcrm-card-header { padding: 1.25rem; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
                .lcrm-card-title { display: flex; align-items: center; gap: 0.5rem; color: var(--text-main); }
                .lcrm-card-title h3 { font-size: 1rem; font-weight: 600; margin: 0; line-height: 1.2; }
                .lcrm-status-badge { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: 99px; border: 1px solid; white-space: nowrap; }

                .lcrm-card-body { padding: 1.25rem; display: flex; flex-direction: column; gap: 1rem; flex: 1; }
                
                .lcrm-contact-info { display: flex; flex-direction: column; gap: 0.4rem; background: var(--bg-main); padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-subtle); }
                .lcrm-info-row { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-main); }
                .lcrm-info-row svg { color: var(--text-muted); }

                .lcrm-property-ref { font-size: 0.8rem; color: var(--text-main); background: rgba(59,130,246,0.1); padding: 0.5rem 0.75rem; border-radius: 6px; border-left: 3px solid var(--accent-primary); }
                .lcrm-property-ref strong { color: var(--accent-primary); font-weight: 600; }

                .lcrm-message { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; background: var(--bg-main); padding: 0.75rem; border-radius: 8px; position: relative; }
                .lcrm-msg-icon { position: absolute; top: 0.75rem; left: 0.75rem; opacity: 0.3; }
                .lcrm-message p { margin: 0; padding-left: 1.5rem; }

                .lcrm-timestamp { font-size: 0.75rem; color: var(--text-dim); margin-top: auto; }

                .lcrm-card-footer { padding: 0.75rem 1.25rem; background: var(--bg-main); border-top: 1px solid var(--border-subtle); }
                .lcrm-status-select { width: 100%; background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border-subtle); padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; font-weight: 500; cursor: pointer; }
                .lcrm-status-select:focus { outline: none; border-color: var(--accent-primary); }
            ` })
  ] });
}

const $$Leads = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Leads & CRM | NEST Elite Dashboard", "data-astro-cid-dqh5gdyk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-root" data-astro-cid-dqh5gdyk> <!-- Sidebar Navigation --> <aside class="dashboard-sidebar" data-astro-cid-dqh5gdyk> <div class="sidebar-header" data-astro-cid-dqh5gdyk> <div class="brand-box" data-astro-cid-dqh5gdyk> <div class="brand-logo" data-astro-cid-dqh5gdyk>N</div> <div class="brand-info" data-astro-cid-dqh5gdyk> <span class="brand-name" data-astro-cid-dqh5gdyk>NEST ELITE</span> <span class="brand-tag" data-astro-cid-dqh5gdyk>AGENT PORTAL</span> </div> </div> </div> <nav class="sidebar-menu" data-astro-cid-dqh5gdyk> <div class="menu-section" data-astro-cid-dqh5gdyk> <span class="section-title" data-astro-cid-dqh5gdyk>CORE</span> <a href="/dashboard" class="menu-item" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-dqh5gdyk><rect width="7" height="9" x="3" y="3" rx="1" data-astro-cid-dqh5gdyk></rect><rect width="7" height="5" x="14" y="3" rx="1" data-astro-cid-dqh5gdyk></rect><rect width="7" height="9" x="14" y="12" rx="1" data-astro-cid-dqh5gdyk></rect><rect width="7" height="5" x="3" y="16" rx="1" data-astro-cid-dqh5gdyk></rect></svg> <span data-astro-cid-dqh5gdyk>Overview</span> </a> <a href="/dashboard/properties" class="menu-item" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-dqh5gdyk><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-dqh5gdyk></path><polyline points="9 22 9 12 15 12 15 22" data-astro-cid-dqh5gdyk></polyline></svg> <span data-astro-cid-dqh5gdyk>Properties</span> </a> <a href="/dashboard/profile" class="menu-item" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-dqh5gdyk><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" data-astro-cid-dqh5gdyk></path><circle cx="12" cy="7" r="4" data-astro-cid-dqh5gdyk></circle></svg> <span data-astro-cid-dqh5gdyk>Profile</span> </a> </div> <div class="menu-section" data-astro-cid-dqh5gdyk> <span class="section-title" data-astro-cid-dqh5gdyk>ENGAGEMENT</span> <a href="/dashboard/leads" class="menu-item active" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-dqh5gdyk><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-dqh5gdyk></path><circle cx="9" cy="7" r="4" data-astro-cid-dqh5gdyk></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-dqh5gdyk></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-dqh5gdyk></path></svg> <span data-astro-cid-dqh5gdyk>Leads & CRM</span> </a> <a href="/dashboard/calendar" class="menu-item" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-dqh5gdyk><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-astro-cid-dqh5gdyk></rect><line x1="16" x2="16" y1="2" y2="6" data-astro-cid-dqh5gdyk></line><line x1="8" x2="8" y1="2" y2="6" data-astro-cid-dqh5gdyk></line><line x1="3" x2="21" y1="10" y2="10" data-astro-cid-dqh5gdyk></line></svg> <span data-astro-cid-dqh5gdyk>Calendar</span> </a> </div> <div class="menu-section" data-astro-cid-dqh5gdyk> <span class="section-title" data-astro-cid-dqh5gdyk>GROWTH</span> <a href="/dashboard/marketing" class="menu-item" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-dqh5gdyk><path d="m12 14 4-4" data-astro-cid-dqh5gdyk></path><path d="M3.34 19a10 10 0 1 1 17.32 0" data-astro-cid-dqh5gdyk></path></svg> <span data-astro-cid-dqh5gdyk>Marketing</span> </a> <a href="/dashboard/performance" class="menu-item" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-dqh5gdyk><path d="M12 20V10" data-astro-cid-dqh5gdyk></path><path d="M18 20V4" data-astro-cid-dqh5gdyk></path><path d="M6 20v-4" data-astro-cid-dqh5gdyk></path></svg> <span data-astro-cid-dqh5gdyk>Analytics</span> </a> </div> </nav> <div class="sidebar-footer" data-astro-cid-dqh5gdyk> <button id="theme-toggle" class="theme-switch" aria-label="Toggle Theme" data-astro-cid-dqh5gdyk> <div class="switch-icons" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon" data-astro-cid-dqh5gdyk><circle cx="12" cy="12" r="4" data-astro-cid-dqh5gdyk></circle><path d="M12 2v2" data-astro-cid-dqh5gdyk></path><path d="M12 20v2" data-astro-cid-dqh5gdyk></path><path d="m4.93 4.93 1.41 1.41" data-astro-cid-dqh5gdyk></path><path d="m17.66 17.66 1.41 1.41" data-astro-cid-dqh5gdyk></path><path d="M2 12h2" data-astro-cid-dqh5gdyk></path><path d="M20 12h2" data-astro-cid-dqh5gdyk></path><path d="m6.34 17.66-1.41 1.41" data-astro-cid-dqh5gdyk></path><path d="m19.07 4.93-1.41 1.41" data-astro-cid-dqh5gdyk></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon" data-astro-cid-dqh5gdyk><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-astro-cid-dqh5gdyk></path></svg> </div> <span class="switch-text" data-astro-cid-dqh5gdyk>Switch Theme</span> </button> <div class="footer-divider" data-astro-cid-dqh5gdyk></div> <button id="logout-btn" class="menu-item logout" data-astro-cid-dqh5gdyk> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon logout-icon" data-astro-cid-dqh5gdyk><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-dqh5gdyk></path><polyline points="16 17 21 12 16 7" data-astro-cid-dqh5gdyk></polyline><line x1="21" x2="9" y1="12" y2="12" data-astro-cid-dqh5gdyk></line></svg> <span data-astro-cid-dqh5gdyk>Logout</span> </button> </div> </aside> <!-- Main Content Area --> <main class="dashboard-main" data-astro-cid-dqh5gdyk> <header class="main-header" data-astro-cid-dqh5gdyk> <div class="greeting-box" data-astro-cid-dqh5gdyk> <h1 class="welcome-text" data-astro-cid-dqh5gdyk>Leads & CRM</h1> <p id="user-display" class="user-id" data-astro-cid-dqh5gdyk>Manage your potential clients ✨</p> </div> <div class="header-actions" data-astro-cid-dqh5gdyk> ${renderComponent($$result2, "NotificationBell", NotificationBell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/NotificationBell.tsx", "client:component-export": "default", "data-astro-cid-dqh5gdyk": true })} <div class="profile-summary" data-astro-cid-dqh5gdyk> <div class="profile-text" data-astro-cid-dqh5gdyk> <span id="user-email-full" class="email-label" data-astro-cid-dqh5gdyk></span> <span class="badge-elite" data-astro-cid-dqh5gdyk>Elite Member</span> </div> <div class="profile-orb" data-astro-cid-dqh5gdyk></div> </div> </div> </header> <div class="main-scroll" data-astro-cid-dqh5gdyk> <div class="content-wrapper" data-astro-cid-dqh5gdyk> ${renderComponent($$result2, "LeadsCRM", LeadsCRM, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/LeadsCRM.tsx", "client:component-export": "default", "data-astro-cid-dqh5gdyk": true })} </div> </div> </main> </div> ` })} ${renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/leads.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/leads.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/leads.astro";
const $$url = "/dashboard/leads";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Leads,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
