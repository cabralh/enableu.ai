/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro.bea4f499.mjs';
import { b as $$Link, a as $$Container, $ as $$Layout } from './404.astro.38475dd0.mjs';
import { $ as $$Icon } from './contact.astro.4f0ef136.mjs';
import { $ as $$Picture } from './blog.astro.1d2a8344.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import 'svgo';
import './about.astro.f29c817e.mjs';
import './_slug_.astro.102d5888.mjs';
/* empty css                             */import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';

const $$Astro$4 = createAstro("https://enableu.ai");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
  <h2 class="text-white text-4xl md:text-6xl tracking-tight">
    Enable Your Ideas.
  </h2>
  <p class="text-slate-400 mt-4 text-lg md:text-xl">
    Create innovative solutions to disrupt your desired market.
  </p>
  <div class="flex mt-5">
    ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Get Started` })}
  </div>
</div>`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/components/cta.astro", void 0);

const $$Astro$3 = createAstro("https://enableu.ai");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Mechanical Design & Development",
      description: "Build your prototype or minimal viable product. I can provide a CAD file package (parts, assemblies, and drawings).",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "Customer-Driven Design",
      description: "Enable follows a customer-driven design approach. If you need assistance creating a design or mapping out which design is best suitable for your minimal viable product, we can provide an in-depth analysis based on your needs and transform that into a few mockups.",
      icon: "bx:bxs-window-alt"
    },
    {
      title: "Design for Additive Manufacturing (DfAM)",
      description: "We're able to create designs optimized for additive manufacturing. Technologies worked with include: FDM/FFF, SLA, MSLA/DLP, DMLS.",
      icon: "bx:bxs-data"
    },
    {
      title: "Rapid Prototyping",
      description: "Enable can produce mock-ups or prototypes of your design quickly and effectively, ensuring your rapid iteration of your product.",
      icon: "bx:bxs-bot"
    },
    {
      title: "Technical Writing/Documentation",
      description: "We can provide assistance with generating technical articles, essays, marketing material that covers the essence of your product.",
      icon: "bx:bxs-file-find"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0">
  <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
    Driving your product design home while maintaining your input first above all.
  </h2>
  <p class="text-lg mt-4 text-slate-600">
    Enable works alongside you every step of the way to develop a design that respresents your vision. It takes the best parts of state-of-the-art
    tools and adds your own requirements.
  </p>
</div>

<div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
  ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start">
        <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
          ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })}
        </div>
        <div>
          <h3 class="font-semibold text-lg">${item.title}</h3>${" "}
          <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p>
        </div>
      </div>`)}
</div>`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/components/features.astro", void 0);

const heroImage = {"src":"/_astro/hero.600c9e4e.png","width":520,"height":424,"format":"png"};

const $$Astro$2 = createAstro("https://enableu.ai");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
  <div class="py-6 md:order-1 hidden md:block">
    ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "aspectRatio": "4:3", "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })}
  </div>
  <div>
    <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
      Enabling your designs into innovative solutions.
    </h1>
    <p class="text-lg mt-4 text-slate-600 max-w-xl">
      Enable is a digital product development agency that brings concepts to product launch. <wbr> By utilizing your specific goals, we're able to create a product that you're proud of.
    </p>
    <div class="mt-6 flex flex-col sm:flex-row gap-3">
      ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate`

        Let's Connect!
      ` })}
    </div>
  </div>
</main>`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/components/hero.astro", void 0);

const $$Astro$1 = createAstro("https://enableu.ai");
const $$Logos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Logos;
  return renderTemplate`${maybeRenderHead()}<div class="mt-24">
  <h2 class="text-center text-slate-500">Works with your technologies</h2>
  <div class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap">
    <img src="/public/icons8-autodesk-48.png" alt="Autodesk.">
    <img src="/public/icons8-ptc-creo-64.png" alt="PTC Creo.">
    <img src="/public/icons8-solidworks-50.png" alt="Solidworks.">
  </div>
</div>`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/components/logos.astro", void 0);

const $$Astro = createAstro("https://enableu.ai");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${renderComponent($$result3, "Hero", $$Hero, {})}
    ${renderComponent($$result3, "Features", $$Features, {})}
    ${renderComponent($$result3, "Logos", $$Logos, {})}
    ${renderComponent($$result3, "Cta", $$Cta, {})}
  ` })}
` })}`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/index.astro", void 0);

const $$file = "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
