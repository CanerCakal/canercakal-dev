import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    repo: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    domain: z.enum(['ios', 'web', 'ml', 'game']),
    preview: image().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };