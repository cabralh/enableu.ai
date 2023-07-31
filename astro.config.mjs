import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: "https://enableu.ai",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap()],
  output: "server",
  adapter: netlify()
});