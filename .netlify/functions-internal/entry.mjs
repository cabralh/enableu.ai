import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'kleur/colors';
import { i as deserializeManifest } from './chunks/astro.bea4f499.mjs';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'string-width';
import 'html-escaper';

const _page0  = () => import('./chunks/endpoint@_@js.6e1cd5fc.mjs');
const _page1  = () => import('./chunks/index@_@astro.ac43f8a1.mjs');
const _page2  = () => import('./chunks/approach@_@astro.d8b6adb1.mjs');
const _page3  = () => import('./chunks/services@_@astro.b2bd155e.mjs');
const _page4  = () => import('./chunks/contact@_@astro.419ddde0.mjs');
const _page5  = () => import('./chunks/pricing@_@astro.522528cf.mjs');
const _page6  = () => import('./chunks/about@_@astro.0a00ea80.mjs');
const _page7  = () => import('./chunks/_slug_@_@astro.38020ca9.mjs');
const _page8  = () => import('./chunks/blog@_@astro.0cfe9136.mjs');
const _page9  = () => import('./chunks/work@_@astro.37b2dcbf.mjs');
const _page10  = () => import('./chunks/404@_@astro.148b6e46.mjs');const pageMap = new Map([["node_modules/@astrojs/image/dist/endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/approach.astro", _page2],["src/pages/services.astro", _page3],["src/pages/contact.astro", _page4],["src/pages/pricing.astro", _page5],["src/pages/about.astro", _page6],["src/pages/blog/[slug].astro", _page7],["src/pages/blog.astro", _page8],["src/pages/work.astro", _page9],["src/pages/404.astro", _page10]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/image/dist/endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/approach","type":"page","pattern":"^\\/approach\\/?$","segments":[[{"content":"approach","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/approach.astro","pathname":"/approach","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/services","type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"},{"type":"external","src":"/_astro/contact.4c266ef0.css"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/pricing","type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/blog/[slug]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/work","type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/404.d4a920fb.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://enableu.ai","base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/approach.astro",{"propagation":"in-tree","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["/Users/cabralh/Documents/Projects/enableu.ai/src/pages/work.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/approach@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/approach.astro":"chunks/pages/approach.astro.e37da047.mjs","/src/pages/index.astro":"chunks/pages/index.astro.ec5a3ce4.mjs","/src/pages/pricing.astro":"chunks/pages/pricing.astro.866522ba.mjs","/src/pages/services.astro":"chunks/pages/services.astro.923960e8.mjs","/src/pages/work.astro":"chunks/pages/work.astro.bfebb903.mjs","\u0000@astro-page:node_modules/@astrojs/image/dist/endpoint@_@js":"chunks/endpoint@_@js.6e1cd5fc.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.ac43f8a1.mjs","\u0000@astro-page:src/pages/approach@_@astro":"chunks/approach@_@astro.d8b6adb1.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services@_@astro.b2bd155e.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact@_@astro.419ddde0.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"chunks/pricing@_@astro.522528cf.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about@_@astro.0a00ea80.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug_@_@astro.38020ca9.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog@_@astro.0cfe9136.mjs","\u0000@astro-page:src/pages/work@_@astro":"chunks/work@_@astro.37b2dcbf.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404@_@astro.148b6e46.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/how-to-design-prototypes-with-purpose.md?astroContentCollectionEntry=true":"chunks/how-to-design-prototypes-with-purpose.fb23f105.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/how-to-maximize-your-products-sustainability-in-production.md?astroContentCollectionEntry=true":"chunks/how-to-maximize-your-products-sustainability-in-production.92a324f8.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/rapid-prototyping-in-industrial-design.md?astroContentCollectionEntry=true":"chunks/rapid-prototyping-in-industrial-design.689f691d.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/why-we-should-never-stop-innovating.md?astroContentCollectionEntry=true":"chunks/why-we-should-never-stop-innovating.57ad3afb.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/team/henry-cabral.md?astroContentCollectionEntry=true":"chunks/henry-cabral.3870f746.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/how-to-design-prototypes-with-purpose.md?astroPropagatedAssets":"chunks/how-to-design-prototypes-with-purpose.62dd54a5.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/how-to-maximize-your-products-sustainability-in-production.md?astroPropagatedAssets":"chunks/how-to-maximize-your-products-sustainability-in-production.37feb305.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/rapid-prototyping-in-industrial-design.md?astroPropagatedAssets":"chunks/rapid-prototyping-in-industrial-design.d41746e9.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/why-we-should-never-stop-innovating.md?astroPropagatedAssets":"chunks/why-we-should-never-stop-innovating.2c56d4e4.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/team/henry-cabral.md?astroPropagatedAssets":"chunks/henry-cabral.e95a2d54.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/how-to-design-prototypes-with-purpose.md":"chunks/how-to-design-prototypes-with-purpose.5be42e49.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/how-to-maximize-your-products-sustainability-in-production.md":"chunks/how-to-maximize-your-products-sustainability-in-production.72924c08.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/rapid-prototyping-in-industrial-design.md":"chunks/rapid-prototyping-in-industrial-design.12ce0d3f.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/blog/why-we-should-never-stop-innovating.md":"chunks/why-we-should-never-stop-innovating.47d8e3a0.mjs","/Users/cabralh/Documents/Projects/enableu.ai/src/content/team/henry-cabral.md":"chunks/henry-cabral.2885192e.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/hero.600c9e4e.png","/_astro/inter-cyrillic-ext-variable-wghtOnly-normal.848492d3.woff2","/_astro/inter-cyrillic-variable-wghtOnly-normal.262a1054.woff2","/_astro/inter-latin-variable-wghtOnly-normal.450f3ba4.woff2","/_astro/inter-greek-variable-wghtOnly-normal.89b4a3fe.woff2","/_astro/inter-greek-ext-variable-wghtOnly-normal.fe977ddb.woff2","/_astro/inter-latin-ext-variable-wghtOnly-normal.45606f83.woff2","/_astro/inter-vietnamese-variable-wghtOnly-normal.ac4e131c.woff2","/_astro/404.d4a920fb.css","/_astro/contact.4c266ef0.css","/approach.png","/approach.svg","/favicon.svg","/icons8-autodesk-48.png","/icons8-ptc-creo-64.png","/icons8-solidworks-50.png","/opengraph.jpg","/projects-dosage-003.png","/projects-dosage-004.png","/projects-ferrule-001.png","/projects-neon-002.png","/projects-seal-001.png","/projects-simulate-001.png","/projects-surgical-001.png","/robots.txt"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
