import { c as createComponent, r as renderComponent, g as renderScript, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
import { $ as $$DashboardLayout, N as NotificationBell } from '../../chunks/NotificationBell_DhIfkeMo.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { p as payloadClient, P as PAYLOAD_URL } from '../../chunks/payload-client_0exDmbme.mjs';
import { Home, Eye, TrendingUp, Clock, Search, Filter, Plus, MapPin, BedDouble, Bath, Ruler, Edit2, Trash2 } from 'lucide-react';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

function PropertyList({ variant = "overview" }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadProperties();
  }, []);
  const loadProperties = async () => {
    try {
      const data = await payloadClient.getMyProperties();
      setProperties(data.docs || []);
    } catch (error) {
      console.error("Failed to load properties", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this listing?")) return;
    try {
      await payloadClient.deleteProperty(id);
      setProperties(properties.filter((p) => p.id !== id));
    } catch (error) {
      alert("Unable to delete listing.");
    }
  };
  if (loading) return /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem" }, children: /* @__PURE__ */ jsx("div", { className: "pl-spin-loader" }) });
  const totalViews = properties.reduce((sum, p) => sum + (p.view_count || 0), 0);
  const pendingCount = properties.filter((p) => p.status === "pending").length;
  const activeCount = properties.filter((p) => p.status === "active").length;
  const clickRate = totalViews > 0 && properties.length > 0 ? (activeCount / properties.length * 100).toFixed(1) : "0.0";
  const stats = [
    {
      label: "Total Listings",
      val: String(properties.length),
      sub: "ALL LISTINGS",
      icon: Home,
      accent: "#3b82f6",
      accentBg: "rgba(59,130,246,0.1)",
      accentGlow: "rgba(59,130,246,0.15)"
    },
    {
      label: "Total Views",
      val: totalViews.toLocaleString(),
      sub: "TOTAL VIEWS",
      icon: Eye,
      accent: "#8b5cf6",
      accentBg: "rgba(139,92,246,0.1)",
      accentGlow: "rgba(139,92,246,0.15)"
    },
    {
      label: "Active Rate",
      val: `${clickRate}%`,
      sub: "ACTIVE LISTINGS",
      icon: TrendingUp,
      accent: "#10b981",
      accentBg: "rgba(16,185,129,0.1)",
      accentGlow: "rgba(16,185,129,0.15)"
    },
    {
      label: "Pending Review",
      val: String(pendingCount),
      sub: "PENDING REVIEW",
      icon: Clock,
      accent: "#f59e0b",
      accentBg: "rgba(245,158,11,0.1)",
      accentGlow: "rgba(245,158,11,0.15)"
    }
  ];
  const displayProperties = variant === "overview" ? properties.slice(0, 4) : properties;
  return /* @__PURE__ */ jsxs("div", { className: "pl-root", children: [
    variant === "overview" && /* @__PURE__ */ jsx("div", { className: "pl-stats-grid", children: stats.map((stat, i) => {
      const Icon = stat.icon;
      return /* @__PURE__ */ jsxs("div", { className: "pl-stat-card", style: { "--stat-accent": stat.accent, "--stat-bg": stat.accentBg, "--stat-glow": stat.accentGlow }, children: [
        /* @__PURE__ */ jsxs("div", { className: "pl-stat-header", children: [
          /* @__PURE__ */ jsx("div", { className: "pl-stat-icon", children: /* @__PURE__ */ jsx(Icon, { size: 17 }) }),
          /* @__PURE__ */ jsx("span", { className: "pl-stat-sub", children: stat.sub })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pl-stat-value", children: stat.val }),
        /* @__PURE__ */ jsx("div", { className: "pl-stat-label", children: stat.label })
      ] }, i);
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "pl-section-header", children: [
      /* @__PURE__ */ jsxs("div", { className: "pl-section-title-block", children: [
        /* @__PURE__ */ jsx("h2", { className: "pl-section-title", children: variant === "overview" ? "Recent Listings" : "Property Portfolio" }),
        /* @__PURE__ */ jsx("p", { className: "pl-section-sub", children: variant === "overview" ? "A quick glance at your latest property listings." : "Manage your property listings with Asia-Pacific's professional management system." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pl-controls", children: [
        variant === "properties" && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "pl-search-wrap", children: [
            /* @__PURE__ */ jsx(Search, { size: 14, className: "pl-search-icon" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Search by name / ID...",
                className: "pl-search-input"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("button", { className: "pl-filter-btn", title: "Filter", children: /* @__PURE__ */ jsx(Filter, { size: 16 }) })
        ] }),
        variant === "overview" && properties.length > 4 && /* @__PURE__ */ jsx("a", { href: "/dashboard/properties", className: "pl-add-btn", style: { background: "var(--bg-card)", border: "1px solid var(--border-medium)", color: "var(--text-main)", boxShadow: "none" }, children: /* @__PURE__ */ jsx("span", { children: "View All" }) }),
        /* @__PURE__ */ jsxs("a", { href: "/dashboard/new", className: "pl-add-btn", children: [
          /* @__PURE__ */ jsx(Plus, { size: 15 }),
          /* @__PURE__ */ jsx("span", { children: "Add New Listing" })
        ] })
      ] })
    ] }),
    variant === "overview" ? /* @__PURE__ */ jsx("div", { className: "pl-props-grid", children: displayProperties.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "pl-empty", children: [
      /* @__PURE__ */ jsx("div", { className: "pl-empty-icon-wrap", children: /* @__PURE__ */ jsx(Home, { size: 28, className: "pl-empty-icon" }) }),
      /* @__PURE__ */ jsx("h3", { className: "pl-empty-title", children: "No listings in your portfolio yet" }),
      /* @__PURE__ */ jsx("p", { className: "pl-empty-sub", children: "Start creating your first property listing to present via the Nest of Assets system." }),
      /* @__PURE__ */ jsx("a", { href: "/dashboard/new", className: "pl-empty-cta", children: "Start Listing Now" })
    ] }) : displayProperties.map((prop) => /* @__PURE__ */ jsxs("div", { className: "pl-prop-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "pl-prop-thumb", children: [
        prop.thumbnail ? /* @__PURE__ */ jsx(
          "img",
          {
            src: typeof prop.thumbnail === "object" && prop.thumbnail.url ? prop.thumbnail.url.startsWith("http") ? prop.thumbnail.url : `${PAYLOAD_URL}${prop.thumbnail.url}` : typeof prop.thumbnail === "string" && prop.thumbnail.startsWith("http") ? prop.thumbnail : `${PAYLOAD_URL}${prop.thumbnail}`,
            alt: prop.title,
            className: "pl-prop-img",
            onError: (e) => {
              e.target.src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600";
            }
          }
        ) : /* @__PURE__ */ jsx("div", { className: "pl-prop-placeholder", children: /* @__PURE__ */ jsx(Home, { size: 32 }) }),
        /* @__PURE__ */ jsxs("div", { className: "pl-prop-badges", children: [
          /* @__PURE__ */ jsx("span", { className: "pl-badge pl-badge-type", children: prop.listingType === "sale" ? "Sale" : "Rent" }),
          /* @__PURE__ */ jsx("span", { className: `pl-badge ${prop.status === "active" ? "pl-badge-active" : "pl-badge-pending"}`, children: prop.status === "active" ? "Online" : "Pending" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pl-prop-body", children: [
        /* @__PURE__ */ jsxs("div", { className: "pl-prop-meta", children: [
          /* @__PURE__ */ jsx("h3", { className: "pl-prop-title", children: prop.title }),
          /* @__PURE__ */ jsxs("span", { className: "pl-prop-id", children: [
            "#",
            String(prop.id).slice(-4)
          ] })
        ] }),
        prop.project_name && /* @__PURE__ */ jsx("p", { className: "pl-prop-project", children: prop.project_name }),
        /* @__PURE__ */ jsxs("p", { className: "pl-prop-addr", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 11 }),
          /* @__PURE__ */ jsx("span", { children: prop.address })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pl-prop-specs", children: [
          prop.stats?.bedrooms != null && /* @__PURE__ */ jsxs("span", { className: "pl-spec", children: [
            /* @__PURE__ */ jsx(BedDouble, { size: 12 }),
            " ",
            prop.stats.bedrooms
          ] }),
          prop.stats?.bathrooms != null && /* @__PURE__ */ jsxs("span", { className: "pl-spec", children: [
            /* @__PURE__ */ jsx(Bath, { size: 12 }),
            " ",
            prop.stats.bathrooms
          ] }),
          prop.stats?.livingArea != null && /* @__PURE__ */ jsxs("span", { className: "pl-spec", children: [
            /* @__PURE__ */ jsx(Ruler, { size: 12 }),
            " ",
            prop.stats.livingArea,
            " sqm"
          ] }),
          prop.view_count != null && prop.view_count > 0 && /* @__PURE__ */ jsxs("span", { className: "pl-spec pl-spec-views", children: [
            /* @__PURE__ */ jsx(Eye, { size: 12 }),
            " ",
            prop.view_count.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pl-prop-footer", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "pl-price-label", children: "Investment" }),
            /* @__PURE__ */ jsxs("div", { className: "pl-price", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "฿",
                prop.price?.toLocaleString()
              ] }),
              prop.listingType === "rent" && /* @__PURE__ */ jsx("span", { className: "pl-price-unit", children: "/mo" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pl-prop-actions", children: [
            /* @__PURE__ */ jsx("a", { href: `/dashboard/edit/${prop.id}`, className: "pl-action-btn pl-edit-btn", title: "Edit", children: /* @__PURE__ */ jsx(Edit2, { size: 13 }) }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDelete(prop.id), className: "pl-action-btn pl-delete-btn", title: "Delete", children: /* @__PURE__ */ jsx(Trash2, { size: 13 }) })
          ] })
        ] })
      ] })
    ] }, prop.id)) }) : /* @__PURE__ */ jsx("div", { className: "pl-table-wrapper", children: displayProperties.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "pl-empty", children: [
      /* @__PURE__ */ jsx("div", { className: "pl-empty-icon-wrap", children: /* @__PURE__ */ jsx(Home, { size: 28, className: "pl-empty-icon" }) }),
      /* @__PURE__ */ jsx("h3", { className: "pl-empty-title", children: "No listings in your portfolio yet" }),
      /* @__PURE__ */ jsx("p", { className: "pl-empty-sub", children: "Start creating your first property listing to present via the Nest of Assets system." }),
      /* @__PURE__ */ jsx("a", { href: "/dashboard/new", className: "pl-empty-cta", children: "Start Listing Now" })
    ] }) : /* @__PURE__ */ jsxs("table", { className: "pl-table", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { children: "Listing Details" }),
        /* @__PURE__ */ jsx("th", { children: "Location" }),
        /* @__PURE__ */ jsx("th", { children: "Status / Type" }),
        /* @__PURE__ */ jsx("th", { children: "Specs" }),
        /* @__PURE__ */ jsx("th", { children: "Price" }),
        /* @__PURE__ */ jsx("th", { children: "Views" }),
        /* @__PURE__ */ jsx("th", { style: { textAlign: "right" }, children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: displayProperties.map((prop) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "plt-listing", children: [
          /* @__PURE__ */ jsx("div", { className: "plt-thumb", children: prop.thumbnail ? /* @__PURE__ */ jsx(
            "img",
            {
              src: typeof prop.thumbnail === "object" && prop.thumbnail.url ? prop.thumbnail.url.startsWith("http") ? prop.thumbnail.url : `${PAYLOAD_URL}${prop.thumbnail.url}` : typeof prop.thumbnail === "string" && prop.thumbnail.startsWith("http") ? prop.thumbnail : `${PAYLOAD_URL}${prop.thumbnail}`,
              alt: prop.title,
              onError: (e) => {
                e.target.src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200";
              }
            }
          ) : /* @__PURE__ */ jsx("div", { className: "plt-placeholder", children: /* @__PURE__ */ jsx(Home, { size: 20 }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "plt-info", children: [
            /* @__PURE__ */ jsx("div", { className: "plt-title", title: prop.title, children: prop.title }),
            /* @__PURE__ */ jsxs("div", { className: "plt-id", children: [
              "#",
              String(prop.id).slice(-4)
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "plt-loc", title: prop.address, children: [
          /* @__PURE__ */ jsx(MapPin, { size: 11 }),
          /* @__PURE__ */ jsx("span", { children: prop.address || "-" })
        ] }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "plt-status-col", children: [
          /* @__PURE__ */ jsx("span", { className: `pl-badge ${prop.status === "active" ? "pl-badge-active" : "pl-badge-pending"}`, children: prop.status === "active" ? "Online" : "Pending" }),
          /* @__PURE__ */ jsx("span", { className: "pl-badge pl-badge-type", children: prop.listingType === "sale" ? "Sale" : "Rent" })
        ] }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "plt-specs", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(BedDouble, { size: 12 }),
            " ",
            prop.stats?.bedrooms || "-"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Bath, { size: 12 }),
            " ",
            prop.stats?.bathrooms || "-"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Ruler, { size: 12 }),
            " ",
            prop.stats?.livingArea || "-",
            "m²"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "plt-price", children: [
          "฿",
          prop.price?.toLocaleString() || "-",
          prop.listingType === "rent" && /* @__PURE__ */ jsx("span", { className: "plt-price-unit", children: "/mo" })
        ] }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "plt-views", children: [
          /* @__PURE__ */ jsx(Eye, { size: 12 }),
          " ",
          prop.view_count?.toLocaleString() || 0
        ] }) }),
        /* @__PURE__ */ jsx("td", { children: /* @__PURE__ */ jsxs("div", { className: "plt-actions", style: { justifyContent: "flex-end" }, children: [
          /* @__PURE__ */ jsx("a", { href: `/dashboard/edit/${prop.id}`, className: "pl-action-btn pl-edit-btn", title: "Edit", children: /* @__PURE__ */ jsx(Edit2, { size: 13 }) }),
          /* @__PURE__ */ jsx("button", { onClick: () => handleDelete(prop.id), className: "pl-action-btn pl-delete-btn", title: "Delete", children: /* @__PURE__ */ jsx(Trash2, { size: 13 }) })
        ] }) })
      ] }, prop.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
                /* ─── Root ─── */
                .pl-root {
                    display: flex;
                    flex-direction: column;
                    gap: 1.75rem;
                    width: 100%;
                    min-width: 0;
                    box-sizing: border-box;
                }

                /* ─── Loader ─── */
                .pl-spin-loader {
                    width: 36px;
                    height: 36px;
                    border: 2.5px solid rgba(59,130,246,0.15);
                    border-top-color: #3b82f6;
                    border-radius: 50%;
                    animation: pl-spin 0.75s linear infinite;
                }
                @keyframes pl-spin { to { transform: rotate(360deg); } }

                /* ─── Stats Grid ─── */
                .pl-stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                    width: 100%;
                    min-width: 0;
                    box-sizing: border-box;
                }

                .pl-stat-card {
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 14px;
                    padding: 1.25rem 1.25rem 1.125rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                    min-width: 0;
                    overflow: hidden;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    position: relative;
                }

                .pl-stat-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 14px;
                    background: linear-gradient(135deg, var(--stat-glow, transparent) 0%, transparent 60%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }

                .pl-stat-card:hover {
                    border-color: var(--border-medium, rgba(255,255,255,0.1));
                    box-shadow: 0 6px 20px -6px rgba(0,0,0,0.15);
                }

                .pl-stat-card:hover::before {
                    opacity: 1;
                }

                .pl-stat-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 0.5rem;
                }

                .pl-stat-icon {
                    width: 34px;
                    height: 34px;
                    min-width: 34px;
                    border-radius: 9px;
                    background: var(--stat-bg, rgba(59,130,246,0.1));
                    color: var(--stat-accent, #3b82f6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .pl-stat-sub {
                    font-size: 8.5px;
                    font-weight: 700;
                    color: var(--text-dim, rgba(255,255,255,0.2));
                    letter-spacing: 0.1em;
                    text-align: right;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: calc(100% - 42px);
                }

                .pl-stat-value {
                    font-size: 1.875rem;
                    font-weight: 300;
                    letter-spacing: -0.03em;
                    color: var(--text-main, #f0f4f8);
                    line-height: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .pl-stat-label {
                    font-size: 0.775rem;
                    font-weight: 400;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* ─── Section Header ─── */
                .pl-section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: 1.25rem;
                    padding-top: 0.25rem;
                    border-top: 1px solid var(--border-subtle, rgba(255,255,255,0.05));
                    flex-wrap: wrap;
                    min-width: 0;
                }

                .pl-section-title-block {
                    min-width: 0;
                }

                .pl-section-title {
                    font-size: 1.5rem;
                    font-weight: 300;
                    letter-spacing: -0.02em;
                    color: var(--text-main, #f0f4f8);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .pl-section-sub {
                    font-size: 0.775rem;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    margin-top: 0.2rem;
                    font-weight: 300;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .pl-controls {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    flex-shrink: 0;
                }

                .pl-search-wrap {
                    position: relative;
                    flex-shrink: 0;
                }

                .pl-search-icon {
                    position: absolute;
                    left: 0.75rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-dim, rgba(255,255,255,0.2));
                    pointer-events: none;
                }

                .pl-search-input {
                    background: var(--bg-glass, rgba(255,255,255,0.03));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 9px;
                    padding: 0.55rem 0.875rem 0.55rem 2.25rem;
                    font-size: 0.8rem;
                    font-weight: 300;
                    color: var(--text-main, #f0f4f8);
                    outline: none;
                    transition: border-color 0.2s ease;
                    width: 200px;
                    font-family: inherit;
                }

                .pl-search-input::placeholder {
                    color: var(--text-dim, rgba(255,255,255,0.2));
                }

                .pl-search-input:focus {
                    border-color: var(--accent-primary, #3b82f6);
                }

                .pl-filter-btn {
                    width: 36px;
                    height: 36px;
                    background: var(--bg-glass, rgba(255,255,255,0.03));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    cursor: pointer;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                }

                .pl-filter-btn:hover {
                    color: var(--text-main, #f0f4f8);
                    border-color: var(--border-medium, rgba(255,255,255,0.1));
                }

                .pl-add-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: var(--accent-primary, #3b82f6);
                    color: white;
                    padding: 0.55rem 1.125rem;
                    border-radius: 9px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                .pl-add-btn:hover {
                    box-shadow: 0 6px 18px -4px var(--accent-primary, #3b82f6);
                    transform: translateY(-1px);
                }

                /* ─── Properties Grid ─── */
                .pl-props-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                    gap: 1rem;
                    width: 100%;
                    min-width: 0;
                    box-sizing: border-box;
                }

                /* ─── Empty State ─── */
                .pl-empty {
                    grid-column: 1 / -1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 2rem;
                    background: var(--bg-glass, rgba(255,255,255,0.02));
                    border: 1.5px dashed var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 16px;
                    text-align: center;
                    transition: border-color 0.25s ease;
                }

                .pl-empty:hover {
                    border-color: var(--border-medium, rgba(255,255,255,0.1));
                }

                .pl-empty-icon-wrap {
                    width: 64px;
                    height: 64px;
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.25rem;
                }

                .pl-empty-icon {
                    color: var(--text-dim, rgba(255,255,255,0.2));
                }

                .pl-empty-title {
                    font-size: 1.125rem;
                    font-weight: 400;
                    color: var(--text-main, #f0f4f8);
                    margin-bottom: 0.5rem;
                }

                .pl-empty-sub {
                    font-size: 0.8rem;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    font-weight: 300;
                    line-height: 1.65;
                    max-width: 320px;
                    margin-bottom: 1.75rem;
                }

                .pl-empty-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: transparent;
                    border: 1px solid var(--border-medium, rgba(255,255,255,0.1));
                    color: var(--text-main, #f0f4f8);
                    padding: 0.625rem 1.375rem;
                    border-radius: 9px;
                    font-size: 0.825rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .pl-empty-cta:hover {
                    background: var(--accent-primary, #3b82f6);
                    border-color: var(--accent-primary, #3b82f6);
                    color: white;
                    box-shadow: 0 6px 18px -4px var(--accent-primary, #3b82f6);
                }

                /* ─── Property Card ─── */
                .pl-prop-card {
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 14px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
                    min-width: 0;
                }

                .pl-prop-card:hover {
                    border-color: var(--border-medium, rgba(255,255,255,0.1));
                    box-shadow: 0 12px 32px -8px rgba(0,0,0,0.2);
                    transform: translateY(-2px);
                }

                .pl-prop-thumb {
                    position: relative;
                    aspect-ratio: 16/9;
                    overflow: hidden;
                    background: var(--bg-glass, rgba(255,255,255,0.02));
                    flex-shrink: 0;
                }

                .pl-prop-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                    display: block;
                }

                .pl-prop-card:hover .pl-prop-img {
                    transform: scale(1.04);
                }

                .pl-prop-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-dim, rgba(255,255,255,0.2));
                }

                .pl-prop-badges {
                    position: absolute;
                    top: 0.625rem;
                    left: 0.625rem;
                    display: flex;
                    gap: 0.3rem;
                }

                .pl-badge {
                    padding: 0.175rem 0.55rem;
                    border-radius: 5px;
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.07em;
                    backdrop-filter: blur(8px);
                    border: 1px solid;
                }

                .pl-badge-type {
                    background: rgba(0,0,0,0.45);
                    border-color: rgba(255,255,255,0.1);
                    color: rgba(255,255,255,0.9);
                }

                .pl-badge-active {
                    background: rgba(16,185,129,0.3);
                    border-color: rgba(16,185,129,0.25);
                    color: #6ee7b7;
                }

                .pl-badge-pending {
                    background: rgba(245,158,11,0.3);
                    border-color: rgba(245,158,11,0.25);
                    color: #fcd34d;
                }

                .pl-prop-body {
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                    flex: 1;
                    min-width: 0;
                }

                .pl-prop-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 0.5rem;
                    min-width: 0;
                }

                .pl-prop-title {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--text-main, #f0f4f8);
                    line-height: 1.4;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    min-width: 0;
                }

                .pl-prop-id {
                    font-size: 9px;
                    font-family: monospace;
                    color: var(--text-dim, rgba(255,255,255,0.2));
                    font-weight: 700;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                .pl-prop-addr {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    font-size: 0.75rem;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    font-weight: 300;
                    overflow: hidden;
                    min-width: 0;
                }

                .pl-prop-addr svg {
                    color: var(--accent-primary, #3b82f6);
                    flex-shrink: 0;
                }

                .pl-prop-addr span {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .pl-prop-project {
                    font-size: 0.7rem;
                    color: var(--accent-primary, #3b82f6);
                    font-weight: 500;
                    opacity: 0.8;
                }

                .pl-prop-specs {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    padding: 0.5rem 0 0.25rem;
                }

                .pl-spec {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.7rem;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    font-weight: 400;
                }

                .pl-spec svg {
                    color: var(--text-dim, rgba(255,255,255,0.25));
                }

                .pl-spec-views {
                    color: var(--accent-secondary, #8b5cf6);
                }
                .pl-spec-views svg {
                    color: var(--accent-secondary, #8b5cf6);
                }

                .pl-prop-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: auto;
                    padding-top: 0.75rem;
                    border-top: 1px solid var(--border-subtle, rgba(255,255,255,0.05));
                    min-width: 0;
                }

                .pl-price-label {
                    font-size: 8px;
                    font-weight: 700;
                    color: var(--text-dim, rgba(255,255,255,0.2));
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    margin-bottom: 0.2rem;
                }

                .pl-price {
                    display: flex;
                    align-items: baseline;
                    gap: 0.2rem;
                    font-size: 1.125rem;
                    font-weight: 300;
                    color: var(--text-main, #f0f4f8);
                    letter-spacing: -0.02em;
                    white-space: nowrap;
                }

                .pl-price-unit {
                    font-size: 0.7rem;
                    color: var(--text-dim, rgba(255,255,255,0.2));
                }

                .pl-prop-actions {
                    display: flex;
                    gap: 0.3rem;
                    flex-shrink: 0;
                }

                .pl-action-btn {
                    width: 30px;
                    height: 30px;
                    border-radius: 7px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--bg-glass, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    cursor: pointer;
                    transition: all 0.18s ease;
                    text-decoration: none;
                }

                .pl-edit-btn {
                    color: var(--text-muted, rgba(255,255,255,0.4));
                }

                .pl-edit-btn:hover {
                    background: var(--accent-primary, #3b82f6);
                    border-color: var(--accent-primary, #3b82f6);
                    color: white;
                }

                .pl-delete-btn {
                    color: var(--text-dim, rgba(255,255,255,0.2));
                }

                .pl-delete-btn:hover {
                    background: rgba(239,68,68,0.12);
                    border-color: rgba(239,68,68,0.25);
                    color: #f87171;
                }

                /* ─── Table Layout ─── */
                .pl-table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                    background: var(--bg-card, rgba(255,255,255,0.02));
                    border: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    border-radius: 14px;
                    /* Customize scrollbar */
                    scrollbar-width: thin;
                    scrollbar-color: var(--border-medium) transparent;
                }
                .pl-table-wrapper::-webkit-scrollbar {
                    height: 8px;
                }
                .pl-table-wrapper::-webkit-scrollbar-thumb {
                    background-color: var(--border-medium);
                    border-radius: 4px;
                }

                .pl-table {
                    width: 100%;
                    min-width: 900px;
                    border-collapse: collapse;
                    text-align: left;
                }

                .pl-table th {
                    padding: 1rem 1.25rem;
                    font-size: 0.725rem;
                    font-weight: 700;
                    color: var(--text-muted, rgba(255,255,255,0.4));
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                }

                .pl-table td {
                    padding: 1rem 1.25rem;
                    border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
                    vertical-align: middle;
                }

                .pl-table tbody tr:last-child td {
                    border-bottom: none;
                }

                .pl-table tbody tr {
                    transition: background 0.2s ease;
                }

                .pl-table tbody tr:hover {
                    background: var(--bg-glass, rgba(255,255,255,0.02));
                }
                
                .plt-listing {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .plt-thumb {
                    width: 48px;
                    height: 48px;
                    border-radius: 8px;
                    overflow: hidden;
                    background: var(--bg-glass);
                    flex-shrink: 0;
                    border: 1px solid var(--border-subtle);
                }
                
                .plt-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .plt-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-muted);
                }

                .plt-info {
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;
                    max-width: 250px;
                }

                .plt-title {
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--text-main);
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .plt-id {
                    font-size: 0.65rem;
                    font-family: monospace;
                    color: var(--text-dim);
                }

                .plt-loc {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }
                .plt-loc svg {
                    color: var(--accent-primary);
                }
                .plt-loc span {
                    max-width: 150px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .plt-status-col {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.4rem;
                }

                .plt-specs {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-size: 0.75rem;
                    color: var(--text-muted);
                }
                .plt-specs span {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                .plt-specs svg {
                    color: var(--text-dim);
                }

                .plt-price {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--text-main);
                }
                .plt-price-unit {
                    font-size: 0.7rem;
                    color: var(--text-dim);
                    font-weight: 400;
                    margin-left: 2px;
                }

                .plt-views {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                    font-size: 0.75rem;
                    color: var(--accent-secondary);
                    font-weight: 500;
                }

                .plt-actions {
                    display: flex;
                    gap: 0.4rem;
                }

                /* ─── Responsive ─── */
                @media (max-width: 1400px) {
                    .pl-stats-grid {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }

                @media (max-width: 1100px) {
                    .pl-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 900px) {
                    .pl-section-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .pl-controls {
                        width: 100%;
                        flex-wrap: wrap;
                    }
                    .pl-search-wrap {
                        flex: 1;
                    }
                    .pl-search-input {
                        width: 100%;
                    }
                    .pl-add-btn {
                        flex: 1;
                        justify-content: center;
                    }
                }

                @media (max-width: 600px) {
                    .pl-stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.75rem;
                    }
                    .pl-stat-card {
                        padding: 1rem;
                    }
                    .pl-stat-value {
                        font-size: 1.5rem;
                    }
                }
            ` })
  ] });
}

const $$Properties = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E2D\u0E2A\u0E31\u0E07\u0E2B\u0E32\u0E23\u0E34\u0E21\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C | NEST Elite Dashboard", "data-astro-cid-eundrv7d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="dashboard-root" data-astro-cid-eundrv7d> <!-- Sidebar Navigation --> <aside class="dashboard-sidebar" data-astro-cid-eundrv7d> <div class="sidebar-header" data-astro-cid-eundrv7d> <div class="brand-box" data-astro-cid-eundrv7d> <div class="brand-logo" data-astro-cid-eundrv7d>N</div> <div class="brand-info" data-astro-cid-eundrv7d> <span class="brand-name" data-astro-cid-eundrv7d>NEST ELITE</span> <span class="brand-tag" data-astro-cid-eundrv7d>AGENT PORTAL</span> </div> </div> </div> <nav class="sidebar-menu" data-astro-cid-eundrv7d> <div class="menu-section" data-astro-cid-eundrv7d> <span class="section-title" data-astro-cid-eundrv7d>CORE</span> <a href="/dashboard" class="menu-item" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-eundrv7d><rect width="7" height="9" x="3" y="3" rx="1" data-astro-cid-eundrv7d></rect><rect width="7" height="5" x="14" y="3" rx="1" data-astro-cid-eundrv7d></rect><rect width="7" height="9" x="14" y="12" rx="1" data-astro-cid-eundrv7d></rect><rect width="7" height="5" x="3" y="16" rx="1" data-astro-cid-eundrv7d></rect></svg> <span data-astro-cid-eundrv7d>Overview</span> </a> <a href="/dashboard/properties" class="menu-item active" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-eundrv7d><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-eundrv7d></path><polyline points="9 22 9 12 15 12 15 22" data-astro-cid-eundrv7d></polyline></svg> <span data-astro-cid-eundrv7d>Properties</span> </a> <a href="/dashboard/profile" class="menu-item" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-eundrv7d><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" data-astro-cid-eundrv7d></path><circle cx="12" cy="7" r="4" data-astro-cid-eundrv7d></circle></svg> <span data-astro-cid-eundrv7d>Profile</span> </a> </div> <div class="menu-section" data-astro-cid-eundrv7d> <span class="section-title" data-astro-cid-eundrv7d>ENGAGEMENT</span> <a href="/dashboard/leads" class="menu-item" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-eundrv7d><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-eundrv7d></path><circle cx="9" cy="7" r="4" data-astro-cid-eundrv7d></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-eundrv7d></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-eundrv7d></path></svg> <span data-astro-cid-eundrv7d>Leads & CRM</span> </a> <a href="/dashboard/calendar" class="menu-item" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-eundrv7d><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-astro-cid-eundrv7d></rect><line x1="16" x2="16" y1="2" y2="6" data-astro-cid-eundrv7d></line><line x1="8" x2="8" y1="2" y2="6" data-astro-cid-eundrv7d></line><line x1="3" x2="21" y1="10" y2="10" data-astro-cid-eundrv7d></line></svg> <span data-astro-cid-eundrv7d>Calendar</span> </a> </div> <div class="menu-section" data-astro-cid-eundrv7d> <span class="section-title" data-astro-cid-eundrv7d>GROWTH</span> <a href="/dashboard/marketing" class="menu-item" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-eundrv7d><path d="m12 14 4-4" data-astro-cid-eundrv7d></path><path d="M3.34 19a10 10 0 1 1 17.32 0" data-astro-cid-eundrv7d></path></svg> <span data-astro-cid-eundrv7d>Marketing</span> </a> <a href="/dashboard/performance" class="menu-item" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon" data-astro-cid-eundrv7d><path d="M12 20V10" data-astro-cid-eundrv7d></path><path d="M18 20V4" data-astro-cid-eundrv7d></path><path d="M6 20v-4" data-astro-cid-eundrv7d></path></svg> <span data-astro-cid-eundrv7d>Analytics</span> </a> </div> </nav> <div class="sidebar-footer" data-astro-cid-eundrv7d> <button id="theme-toggle" class="theme-switch" aria-label="Toggle Theme" data-astro-cid-eundrv7d> <div class="switch-icons" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon" data-astro-cid-eundrv7d><circle cx="12" cy="12" r="4" data-astro-cid-eundrv7d></circle><path d="M12 2v2" data-astro-cid-eundrv7d></path><path d="M12 20v2" data-astro-cid-eundrv7d></path><path d="m4.93 4.93 1.41 1.41" data-astro-cid-eundrv7d></path><path d="m17.66 17.66 1.41 1.41" data-astro-cid-eundrv7d></path><path d="M2 12h2" data-astro-cid-eundrv7d></path><path d="M20 12h2" data-astro-cid-eundrv7d></path><path d="m6.34 17.66-1.41 1.41" data-astro-cid-eundrv7d></path><path d="m19.07 4.93-1.41 1.41" data-astro-cid-eundrv7d></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon" data-astro-cid-eundrv7d><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-astro-cid-eundrv7d></path></svg> </div> <span class="switch-text" data-astro-cid-eundrv7d>Switch Theme</span> </button> <div class="footer-divider" data-astro-cid-eundrv7d></div> <button id="logout-btn" class="menu-item logout" data-astro-cid-eundrv7d> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-icon logout-icon" data-astro-cid-eundrv7d><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" data-astro-cid-eundrv7d></path><polyline points="16 17 21 12 16 7" data-astro-cid-eundrv7d></polyline><line x1="21" x2="9" y1="12" y2="12" data-astro-cid-eundrv7d></line></svg> <span data-astro-cid-eundrv7d>Logout</span> </button> </div> </aside> <!-- Main Content Area --> <main class="dashboard-main" data-astro-cid-eundrv7d> <header class="main-header" data-astro-cid-eundrv7d> <div class="greeting-box" data-astro-cid-eundrv7d> <h1 class="welcome-text" data-astro-cid-eundrv7d>Properties Management</h1> <p id="user-display" class="user-id" data-astro-cid-eundrv7d>Manage your listings ✨</p> </div> <div class="header-actions" data-astro-cid-eundrv7d> ${renderComponent($$result2, "NotificationBell", NotificationBell, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/NotificationBell.tsx", "client:component-export": "default", "data-astro-cid-eundrv7d": true })} <div class="profile-summary" data-astro-cid-eundrv7d> <div class="profile-text" data-astro-cid-eundrv7d> <span id="user-email-full" class="email-label" data-astro-cid-eundrv7d></span> <span class="badge-elite" data-astro-cid-eundrv7d>Elite Member</span> </div> <div class="profile-orb" data-astro-cid-eundrv7d></div> </div> </div> </header> <div class="main-scroll" data-astro-cid-eundrv7d> <div class="content-wrapper" data-astro-cid-eundrv7d> ${renderComponent($$result2, "PropertyList", PropertyList, { "variant": "properties", "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/dashboard/PropertyList.tsx", "client:component-export": "default", "data-astro-cid-eundrv7d": true })} </div> </div> </main> </div> ` })} ${renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/properties.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/properties.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/dashboard/properties.astro";
const $$url = "/dashboard/properties";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Properties,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
