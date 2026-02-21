import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.CRC3r6US.js";import{P as f,p as g}from"./payload-client.Bgp2zVY_.js";import{E as b}from"./eye.BgHBTpqe.js";import{H as u}from"./house.CZRoVNwI.js";import{A as n,a as v}from"./arrow-down-right.DT0oj8Rx.js";import{H as j,C as N,a as w}from"./heart.ySs17WGa.js";import{A as y}from"./arrow-up-right.zAr7Ea9V.js";import{M as k}from"./map-pin.CAUsXeja.js";import"./createLucideIcon.BistqCsR.js";function S(){const[c,m]=i.useState(!0),[a,p]=i.useState([]);if(i.useEffect(()=>{(async()=>{try{const s=await g.getMyProperties();p(s.docs||[])}catch(s){console.error("Failed to load dashboard data:",s)}finally{m(!1)}})()},[]),c)return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"6rem 2rem"},children:e.jsx("div",{className:"od-spin-loader"})});const t=a.reduce((r,s)=>r+(s.view_count||0),0),h=a.filter(r=>r.status==="active").length,d=r=>r>=1e3?(r/1e3).toFixed(1)+"K":String(r),x=[{label:"Total Listing Views",value:d(t),change:"+12.5%",isPositive:!0,icon:b,color:"#3b82f6",bg:"rgba(59,130,246,0.1)"},{label:"Total Properties",value:a.length,change:a.length>0?"+1":"-",isPositive:!0,icon:u,color:"#8b5cf6",bg:"rgba(139,92,246,0.1)"},{label:"Active Listings",value:h,change:"-",isPositive:!0,icon:n,color:"#f59e0b",bg:"rgba(245,158,11,0.1)"},{label:"Conversion Intent",value:t>0?"4.8%":"0%",change:"+1.2%",isPositive:!0,icon:j,color:"#10b981",bg:"rgba(16,185,129,0.1)"}],l=[...a].sort((r,s)=>(s.view_count||0)-(r.view_count||0)).slice(0,3).map(r=>({id:r.id,title:r.title,location:r.address||"Location Unspecified",views:d(r.view_count||0),inquiries:Math.floor((r.view_count||0)*.05),trend:"+5%",image:r.thumbnail&&typeof r.thumbnail=="object"&&r.thumbnail.url?r.thumbnail.url.startsWith("http")?r.thumbnail.url:`${f}${r.thumbnail.url}`:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200"}));return e.jsxs("div",{className:"od-root",children:[e.jsxs("div",{className:"od-header",children:[e.jsxs("div",{className:"od-title-block",children:[e.jsx("h2",{className:"od-title",children:"Performance Overview"}),e.jsx("p",{className:"od-subtitle",children:"Track your property engagement, traffic, and lead generation metrics."})]}),e.jsxs("div",{className:"od-date-filter",children:[e.jsx(N,{size:14,className:"od-filter-icon"}),e.jsxs("select",{className:"od-select",children:[e.jsx("option",{children:"Last 30 Days"}),e.jsx("option",{children:"Last 7 Days"}),e.jsx("option",{children:"This Year"})]})]})]}),e.jsx("div",{className:"od-kpi-grid",children:x.map((r,s)=>{const o=r.icon;return e.jsxs("div",{className:"od-kpi-card",children:[e.jsxs("div",{className:"od-kpi-header",children:[e.jsx("div",{className:"od-kpi-icon-wrap",style:{backgroundColor:r.bg,color:r.color},children:e.jsx(o,{size:18})}),e.jsxs("div",{className:`od-kpi-trend ${r.isPositive?"trend-up":"trend-down"}`,children:[r.isPositive?e.jsx(y,{size:14}):e.jsx(v,{size:14}),e.jsx("span",{children:r.change})]})]}),e.jsxs("div",{className:"od-kpi-body",children:[e.jsx("h3",{className:"od-kpi-value",children:r.value}),e.jsx("p",{className:"od-kpi-label",children:r.label})]})]},s)})}),e.jsxs("div",{className:"od-charts-row",children:[e.jsxs("div",{className:"od-chart-card od-main-chart",children:[e.jsxs("div",{className:"od-card-header",children:[e.jsx("h3",{className:"od-card-title",children:"Audience Engagement Trend"}),e.jsx("button",{className:"od-btn-icon",children:e.jsx(n,{size:16})})]}),e.jsxs("div",{className:"od-chart-placeholder",children:[e.jsxs("div",{className:"od-mock-chart",children:[e.jsxs("div",{className:"od-chart-y-axis",children:[e.jsx("span",{children:"150k"}),e.jsx("span",{children:"100k"}),e.jsx("span",{children:"50k"}),e.jsx("span",{children:"0"})]}),e.jsx("div",{className:"od-chart-graph",children:e.jsxs("svg",{preserveAspectRatio:"none",viewBox:"0 0 100 100",className:"od-svg-line",children:[e.jsx("path",{d:"M0,80 C20,70 30,90 50,40 C70,10 80,30 100,5",fill:"none",stroke:"rgba(59,130,246,0.8)",strokeWidth:"3",vectorEffect:"non-scaling-stroke",strokeLinecap:"round"}),e.jsx("path",{d:"M0,80 C20,70 30,90 50,40 C70,10 80,30 100,5 L100,100 L0,100 Z",fill:"url(#blue-grad)"}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"blue-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(59,130,246,0.2)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(59,130,246,0)"})]})})]})})]}),e.jsxs("div",{className:"od-chart-x-axis",children:[e.jsx("span",{children:"Week 1"}),e.jsx("span",{children:"Week 2"}),e.jsx("span",{children:"Week 3"}),e.jsx("span",{children:"Week 4"})]})]})]}),e.jsxs("div",{className:"od-chart-card od-side-card",children:[e.jsx("div",{className:"od-card-header",children:e.jsx("h3",{className:"od-card-title",children:"Traffic Sources"})}),e.jsxs("div",{className:"od-sources-list",children:[e.jsxs("div",{className:"od-source-item",children:[e.jsxs("div",{className:"od-source-info",children:[e.jsx("span",{className:"od-source-name",children:"Organic Search"}),e.jsx("span",{className:"od-source-val",children:"45%"})]}),e.jsx("div",{className:"od-progress-bar",children:e.jsx("div",{className:"od-progress-fill organic"})})]}),e.jsxs("div",{className:"od-source-item",children:[e.jsxs("div",{className:"od-source-info",children:[e.jsx("span",{className:"od-source-name",children:"Direct Traffic"}),e.jsx("span",{className:"od-source-val",children:"30%"})]}),e.jsx("div",{className:"od-progress-bar",children:e.jsx("div",{className:"od-progress-fill direct"})})]}),e.jsxs("div",{className:"od-source-item",children:[e.jsxs("div",{className:"od-source-info",children:[e.jsx("span",{className:"od-source-name",children:"Social Media"}),e.jsx("span",{className:"od-source-val",children:"15%"})]}),e.jsx("div",{className:"od-progress-bar",children:e.jsx("div",{className:"od-progress-fill social"})})]}),e.jsxs("div",{className:"od-source-item",children:[e.jsxs("div",{className:"od-source-info",children:[e.jsx("span",{className:"od-source-name",children:"Referral"}),e.jsx("span",{className:"od-source-val",children:"10%"})]}),e.jsx("div",{className:"od-progress-bar",children:e.jsx("div",{className:"od-progress-fill referral"})})]})]})]})]}),e.jsx("div",{className:"od-bottom-row",children:e.jsxs("div",{className:"od-card od-top-properties",children:[e.jsxs("div",{className:"od-card-header",children:[e.jsx("h3",{className:"od-card-title",children:"Top Performing Properties"}),e.jsxs("a",{href:"/dashboard/properties",className:"od-view-all",children:["View All Properties ",e.jsx(w,{size:14})]})]}),e.jsx("div",{className:"od-props-list",children:l.length>0?l.map((r,s)=>e.jsxs("div",{className:"od-prop-item",children:[e.jsx("img",{src:r.image,alt:r.title,className:"od-prop-img",onError:o=>{o.target.src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200"}}),e.jsxs("div",{className:"od-prop-info",children:[e.jsx("h4",{className:"od-prop-name",children:r.title}),e.jsxs("span",{className:"od-prop-loc",children:[e.jsx(k,{size:11})," ",r.location]})]}),e.jsxs("div",{className:"od-prop-stats",children:[e.jsxs("div",{className:"od-pstat",children:[e.jsx("span",{className:"od-pstat-lbl",children:"Views"}),e.jsx("span",{className:"od-pstat-val",children:r.views})]}),e.jsxs("div",{className:"od-pstat",children:[e.jsx("span",{className:"od-pstat-lbl",children:"Inquiries"}),e.jsx("span",{className:"od-pstat-val",children:r.inquiries})]}),e.jsx("div",{className:`od-pstat-trend ${r.trend.startsWith("+")?"up":"down"}`,children:r.trend})]})]},s)):e.jsxs("div",{style:{padding:"2rem",textAlign:"center",color:"var(--text-muted)"},children:[e.jsx("p",{children:"No properties found yet. Start listing to see performance data."}),e.jsx("a",{href:"/dashboard/new",style:{color:"var(--accent-primary)",textDecoration:"none",fontWeight:500,marginTop:"0.5rem",display:"inline-block"},children:"Add New Listing"})]})})]})}),e.jsx("style",{children:`
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
            `})]})}export{S as default};
