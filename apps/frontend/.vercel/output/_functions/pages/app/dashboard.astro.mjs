import { c as createComponent, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, d as renderSlot, a as renderTemplate, e as createAstro, r as renderComponent, f as renderHead } from '../../chunks/astro/server_DT-sokh3.mjs';
import 'piccolore';
/* empty css                                        */
/* empty css                                        */
import 'clsx';
import { $ as $$ThemeToggle } from '../../chunks/ThemeToggle_CMROuJCk.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$b = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$a = createAstro();
const $$Bell = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Bell;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "bell", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M10.268 21a2 2 0 0 0 3.464 0"></path> <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/Bell.astro", void 0);

const $$Astro$9 = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "briefcase", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path> <rect width="20" height="14" x="2" y="6" rx="2"></rect> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/Briefcase.astro", void 0);

const $$Astro$8 = createAstro();
const $$FileText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$FileText;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "file-text", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path> <path d="M14 2v5a1 1 0 0 0 1 1h5"></path> <path d="M10 9H8"></path> <path d="M16 13H8"></path> <path d="M16 17H8"></path> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/FileText.astro", void 0);

const $$Astro$7 = createAstro();
const $$LayoutDashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LayoutDashboard;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "layout-dashboard", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="7" height="9" x="3" y="3" rx="1"></rect> <rect width="7" height="5" x="14" y="3" rx="1"></rect> <rect width="7" height="9" x="14" y="12" rx="1"></rect> <rect width="7" height="5" x="3" y="16" rx="1"></rect> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/LayoutDashboard.astro", void 0);

const $$Astro$6 = createAstro();
const $$LogOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LogOut;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "log-out", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m16 17 5-5-5-5"></path> <path d="M21 12H9"></path> <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/LogOut.astro", void 0);

const $$Astro$5 = createAstro();
const $$PieChart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$PieChart;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chart-pie", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path> <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/PieChart.astro", void 0);

const $$Astro$4 = createAstro();
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "search", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m21 21-4.34-4.34"></path> <circle cx="11" cy="11" r="8"></circle> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/Search.astro", void 0);

const $$Astro$3 = createAstro();
const $$Settings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Settings;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "settings", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path> <circle cx="12" cy="12" r="3"></circle> ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/node_modules/lucide-astro/dist/Settings.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { name: "Dashboard", href: "/app/dashboard", icon: $$LayoutDashboard },
    { name: "Portfolio", href: "/app/portfolio", icon: $$PieChart },
    { name: "Funds", href: "/app/funds", icon: $$Briefcase },
    { name: "Documents", href: "/app/documents", icon: $$FileText },
    { name: "Settings", href: "/app/settings", icon: $$Settings }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="sidebar" data-astro-cid-sgbk6aiu> <div class="logo-container" data-astro-cid-sgbk6aiu> <div class="logo-icon" data-astro-cid-sgbk6aiu>N</div> <span class="logo-text" data-astro-cid-sgbk6aiu>Nest of Assets</span> </div> <nav class="nav-menu" data-astro-cid-sgbk6aiu> ${navItems.map((item) => {
    const isActive = currentPath.startsWith(item.href);
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(["nav-item", { active: isActive }], "class:list")} data-astro-cid-sgbk6aiu> ${renderComponent($$result, "item.icon", item.icon, { "class": "nav-icon", "data-astro-cid-sgbk6aiu": true })} <span data-astro-cid-sgbk6aiu>${item.name}</span> ${isActive && renderTemplate`<div class="active-indicator" data-astro-cid-sgbk6aiu></div>`} </a>`;
  })} </nav> <div class="user-profile" data-astro-cid-sgbk6aiu> <div class="avatar" data-astro-cid-sgbk6aiu>JM</div> <div class="user-info" data-astro-cid-sgbk6aiu> <p class="name" data-astro-cid-sgbk6aiu>John Mayer</p> <p class="role" data-astro-cid-sgbk6aiu>Accredited Investor</p> </div> <button class="logout-btn" aria-label="Logout" data-astro-cid-sgbk6aiu> ${renderComponent($$result, "LogOut", $$LogOut, { "size": 18, "data-astro-cid-sgbk6aiu": true })} </button> </div> </aside> `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/app/Sidebar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { title = "Dashboard", breadcrumbs = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="app-header" data-astro-cid-pd2bq565> <div class="header-left" data-astro-cid-pd2bq565> <div class="breadcrumbs" data-astro-cid-pd2bq565> <span class="breadcrumb-item" data-astro-cid-pd2bq565>App</span> ${breadcrumbs.map((crumb) => renderTemplate`<span${addAttribute([
    "breadcrumb-item",
    { active: !crumb.href }
  ], "class:list")} data-astro-cid-pd2bq565> ${crumb.href ? renderTemplate`<a${addAttribute(crumb.href, "href")} data-astro-cid-pd2bq565>${crumb.label}</a>` : crumb.label} </span>`)} ${breadcrumbs.length === 0 && renderTemplate`<span class="breadcrumb-item active" data-astro-cid-pd2bq565>${title}</span>`} </div> <h1 class="page-title" data-astro-cid-pd2bq565>${title}</h1> </div> <div class="header-right" data-astro-cid-pd2bq565> <div class="search-bar" data-astro-cid-pd2bq565> ${renderComponent($$result, "Search", $$Search, { "class": "search-icon", "size": 18, "data-astro-cid-pd2bq565": true })} <input type="text" placeholder="Search assets, funds..." data-astro-cid-pd2bq565> <div class="cmd-k" data-astro-cid-pd2bq565>⌘K</div> </div> <div class="actions" data-astro-cid-pd2bq565> <button class="icon-btn notification-btn" data-astro-cid-pd2bq565> ${renderComponent($$result, "Bell", $$Bell, { "size": 20, "data-astro-cid-pd2bq565": true })} <span class="badge" data-astro-cid-pd2bq565></span> </button> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-pd2bq565": true })} </div> </div> </header> `;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/app/Header.astro", void 0);

const $$Astro = createAstro();
const $$AppLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AppLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-j3tygqaf> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Nest of Assets</title>${renderHead()}</head> <body data-astro-cid-j3tygqaf> <div class="app-layout" data-astro-cid-j3tygqaf> ${renderComponent($$result, "Sidebar", $$Sidebar, { "data-astro-cid-j3tygqaf": true })} <div class="main-wrapper" data-astro-cid-j3tygqaf> ${renderComponent($$result, "Header", $$Header, { "title": title, "data-astro-cid-j3tygqaf": true })} <main class="content-area" data-astro-cid-j3tygqaf> ${renderSlot($$result, $$slots["default"])} </main> </div> </div>  </body> </html>`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/layouts/AppLayout.astro", void 0);

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashboardView", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/altifa/Documents/nest-webapp/apps/frontend/src/components/app/DashboardView", "client:component-export": "default" })} ` })}`;
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/app/dashboard.astro", void 0);

const $$file = "/Users/altifa/Documents/nest-webapp/apps/frontend/src/pages/app/dashboard.astro";
const $$url = "/app/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
