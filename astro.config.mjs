// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://canercakal.dev',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({ imageService: 'compile' }),
});