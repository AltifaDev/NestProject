import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_L-KuAFi6.mjs';
import { manifest } from './manifest_BNUqM1r0.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agent/login.astro.mjs');
const _page2 = () => import('./pages/app/dashboard.astro.mjs');
const _page3 = () => import('./pages/dashboard/edit/_id_.astro.mjs');
const _page4 = () => import('./pages/dashboard/leads.astro.mjs');
const _page5 = () => import('./pages/dashboard/new.astro.mjs');
const _page6 = () => import('./pages/dashboard/performance.astro.mjs');
const _page7 = () => import('./pages/dashboard/profile.astro.mjs');
const _page8 = () => import('./pages/dashboard/properties.astro.mjs');
const _page9 = () => import('./pages/dashboard.astro.mjs');
const _page10 = () => import('./pages/login.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agent/login.astro", _page1],
    ["src/pages/app/dashboard.astro", _page2],
    ["src/pages/dashboard/edit/[id].astro", _page3],
    ["src/pages/dashboard/leads.astro", _page4],
    ["src/pages/dashboard/new.astro", _page5],
    ["src/pages/dashboard/performance.astro", _page6],
    ["src/pages/dashboard/profile.astro", _page7],
    ["src/pages/dashboard/properties.astro", _page8],
    ["src/pages/dashboard/index.astro", _page9],
    ["src/pages/login.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dd5b6500-c923-4e99-830d-3f5aea2f6e40",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
