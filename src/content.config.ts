import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const videoSchema = z.object({
  id: z.string(),
  title: z.string(),
  creator: z.string().optional(),
  position: z.enum(['hero', 'inline', 'related']).default('hero'),
});

const sourceSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const repairGuides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/repair-guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    timeEstimate: z.string(),
    tags: z.array(z.string()),
    appliesTo: z.array(z.string()),
    videos: z.array(videoSchema).default([]),
    tools: z.array(z.string()).optional(),
    sources: z.array(sourceSchema).default([]),
    canonical: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

const diagnostics = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/diagnostics' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    timeEstimate: z.string().optional(),
    tags: z.array(z.string()),
    appliesTo: z.array(z.string()),
    videos: z.array(videoSchema).default([]),
    sources: z.array(sourceSchema).default([]),
    canonical: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

const models = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/models' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    tags: z.array(z.string()),
    videos: z.array(videoSchema).default([]),
    sources: z.array(sourceSchema).default([]),
    canonical: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

const parts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/parts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    tags: z.array(z.string()),
    sources: z.array(sourceSchema).default([]),
    canonical: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    tags: z.array(z.string()),
    videos: z.array(videoSchema).default([]),
    sources: z.array(sourceSchema).default([]),
    canonical: z.string().url(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { 'repair-guides': repairGuides, diagnostics, models, parts, videos };
