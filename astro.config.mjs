import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { excerpt } from './src/remark.mjs'
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro'

export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap(), react(), markdoc(), keystatic()],
  markdown: {
    remarkPlugins: [excerpt],
  },
});