/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent, F as Fragment } from '../astro.bea4f499.mjs';
import { g as getCollection } from './_slug_.astro.102d5888.mjs';
import { a as $$Container, $ as $$Layout } from './404.astro.38475dd0.mjs';

const $$Astro$1 = createAstro("https://enableu.ai");
const $$Sectionhead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sectionhead;
  const { align = "center" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["mt-16", align === "center" && "text-center"], "class:list")}>
  <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    ${renderSlot($$result, $$slots["title"], renderTemplate`Title`)}
  </h1>
  <p class="text-lg mt-4 text-slate-600">
    ${renderSlot($$result, $$slots["desc"], renderTemplate`Some description goes here`)}
  </p>
</div>`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/components/sectionhead.astro", void 0);

const $$Astro = createAstro("https://enableu.ai");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`We are a small passionate team.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`About` })}` })}

    ${maybeRenderHead()}<div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Enabling you, the creator.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Welcome to our digital product development company! We are a dynamic and innovative team driven by our passion for transforming ideas into real-world designs and products that leave a lasting impact on the market.
      </p>
      <p class="text-lg leading-relaxed text-slate-500">
        In our creative sanctuary, we thrive on the exhilarating journey of turning visions into reality. With a diverse blend of talents, ranging from visionary designers and brilliant engineers to perceptive market analysts, we come together as a force to reckon with.
      </p>
      <p class="text-lg leading-relaxed text-slate-500">
        Our daily mantra revolves around embracing the challenges that come our way. We believe that the most groundbreaking ideas are often born from the toughest obstacles. As a team, we relish stepping out of our comfort zones, navigating uncharted waters, and reveling in the thrill of discovery.
      </p>
      <p class="text-lg leading-relaxed text-slate-500">
        At the core of our philosophy lies a deep-rooted commitment to understanding the needs and desires of our clients. We take the time to listen, to empathize, and to envisage the future they envision. Armed with this intimate understanding, we embark on our collective journey of creation.
      </p>
      <p class="text-lg leading-relaxed text-slate-500">
        Our design process is akin to an elaborate dance, where aesthetics and functionality blend seamlessly to bring forth stunning and intuitive products.
      </p>
      <p class="text-lg leading-relaxed text-slate-500">
        In the ever-evolving landscape of digital product development, we stand tall as trailblazers, embracing change with open arms. Together, we march forward, fueled by the excitement of unlocking new possibilities and crafting products that leave indelible imprints on the world.
      </p>
      <p class="text-lg leading-relaxed text-slate-500">
        So, if you have a spark of an idea that you wish to see manifest into reality, rest assured that our anonymous team is here, ready to transform your dreams into digital masterpieces that resonate with hearts and minds alike. Join us on this exhilarating journey of creation, innovation, and impact. Together, let's shape the future.
      </p>
    </div>
  ` })}
` })}`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/about.astro", void 0);

const $$file = "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sectionhead as $, about as a };
