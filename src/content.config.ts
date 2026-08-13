import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    repo: z.string(),            // "kullaniciadi/repo-adi" formatında
    summary: z.string(),         // API description yerine senin cümlen
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

export const collections = { projects };