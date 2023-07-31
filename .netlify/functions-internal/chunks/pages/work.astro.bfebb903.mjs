/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, F as Fragment, m as maybeRenderHead } from '../astro.bea4f499.mjs';
import { g as getCollection } from './_slug_.astro.102d5888.mjs';
import { a as $$Container, $ as $$Layout } from './404.astro.38475dd0.mjs';
import { $ as $$Sectionhead } from './about.astro.f29c817e.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const $$Astro = createAstro("https://enableu.ai");
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`Some of the projects we've worked on.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Our Work` })}` })}

    ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="text-2xl text-gray-800">
          Ferrule Assembly
        </h2>
        <p class="text-lg leading-relaxed text-slate-500">
          Design of a ferrule assembly with ball lens for a microfabrication startup.
        </p>
        <br>
        <img src="/public/projects-ferrule-001.png" alt="Ferrule Assembly.">
        <br>
      </div>
      <hr>
      <div>
        <h2 class="text-2xl text-gray-800">
          Biotechnology Instrument Design
        </h2>
        <p class="text-lg leading-relaxed text-slate-500">
          Detailed instrument with an enclosure and consumable interface. Collection chamber with hermetic seal. Project created for biotechnology research company.
        </p>
        <br>
        <img src="/public/projects-seal-001.png" alt="Ferrule Assembly.">
        <br>
      </div>
      <hr>
      <br>
    </div>
  ` })}
` })}`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/work.astro", void 0);

const $$file = "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
