import { defineCollection, z } from 'astro:content';

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional(),
  }),
});

export const collections = {
  categories,
  resources,
};