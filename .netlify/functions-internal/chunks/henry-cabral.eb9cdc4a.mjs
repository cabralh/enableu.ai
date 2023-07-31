import { k as createVNode, F as Fragment } from './astro.a2eb2e10.mjs';
import 'path-to-regexp';
import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'slash';
import 'html-escaper';

const html = "";

				const frontmatter = {"draft":false,"name":"Henry Cabral","title":"Founder, Creative Engineer","avatar":{"src":"https://images.unsplash.com/photo-1580489944761-15a19d654956?&fit=crop&w=280","alt":"Henry Cabral"},"publishDate":"2022-11-07 15:39"};
				const file = "/Users/cabralh/Documents/Projects/enableu.ai/src/content/team/henry-cabral.md";
				const url = undefined;
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

const collectedLinks = "@@ASTRO-LINKS@@";
					const collectedStyles = "@@ASTRO-STYLES@@";

export { Content, collectedLinks, collectedStyles, getHeadings };
