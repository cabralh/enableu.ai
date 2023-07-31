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
const $$Approach = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Approach;
  await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`You are the center of our process, keeping things customer focused, every step of the way.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Approach` })}` })}

    ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Customer-driven approach.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        At our digital product development company, we firmly believe that designing products with the customer in mind is the key to success. Customers are at the heart of every business, and their needs, preferences, and pain points serve as guiding stars throughout our creative process. 
      </p>
      <p class="text-lg leading-relaxed text-slate-500">
        By understanding and empathizing with our customers, we gain invaluable insights that shape our designs and enable us to craft products that seamlessly integrate into their lives. Putting the customer first ensures that our creations are not only aesthetically pleasing but also functionally intuitive and purpose-driven. We take pride in delivering solutions that resonate with our target audience, forging strong connections that lead to lasting brand loyalty and a positive impact on the market.
      </p>
      <br>
      <img src="/public/approach.svg" alt="Customer Centric Approach Diagram.">
    </div>
  ` })}
` })}`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/approach.astro", void 0);

const $$file = "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/approach.astro";
const $$url = "/approach";

export { $$Approach as default, $$file as file, $$url as url };
