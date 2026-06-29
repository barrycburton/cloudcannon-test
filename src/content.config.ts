import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const newsletter = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/newsletter' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    categories: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
  title: z.string(),
  date: z.coerce.date(),
  image: z.string(),
  categories: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  }),
});

export const collections = { newsletter, work };
