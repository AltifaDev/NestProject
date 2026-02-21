import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.CRC3r6US.js";import{p as h,P as o}from"./payload-client.Bgp2zVY_.js";import{H as i}from"./house.CZRoVNwI.js";import{E as d}from"./eye.BgHBTpqe.js";import{T as A}from"./trending-up.DzlvFEhV.js";import{C as T}from"./clock.CgxgpKB4.js";import{c as n}from"./createLucideIcon.BistqCsR.js";import{P as _,B as g}from"./plus.DlkoeglT.js";import{M as x}from"./map-pin.CAUsXeja.js";import{B as f,R as u}from"./ruler.DZ1oY-KB.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],E=n("funnel",$);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],v=n("pen",I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],C=n("search",R);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],w=n("trash-2",M);function J({variant:s="overview"}){const[r,p]=c.useState([]),[y,j]=c.useState(!0);c.useEffect(()=>{N()},[]);const N=async()=>{try{const t=await h.getMyProperties();p(t.docs||[])}catch(t){console.error("Failed to load properties",t)}finally{j(!1)}},m=async t=>{if(confirm("Are you sure you want to delete this listing?"))try{await h.deleteProperty(t),p(r.filter(a=>a.id!==t))}catch{alert("Unable to delete listing.")}};if(y)return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"6rem 2rem"},children:e.jsx("div",{className:"pl-spin-loader"})});const b=r.reduce((t,a)=>t+(a.view_count||0),0),k=r.filter(t=>t.status==="pending").length,z=r.filter(t=>t.status==="active").length,S=b>0&&r.length>0?(z/r.length*100).toFixed(1):"0.0",L=[{label:"Total Listings",val:String(r.length),sub:"ALL LISTINGS",icon:i,accent:"#3b82f6",accentBg:"rgba(59,130,246,0.1)",accentGlow:"rgba(59,130,246,0.15)"},{label:"Total Views",val:b.toLocaleString(),sub:"TOTAL VIEWS",icon:d,accent:"#8b5cf6",accentBg:"rgba(139,92,246,0.1)",accentGlow:"rgba(139,92,246,0.15)"},{label:"Active Rate",val:`${S}%`,sub:"ACTIVE LISTINGS",icon:A,accent:"#10b981",accentBg:"rgba(16,185,129,0.1)",accentGlow:"rgba(16,185,129,0.15)"},{label:"Pending Review",val:String(k),sub:"PENDING REVIEW",icon:T,accent:"#f59e0b",accentBg:"rgba(245,158,11,0.1)",accentGlow:"rgba(245,158,11,0.15)"}],l=s==="overview"?r.slice(0,4):r;return e.jsxs("div",{className:"pl-root",children:[s==="overview"&&e.jsx("div",{className:"pl-stats-grid",children:L.map((t,a)=>{const P=t.icon;return e.jsxs("div",{className:"pl-stat-card",style:{"--stat-accent":t.accent,"--stat-bg":t.accentBg,"--stat-glow":t.accentGlow},children:[e.jsxs("div",{className:"pl-stat-header",children:[e.jsx("div",{className:"pl-stat-icon",children:e.jsx(P,{size:17})}),e.jsx("span",{className:"pl-stat-sub",children:t.sub})]}),e.jsx("div",{className:"pl-stat-value",children:t.val}),e.jsx("div",{className:"pl-stat-label",children:t.label})]},a)})}),e.jsxs("div",{className:"pl-section-header",children:[e.jsxs("div",{className:"pl-section-title-block",children:[e.jsx("h2",{className:"pl-section-title",children:s==="overview"?"Recent Listings":"Property Portfolio"}),e.jsx("p",{className:"pl-section-sub",children:s==="overview"?"A quick glance at your latest property listings.":"Manage your property listings with Asia-Pacific's professional management system."})]}),e.jsxs("div",{className:"pl-controls",children:[s==="properties"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pl-search-wrap",children:[e.jsx(C,{size:14,className:"pl-search-icon"}),e.jsx("input",{type:"text",placeholder:"Search by name / ID...",className:"pl-search-input"})]}),e.jsx("button",{className:"pl-filter-btn",title:"Filter",children:e.jsx(E,{size:16})})]}),s==="overview"&&r.length>4&&e.jsx("a",{href:"/dashboard/properties",className:"pl-add-btn",style:{background:"var(--bg-card)",border:"1px solid var(--border-medium)",color:"var(--text-main)",boxShadow:"none"},children:e.jsx("span",{children:"View All"})}),e.jsxs("a",{href:"/dashboard/new",className:"pl-add-btn",children:[e.jsx(_,{size:15}),e.jsx("span",{children:"Add New Listing"})]})]})]}),s==="overview"?e.jsx("div",{className:"pl-props-grid",children:l.length===0?e.jsxs("div",{className:"pl-empty",children:[e.jsx("div",{className:"pl-empty-icon-wrap",children:e.jsx(i,{size:28,className:"pl-empty-icon"})}),e.jsx("h3",{className:"pl-empty-title",children:"No listings in your portfolio yet"}),e.jsx("p",{className:"pl-empty-sub",children:"Start creating your first property listing to present via the Nest of Assets system."}),e.jsx("a",{href:"/dashboard/new",className:"pl-empty-cta",children:"Start Listing Now"})]}):l.map(t=>e.jsxs("div",{className:"pl-prop-card",children:[e.jsxs("div",{className:"pl-prop-thumb",children:[t.thumbnail?e.jsx("img",{src:typeof t.thumbnail=="object"&&t.thumbnail.url?t.thumbnail.url.startsWith("http")?t.thumbnail.url:`${o}${t.thumbnail.url}`:typeof t.thumbnail=="string"&&t.thumbnail.startsWith("http")?t.thumbnail:`${o}${t.thumbnail}`,alt:t.title,className:"pl-prop-img",onError:a=>{a.target.src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600"}}):e.jsx("div",{className:"pl-prop-placeholder",children:e.jsx(i,{size:32})}),e.jsxs("div",{className:"pl-prop-badges",children:[e.jsx("span",{className:"pl-badge pl-badge-type",children:t.listingType==="sale"?"Sale":"Rent"}),e.jsx("span",{className:`pl-badge ${t.status==="active"?"pl-badge-active":"pl-badge-pending"}`,children:t.status==="active"?"Online":"Pending"})]})]}),e.jsxs("div",{className:"pl-prop-body",children:[e.jsxs("div",{className:"pl-prop-meta",children:[e.jsx("h3",{className:"pl-prop-title",children:t.title}),e.jsxs("span",{className:"pl-prop-id",children:["#",String(t.id).slice(-4)]})]}),t.project_name&&e.jsx("p",{className:"pl-prop-project",children:t.project_name}),e.jsxs("p",{className:"pl-prop-addr",children:[e.jsx(x,{size:11}),e.jsx("span",{children:t.address})]}),e.jsxs("div",{className:"pl-prop-specs",children:[t.stats?.bedrooms!=null&&e.jsxs("span",{className:"pl-spec",children:[e.jsx(g,{size:12})," ",t.stats.bedrooms]}),t.stats?.bathrooms!=null&&e.jsxs("span",{className:"pl-spec",children:[e.jsx(f,{size:12})," ",t.stats.bathrooms]}),t.stats?.livingArea!=null&&e.jsxs("span",{className:"pl-spec",children:[e.jsx(u,{size:12})," ",t.stats.livingArea," sqm"]}),t.view_count!=null&&t.view_count>0&&e.jsxs("span",{className:"pl-spec pl-spec-views",children:[e.jsx(d,{size:12})," ",t.view_count.toLocaleString()]})]}),e.jsxs("div",{className:"pl-prop-footer",children:[e.jsxs("div",{children:[e.jsx("p",{className:"pl-price-label",children:"Investment"}),e.jsxs("div",{className:"pl-price",children:[e.jsxs("span",{children:["฿",t.price?.toLocaleString()]}),t.listingType==="rent"&&e.jsx("span",{className:"pl-price-unit",children:"/mo"})]})]}),e.jsxs("div",{className:"pl-prop-actions",children:[e.jsx("a",{href:`/dashboard/edit/${t.id}`,className:"pl-action-btn pl-edit-btn",title:"Edit",children:e.jsx(v,{size:13})}),e.jsx("button",{onClick:()=>m(t.id),className:"pl-action-btn pl-delete-btn",title:"Delete",children:e.jsx(w,{size:13})})]})]})]})]},t.id))}):e.jsx("div",{className:"pl-table-wrapper",children:l.length===0?e.jsxs("div",{className:"pl-empty",children:[e.jsx("div",{className:"pl-empty-icon-wrap",children:e.jsx(i,{size:28,className:"pl-empty-icon"})}),e.jsx("h3",{className:"pl-empty-title",children:"No listings in your portfolio yet"}),e.jsx("p",{className:"pl-empty-sub",children:"Start creating your first property listing to present via the Nest of Assets system."}),e.jsx("a",{href:"/dashboard/new",className:"pl-empty-cta",children:"Start Listing Now"})]}):e.jsxs("table",{className:"pl-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Listing Details"}),e.jsx("th",{children:"Location"}),e.jsx("th",{children:"Status / Type"}),e.jsx("th",{children:"Specs"}),e.jsx("th",{children:"Price"}),e.jsx("th",{children:"Views"}),e.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),e.jsx("tbody",{children:l.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"plt-listing",children:[e.jsx("div",{className:"plt-thumb",children:t.thumbnail?e.jsx("img",{src:typeof t.thumbnail=="object"&&t.thumbnail.url?t.thumbnail.url.startsWith("http")?t.thumbnail.url:`${o}${t.thumbnail.url}`:typeof t.thumbnail=="string"&&t.thumbnail.startsWith("http")?t.thumbnail:`${o}${t.thumbnail}`,alt:t.title,onError:a=>{a.target.src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200"}}):e.jsx("div",{className:"plt-placeholder",children:e.jsx(i,{size:20})})}),e.jsxs("div",{className:"plt-info",children:[e.jsx("div",{className:"plt-title",title:t.title,children:t.title}),e.jsxs("div",{className:"plt-id",children:["#",String(t.id).slice(-4)]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"plt-loc",title:t.address,children:[e.jsx(x,{size:11}),e.jsx("span",{children:t.address||"-"})]})}),e.jsx("td",{children:e.jsxs("div",{className:"plt-status-col",children:[e.jsx("span",{className:`pl-badge ${t.status==="active"?"pl-badge-active":"pl-badge-pending"}`,children:t.status==="active"?"Online":"Pending"}),e.jsx("span",{className:"pl-badge pl-badge-type",children:t.listingType==="sale"?"Sale":"Rent"})]})}),e.jsx("td",{children:e.jsxs("div",{className:"plt-specs",children:[e.jsxs("span",{children:[e.jsx(g,{size:12})," ",t.stats?.bedrooms||"-"]}),e.jsxs("span",{children:[e.jsx(f,{size:12})," ",t.stats?.bathrooms||"-"]}),e.jsxs("span",{children:[e.jsx(u,{size:12})," ",t.stats?.livingArea||"-","m²"]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"plt-price",children:["฿",t.price?.toLocaleString()||"-",t.listingType==="rent"&&e.jsx("span",{className:"plt-price-unit",children:"/mo"})]})}),e.jsx("td",{children:e.jsxs("div",{className:"plt-views",children:[e.jsx(d,{size:12})," ",t.view_count?.toLocaleString()||0]})}),e.jsx("td",{children:e.jsxs("div",{className:"plt-actions",style:{justifyContent:"flex-end"},children:[e.jsx("a",{href:`/dashboard/edit/${t.id}`,className:"pl-action-btn pl-edit-btn",title:"Edit",children:e.jsx(v,{size:13})}),e.jsx("button",{onClick:()=>m(t.id),className:"pl-action-btn pl-delete-btn",title:"Delete",children:e.jsx(w,{size:13})})]})})]},t.id))})]})}),e.jsx("style",{children:`
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
            `})]})}export{J as default};
