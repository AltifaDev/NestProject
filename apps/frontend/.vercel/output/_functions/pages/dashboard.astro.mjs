import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
import { $ as $$DashboardLayout, N as NotificationBell } from '../chunks/NotificationBell_DhIfkeMo.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { P as PAYLOAD_URL, p as payloadClient } from '../chunks/payload-client_0exDmbme.mjs';
import { Eye, Home, Activity, Heart, Calendar, ArrowUpRight, ArrowDownRight, ChevronRight, MapPin } from 'lucide-react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function OverviewDashboard() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const data = await payloadClient.getMyProperties();
        setProperties(data.docs || []);
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboardData();
  }, []);
  if (loading) return /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem" }, children: /* @__PURE__ */ jsx("div", { className: "od-spin-loader" }) });
  const totalViews = properties.reduce((sum, p) => sum + (p.view_count || 0), 0);
  const activeListings = properties.filter((p) => p.status === "active").length;
  const formatNumber = (num) => {
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return String(num);
  };
  const kpis = [
    { label: "Total Listing Views", value: formatNumber(totalViews), change: "+12.5%", isPositive: true, icon: Eye, color: "#3b82f6", bg: "rgba(59,130,246,0.1)" },
    { label: "Total Properties", value: properties.length, change: properties.length > 0 ? "+1" : "-", isPositive: true, icon: Home, color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
    { label: "Active Listings", value: activeListings, change: "-", isPositive: true, icon: Activity, color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
    { label: "Conversion Intent", value: totalViews > 0 ? "4.8%" : "0%", change: "+1.2%", isPositive: true, icon: Heart, color: "#10b981", bg: "rgba(16,185,129,0.1)" }
  ];
  const topProperties = [...properties].sort((a, b) => (b.view_count || 0) - (a.view_count || 0)).slice(0, 3).map((prop) => ({
    id: prop.id,
    title: prop.title,
    location: prop.address || "Location Unspecified",
    views: formatNumber(prop.view_count || 0),
    inquiries: Math.floor((prop.view_count || 0) * 0.05),
    // Estimated proxy for inquiries
    trend: "+5%",
    // Mock trend
    image: prop.thumbnail ? typeof prop.thumbnail === "object" && prop.thumbnail.url ? prop.thumbnail.url.startsWith("http") ? prop.thumbnail.url : `${PAYLOAD_URL}${prop.thumbnail.url}` : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200" : "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200"
  }));
  return /* @__PURE__ */ jsxs("div", { className: "od-root", children: [
    /* @__PURE__ */ jsxs("div", { className: "od-header", children: [
      /* @__PURE__ */ jsxs("div", { className: "od-title-block", children: [
        /* @__PURE__ */ jsx("h2", { className: "od-title", children: "Performance Overview" }),
        /* @__PURE__ */ jsx("p", { className: "od-subtitle", children: "Track your property engagement, traffic, and lead generation metrics." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "od-date-filter", children: [
        /* @__PURE__ */ jsx(Calendar, { size: 14, className: "od-filter-icon" }),
        /* @__PURE__ */ jsxs("select", { className: "od-select", children: [
          /* @__PURE__ */ jsx("option", { children: "Last 30 Days" }),
          /* @__PURE__ */ jsx("option", { children: "Last 7 Days" }),
          /* @__PURE__ */ jsx("option", { children: "This Year" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "od-kpi-grid", children: kpis.map((kpi, idx) => {
      const Icon = kpi.icon;
      return /* @__PURE__ */ jsxs("div", { className: "od-kpi-card", children: [
        /* @__PURE__ */ jsxs("div", { className: "od-kpi-header", children: [
          /* @__PURE__ */ jsx("div", { className: "od-kpi-icon-wrap", style: { backgroundColor: kpi.bg, color: kpi.color }, children: /* @__PURE__ */ jsx(Icon, { size: 18 }) }),
          /* @__PURE__ */ jsxs("div", { className: `od-kpi-trend ${kpi.isPositive ? "trend-up" : "trend-down"}`, children: [
            kpi.isPositive ? /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 }) : /* @__PURE__ */ jsx(ArrowDownRight, { size: 14 }),
            /* @__PURE__ */ jsx("span", { children: kpi.change })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "od-kpi-body", children: [
          /* @__PURE__ */ jsx("h3", { className: "od-kpi-value", children: kpi.value }),
          /* @__PURE__ */ jsx("p", { className: "od-kpi-label", children: kpi.label })
        ] })
      ] }, idx);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "od-charts-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "od-chart-card od-main-chart", children: [
        /* @__PURE__ */ jsxs("div", { className: "od-card-header", children: [
          /* @__PURE__ */ jsx("h3", { className: "od-card-title", children: "Audience Engagement Trend" }),
          /* @__PURE__ */ jsx("button", { className: "od-btn-icon", children: /* @__PURE__ */ jsx(Activity, { size: 16 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "od-chart-placeholder", children: [
          /* @__PURE__ */ jsxs("div", { className: "od-mock-chart", children: [
            /* @__PURE__ */ jsxs("div", { className: "od-chart-y-axis", children: [
              /* @__PURE__ */ jsx("span", { children: "150k" }),
              /* @__PURE__ */ jsx("span", { children: "100k" }),
              /* @__PURE__ */ jsx("span", { children: "50k" }),
              /* @__PURE__ */ jsx("span", { children: "0" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "od-chart-graph", children: /* @__PURE__ */ jsxs("svg", { preserveAspectRatio: "none", viewBox: "0 0 100 100", className: "od-svg-line", children: [
              /* @__PURE__ */ jsx("path", { d: "M0,80 C20,70 30,90 50,40 C70,10 80,30 100,5", fill: "none", stroke: "rgba(59,130,246,0.8)", strokeWidth: "3", vectorEffect: "non-scaling-stroke", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M0,80 C20,70 30,90 50,40 C70,10 80,30 100,5 L100,100 L0,100 Z", fill: "url(#blue-grad)" }),
              /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "blue-grad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "rgba(59,130,246,0.2)" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "rgba(59,130,246,0)" })
              ] }) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "od-chart-x-axis", children: [
            /* @__PURE__ */ jsx("span", { children: "Week 1" }),
            /* @__PURE__ */ jsx("span", { children: "Week 2" }),
            /* @__PURE__ */ jsx("span", { children: "Week 3" }),
            /* @__PURE__ */ jsx("span", { children: "Week 4" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "od-chart-card od-side-card", children: [
        /* @__PURE__ */ jsx("div", { className: "od-card-header", children: /* @__PURE__ */ jsx("h3", { className: "od-card-title", children: "Traffic Sources" }) }),
        /* @__PURE__ */ jsxs("div", { className: "od-sources-list", children: [
          /* @__PURE__ */ jsxs("div", { className: "od-source-item", children: [
            /* @__PURE__ */ jsxs("div", { className: "od-source-info", children: [
              /* @__PURE__ */ jsx("span", { className: "od-source-name", children: "Organic Search" }),
              /* @__PURE__ */ jsx("span", { className: "od-source-val", children: "45%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "od-progress-bar", children: /* @__PURE__ */ jsx("div", { className: "od-progress-fill organic" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "od-source-item", children: [
            /* @__PURE__ */ jsxs("div", { className: "od-source-info", children: [
              /* @__PURE__ */ jsx("span", { className: "od-source-name", children: "Direct Traffic" }),
              /* @__PURE__ */ jsx("span", { className: "od-source-val", children: "30%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "od-progress-bar", children: /* @__PURE__ */ jsx("div", { className: "od-progress-fill direct" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "od-source-item", children: [
            /* @__PURE__ */ jsxs("div", { className: "od-source-info", children: [
              /* @__PURE__ */ jsx("span", { className: "od-source-name", children: "Social Media" }),
              /* @__PURE__ */ jsx("span", { className: "od-source-val", children: "15%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "od-progress-bar", children: /* @__PURE__ */ jsx("div", { className: "od-progress-fill social" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "od-source-item", children: [
            /* @__PURE__ */ jsxs("div", { className: "od-source-info", children: [
              /* @__PURE__ */ jsx("span", { className: "od-source-name", children: "Referral" }),
              /* @__PURE__ */ jsx("span", { className: "od-source-val", children: "10%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "od-progress-bar", children: /* @__PURE__ */ jsx("div", { className: "od-progress-fill referral" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "od-bottom-row", children: /* @__PURE__ */ jsxs("div", { className: "od-card od-top-properties", children: [
      /* @__PURE__ */ jsxs("div", { className: "od-card-header", children: [
        /* @__PURE__ */ jsx("h3", { className: "od-card-title", children: "Top Performing Properties" }),
        /* @__PURE__ */ jsxs("a", { href: "/dashboard/properties", className: "od-view-all", children: [
          "View All Properties ",
          /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "od-props-list", children: topProperties.length > 0 ? topProperties.map((prop, idx) => /* @__PURE__ */ jsxs("div", { className: "od-prop-item", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: prop.image,
            alt: prop.title,
            className: "od-prop-img",
            onError: (e) => {
              e.target.src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200";
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "od-prop-info", children: [
          /* @__PURE__ */ jsx("h4", { className: "od-prop-name", children: prop.title }),
          /* @__PURE__ */ jsxs("span", { className: "od-prop-loc", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 11 }),
            " ",
            prop.location
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "od-prop-stats", children: [
          /* @__PURE__ */ jsxs("div", { className: "od-pstat", children: [
            /* @__PURE__ */ jsx("span", { className: "od-pstat-lbl", children: "Views" }),
            /* @__PURE__ */ jsx("span", { className: "od-pstat-val", children: prop.views })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "od-pstat", children: [
            /* @__PURE__ */ jsx("span", { className: "od-pstat-lbl", children: "Inquiries" }),
            /* @__PURE__ */ jsx("span", { className: "od-pstat-val", children: prop.inquiries })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `od-pstat-trend ${prop.trend.startsWith("+") ? "up" : "down"}`, children: prop.trend })
        ] })
      ] }, idx)) : /* @__PURE__ */ jsxs("div", { style: { padding: "2rem", textAlign: "center", color: "var(--text-muted)" }, children: [
        /* @__PURE__ */ jsx("p", { children: "No properties found yet. Start listing to see performance data." }),
        /* @__PURE__ */ jsx("a", { href: "/dashboard/new", style: { color: "var(--accent-primary)", textDecoration: "none", fontWeight: 500, marginTop: "0.5rem", display: "inline-block" }, children: "Add New Listing" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
                /* Font face */
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

                .od-root {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                    font-family: 'Inter', sans-serif;
                }

                /* Loader */
                .od-spin-loader {
                    width: 36px;
                    height: 36px;
                    border: 2.5px solid rgba(59,130,246,0.15);
                    border-top-color: #3b82f6;
                    border-radius: 50%;
                    animation: od-spin 0.75s linear infinite;
                }
                @keyframes od-spin { to { transform: rotate(360deg); } }

                /* Header */
                .od-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.05));
                }

                .od-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--text-main, #f0f4f8);
                    letter-spacing: -0.01em;
                    margin-bottom: 0.25rem;
                }

                .od-subtitle {
                    font-size: 0.85rem;
                    color: var(--text-muted, rgba(255,255,255,0.5));
                    font-weight: 400;
                }

                .od-date-filter {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .od-filter-icon {
                    position: absolute;
                    left: 0.75rem;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    pointer-events: none;
                }

                .od-select {
                    appearance: none;
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 8px;
                    padding: 0.5rem 2rem 0.5rem 2rem;
                    color: var(--text-main, #f0f4f8);
                    font-size: 0.8rem;
                    font-weight: 500;
                    outline: none;
                    cursor: pointer;
                    transition: border-color 0.2s;
                }

                .od-select:hover {
                    border-color: var(--border-medium, rgba(255,255,255,0.15));
                }

                /* KPI Grid */
                .od-kpi-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }

                .od-kpi-card {
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 12px;
                    padding: 1.25rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .od-kpi-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px -8px rgba(0,0,0,0.15);
                    border-color: var(--border-medium, rgba(255,255,255,0.1));
                }

                .od-kpi-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .od-kpi-icon-wrap {
                    width: 38px;
                    height: 38px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .od-kpi-trend {
                    display: flex;
                    align-items: center;
                    gap: 0.15rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 0.25rem 0.5rem;
                    border-radius: 20px;
                }

                .trend-up {
                    color: #10b981;
                    background: rgba(16,185,129,0.1);
                }

                .trend-down {
                    color: #ef4444;
                    background: rgba(239,68,68,0.1);
                }

                .od-kpi-value {
                    font-size: 1.75rem;
                    font-weight: 600;
                    color: var(--text-main, #f0f4f8);
                    letter-spacing: -0.02em;
                    line-height: 1.2;
                }

                .od-kpi-label {
                    font-size: 0.8rem;
                    color: var(--text-muted, rgba(255,255,255,0.5));
                    font-weight: 500;
                    margin-top: 0.2rem;
                }

                /* Charts Row */
                .od-charts-row {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 1rem;
                }

                .od-chart-card {
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 12px;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }

                .od-card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .od-card-title {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-main, #f0f4f8);
                }

                .od-btn-icon {
                    background: transparent;
                    border: none;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Main Chart Placeholder */
                .od-chart-placeholder {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    min-height: 200px;
                }

                .od-mock-chart {
                    flex: 1;
                    display: flex;
                    gap: 1rem;
                }

                .od-chart-y-axis {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size: 0.7rem;
                    color: var(--text-dim, rgba(255,255,255,0.3));
                    padding-bottom: 1.5rem;
                    text-align: right;
                    width: 30px;
                }

                .od-chart-graph {
                    flex: 1;
                    position: relative;
                    border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-left: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                }

                .od-svg-line {
                    width: 100%;
                    height: 100%;
                }

                .od-chart-x-axis {
                    display: flex;
                    justify-content: space-between;
                    padding-left: 2.8rem;
                    padding-top: 0.5rem;
                    font-size: 0.7rem;
                    color: var(--text-dim, rgba(255,255,255,0.3));
                }

                /* Traffic Sources */
                .od-sources-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .od-source-item {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .od-source-info {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .od-source-name { color: var(--text-main, #f0f4f8); }
                .od-source-val { color: var(--text-muted, rgba(255,255,255,0.5)); }

                .od-progress-bar {
                    height: 6px;
                    background: var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 3px;
                    overflow: hidden;
                }

                .od-progress-fill {
                    height: 100%;
                    border-radius: 3px;
                }

                .organic { width: 45%; background: #3b82f6; }
                .direct { width: 30%; background: #8b5cf6; }
                .social { width: 15%; background: #10b981; }
                .referral { width: 10%; background: #f59e0b; }

                /* Bottom Row: Top Properties */
                .od-card {
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 12px;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                }

                .od-view-all {
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;
                    font-size: 0.8rem;
                    color: var(--accent-primary, #3b82f6);
                    text-decoration: none;
                    transition: opacity 0.2s;
                    font-weight: 500;
                }
                .od-view-all:hover { opacity: 0.8; }

                .od-props-list {
                    display: flex;
                    flex-direction: column;
                }

                .od-prop-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 0;
                    border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.05));
                }

                .od-prop-item:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                }

                .od-prop-img {
                    width: 60px;
                    height: 60px;
                    border-radius: 8px;
                    object-fit: cover;
                }

                .od-prop-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.3rem;
                }

                .od-prop-name {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--text-main, #f0f4f8);
                }

                .od-prop-loc {
                    font-size: 0.75rem;
                    color: var(--text-muted, rgba(255,255,255,0.5));
                    display: flex;
                    align-items: center;
                    gap: 0.2rem;
                }

                .od-prop-stats {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .od-pstat {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 0.2rem;
                }

                .od-pstat-lbl {
                    font-size: 0.7rem;
                    color: var(--text-dim, rgba(255,255,255,0.3));
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .od-pstat-val {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--text-main, #f0f4f8);
                }

                .od-pstat-trend {
                    font-size: 0.8rem;
                    font-weight: 600;
                    padding: 0.3rem 0.6rem;
                    border-radius: 6px;
                }

                .od-pstat-trend.up { color: #10b981; background: rgba(16,185,129,0.1); }
                .od-pstat-trend.down { color: #ef4444; background: rgba(239,68,68,0.1); }

                /* Responsive */
                @media (max-width: 1200px) {
                    .od-kpi-grid { grid-template-columns: repeat(2, 1fr); }
                    .od-charts-row { grid-template-columns: 1fr; }
                }

                @media (max-width: 768px) {
                    .od-kpi-grid { grid-template-columns: 1fr; }
                    .od-prop-stats { display: none; }
                }
            ` })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "\u0E41\u0E1C\u0E07\u0E04\u0E27\u0E1A\u0E04\u0E38\u0E21\u0E40\u0E2D\u0E40\u0E08\u0E49\u0E19 | NEST Elite Dashboard", "data-astro-cid-y55gmoyq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-root" data-astro-cid-y55gmoyq> <!-- Sidebar Navigation --> <aside class="dashboard-sidebar" data-astro-cid-y55gmoyq> <div class="sidebar-header" data-astro-cid-y55gmoyq> <div class="brand-box" data-astro-cid-y55gmoyq> <div class="brand-logo" data-astro-cid-y55gmoyq>N</div> <div class="brand-info" data-astro-cid-y55gmoyq> <span class="brand-name" data-astro-cid-y55gmoyq>NEST ELITE</span> <span class="brand-tag" data-astro-cid-y55gmoyq>AGENT PORTAL</span> </div> </div> </div> <nav class="sidebar-menu" data-astro-cid-y55gmoyq> <div class="menu-section" data-astro-cid-y55gmoyq> <span class="section-title" data-astro-cid-y55gmoyq>CORE</span> <a href="/dashboard" class="menu-item active" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-y55gmoyq><rect width="7" height="9" x="3" y="3" rx="1" data-astro-cid-y55gmoyq></rect><rect width="7" height="5" x="14" y="3" rx="1" data-astro-cid-y55gmoyq></rect><rect width="7" height="9" x="14" y="12" rx="1" data-astro-cid-y55gmoyq></rect><rect width="7" height="5" x="3" y="16" rx="1" data-astro-cid-y55gmoyq></rect></svg> <span data-astro-cid-y55gmoyq>Overview</span> </a> <a href="/dashboard/properties" class="menu-item" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-y55gmoyq><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-y55gmoyq></path><polyline points="9 22 9 12 15 12 15 22" data-astro-cid-y55gmoyq></polyline></svg> <span data-astro-cid-y55gmoyq>Properties</span> </a> <a href="/dashboard/profile" class="menu-item" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-y55gmoyq><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" data-astro-cid-y55gmoyq></path><circle cx="12" cy="7" r="4" data-astro-cid-y55gmoyq></circle></svg> <span data-astro-cid-y55gmoyq>Profile</span> </a> </div> <div class="menu-section" data-astro-cid-y55gmoyq> <span class="section-title" data-astro-cid-y55gmoyq>ENGAGEMENT</span> <a href="/dashboard/leads" class="menu-item" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-y55gmoyq><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-y55gmoyq></path><circle cx="9" cy="7" r="4" data-astro-cid-y55gmoyq></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-y55gmoyq></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-y55gmoyq></path></svg> <span data-astro-cid-y55gmoyq>Leads & CRM</span> </a> <a href="/dashboard/calendar" class="menu-item" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-y55gmoyq><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-astro-cid-y55gmoyq></rect><line x1="16" x2="16" y1="2" y2="6" data-astro-cid-y55gmoyq></line><line x1="8" x2="8" y1="2" y2="6" data-astro-cid-y55gmoyq></line><line x1="3" x2="21" y1="10" y2="10" data-astro-cid-y55gmoyq></line></svg> <span data-astro-cid-y55gmoyq>Calendar</span> </a> </div> <div class="menu-section" data-astro-cid-y55gmoyq> <span class="section-title" data-astro-cid-y55gmoyq>GROWTH</span> <a href="/dashboard/marketing" class="menu-item" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-y55gmoyq><path d="m12 14 4-4" data-astro-cid-y55gmoyq></path><path d="M3.34 19a10 10 0 1 1 17.32 0" data-astro-cid-y55gmoyq></path></svg> <span data-astro-cid-y55gmoyq>Marketing</span> </a> <a href="/dashboard/performance" class="menu-item" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-y55gmoyq><path d="M12 20V10" data-astro-cid-y55gmoyq></path><path d="M18 20V4" data-astro-cid-y55gmoyq></path><path d="M6 20v-4" data-astro-cid-y55gmoyq></path></svg> <span data-astro-cid-y55gmoyq>Analytics</span> </a> </div> </nav> <div class="sidebar-footer" data-astro-cid-y55gmoyq> <button id="theme-toggle" class="theme-switch" aria-label="Toggle Theme" data-astro-cid-y55gmoyq> <div class="switch-icons" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon" data-astro-cid-y55gmoyq><circle cx="12" cy="12" r="4" data-astro-cid-y55gmoyq></circle><path d="M12 2v2" data-astro-cid-y55gmoyq></path><path d="M12 20v2" data-astro-cid-y55gmoyq></path><path d="m4.93 4.93 1.41 1.41" data-astro-cid-y55gmoyq></path><path d="m17.66 17.66 1.41 1.41" data-astro-cid-y55gmoyq></path><path d="M2 12h2" data-astro-cid-y55gmoyq></path><path d="M20 12h2" data-astro-cid-y55gmoyq></path><path d="m6.34 17.66-1.41 1.41" data-astro-cid-y55gmoyq></path><path d="m19.07 4.93-1.41 1.41" data-astro-cid-y55gmoyq></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon" data-astro-cid-y55gmoyq><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-astro-cid-y55gmoyq></path></svg> </div> <span class="switch-text" data-astro-cid-y55gmoyq>Switch Theme</span> </button> <div class="footer-divider" data-astro-cid-y55gmoyq></div> <button id="logout-btn" class="menu-item logout" data-astro-cid-y55gmoyq> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon logout-icon" data-astro-cid-y55gmoyq><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-y55gmoyq></path><polyline points="16 17 21 12 16 7" data-astro-cid-y55gmoyq></polyline><line x1="21" x2="9" y1="12" y2="12" data-astro-cid-y55gmoyq></line></svg> <span data-astro-cid-y55gmoyq>Logout</span> </button> </div> </aside> <!-- Main Content Area --> <main class="dashboard-main" data-astro-cid-y55gmoyq> <header class="main-header" data-astro-cid-y55gmoyq> <div class="greeting-box" data-astro-cid-y55gmoyq> <h1 class="welcome-text" data-astro-cid-y55gmoyq>Welcome Back</h1> <p id="user-display" class="user-id" data-astro-cid-y55gmoyq>Hello, Agent ✨</p> </div> <div class="header-actions" data-astro-cid-y55gmoyq> ${renderComponent($$result2, "NotificationBell", NotificationBell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/NotificationBell.tsx", "client:component-export": "default", "data-astro-cid-y55gmoyq": true })} <div class="profile-summary" data-astro-cid-y55gmoyq> <div class="profile-text" data-astro-cid-y55gmoyq> <span id="user-email-full" class="email-label" data-astro-cid-y55gmoyq></span> <span class="badge-elite" data-astro-cid-y55gmoyq>Elite Member</span> </div> <div class="profile-orb" data-astro-cid-y55gmoyq></div> </div> </div> </header> <div class="main-scroll" data-astro-cid-y55gmoyq> <div class="content-wrapper" data-astro-cid-y55gmoyq> ${renderComponent($$result2, "OverviewDashboard", OverviewDashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/OverviewDashboard.tsx", "client:component-export": "default", "data-astro-cid-y55gmoyq": true })} </div> </div> </main> </div> ` })} ${renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/index.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
