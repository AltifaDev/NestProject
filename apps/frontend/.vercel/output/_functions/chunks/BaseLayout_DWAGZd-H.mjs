import { c as createComponent, a as renderTemplate, g as renderScript, d as renderSlot, f as renderHead, b as addAttribute, e as createAstro } from './astro/server_DT-sokh3.mjs';
import 'piccolore';
import 'clsx';
/* empty css                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "NEST OF ASSETS - Earn revenue by selling anything",
    description = "A premium Astro + GSAP clone of NEST OF ASSETS."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><meta name="description"', `><!-- Google Fonts: IBM Plex Sans Thai --><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Mapbox & Leaflet CSS --><link href="https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.css" rel="stylesheet"><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""><script>
			// Theme Initialization
			const theme = (() => {
				if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
					return localStorage.getItem('theme');
				}
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					return 'dark';
				}
				return 'light';
			})();
		
			if (theme === 'light') {
				document.documentElement.setAttribute('data-theme', 'light');
			} else {
				document.documentElement.setAttribute('data-theme', 'dark');
			}
			window.localStorage.setItem('theme', theme);
		<\/script>`, "</head> <body> ", " ", " </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/altifa/Documents/nest-webapp/apps/frontend/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
