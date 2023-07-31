/* empty css                         */import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.bea4f499.mjs';
import { $ as $$Layout, a as $$Container } from './404.astro.38475dd0.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/how-to-design-prototypes-with-purpose.md": () => import('../how-to-design-prototypes-with-purpose.fb23f105.mjs'),"/src/content/blog/how-to-maximize-your-products-sustainability-in-production.md": () => import('../how-to-maximize-your-products-sustainability-in-production.92a324f8.mjs'),"/src/content/blog/rapid-prototyping-in-industrial-design.md": () => import('../rapid-prototyping-in-industrial-design.689f691d.mjs'),"/src/content/blog/why-we-should-never-stop-innovating.md": () => import('../why-we-should-never-stop-innovating.57ad3afb.mjs'),"/src/content/team/henry-cabral.md": () => import('../henry-cabral.3870f746.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"how-to-design-prototypes-with-purpose":"/src/content/blog/how-to-design-prototypes-with-purpose.md","how-to-maximize-your-products-sustainability-in-production":"/src/content/blog/how-to-maximize-your-products-sustainability-in-production.md","rapid-prototyping-in-industrial-design":"/src/content/blog/rapid-prototyping-in-industrial-design.md","why-we-should-never-stop-innovating":"/src/content/blog/why-we-should-never-stop-innovating.md"}},"team":{"type":"content","entries":{"henry-cabral":"/src/content/team/henry-cabral.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/how-to-design-prototypes-with-purpose.md": () => import('../how-to-design-prototypes-with-purpose.62dd54a5.mjs'),"/src/content/blog/how-to-maximize-your-products-sustainability-in-production.md": () => import('../how-to-maximize-your-products-sustainability-in-production.37feb305.mjs'),"/src/content/blog/rapid-prototyping-in-industrial-design.md": () => import('../rapid-prototyping-in-industrial-design.d41746e9.mjs'),"/src/content/blog/why-we-should-never-stop-innovating.md": () => import('../why-we-should-never-stop-innovating.2c56d4e4.mjs'),"/src/content/team/henry-cabral.md": () => import('../henry-cabral.e95a2d54.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro("https://enableu.ai");
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate`
    ${maybeRenderHead()}<div class="mx-auto max-w-3xl mt-14">
      <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">
        ${entry.data.category}
      </span>
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
        ${entry.data.title}
      </h1>
      <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
        <span class="text-gray-400">
          ${entry.data.author}
        </span>
        <span class="text-gray-400">•</span>
        <time class="text-gray-400"${addAttribute(entry.data.publishDate.toISOString(), "datetime")}>
          ${entry.data.publishDate.toDateString()}
        </time>
        <span class="text-gray-400 hidden md:block">•</span>
        <div class="w-full md:w-auto flex flex-wrap gap-3">
          ${entry.data.tags.map((tag) => renderTemplate`<span class="text-sm text-gray-500">#${tag}</span>`)}
        </div>
      </div>
    </div>

    <div class="mx-auto prose prose-lg mt-6 max-w-3xl">
      ${renderComponent($$result3, "Content", Content, {})}
    </div>
    <div class="text-center mt-8">
      <a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a>
    </div>
  ` })}
` })}`;
}, "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/cabralh/Documents/Projects/enableu.ai/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _slug_ as _, getCollection as g };
