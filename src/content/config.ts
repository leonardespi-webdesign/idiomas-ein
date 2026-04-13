import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    imageUrl: z.string().url(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
