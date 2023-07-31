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
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`What we offer to help your idea flourish.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Services` })}` })}

    ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="text-2xl text-gray-800">
          Mechanical Design & Development
        </h2>
        <p class="text-lg leading-relaxed text-slate-500">
          Create your prototype or minimum viable product using the CAD file package, which includes parts, assemblies, and drawings that I can provide.
        </p>
      </div>
      <hr>
      <div>
        <h2 class="text-2xl text-gray-800">
          Customer-Driven Design
        </h2>
        <p class="text-lg leading-relaxed text-slate-500">
          At Enable, we adopt a customer-driven design approach. Should you require help in designing or determining the most suitable design for your minimum viable product, we offer comprehensive analysis based on your specific needs. This analysis will be transformed into several mockups to ensure a tailored and efficient solution.
        </p>
      </div>
      <hr>
      <div>
        <h2 class="text-2xl text-gray-800">
          Design for Additive Manufacturing (DfAM)
        </h2>
        <p class="text-lg leading-relaxed text-slate-500">
          Our expertise lies in crafting designs optimized specifically for additive manufacturing. We have extensive experience working with a range of cutting-edge technologies, including FDM/FFF, SLA, MSLA/DLP, and DMLS.
        </p>
      </div>
      <hr>
      <div>
        <h2 class="text-2xl text-gray-800">
          Rapid Prototyping
        </h2>
        <p class="text-lg leading-relaxed text-slate-500">
          Enable excels in swiftly and efficiently producing mock-ups or prototypes of your design, enabling rapid iterations of your product.
        </p>
      </div>
      <div>
        <h2 class="text-2xl text-gray-800">
          Technical Writing/Documentation
        </h2>
        <p class="text-lg leading-relaxed text-slate-500">
          We are equipped to offer support in generating technical articles, essays, and marketing material that effectively captures the essence of your product.
        </p>
      </div>
      <hr>
      <br>
    </div>
  ` })}
` })}`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/services.astro", void 0);

const $$file = "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
