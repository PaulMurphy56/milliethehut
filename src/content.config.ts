import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const homepageSettings = defineCollection({
  loader: glob({ pattern: "homepage-settings.yaml", base: "./src/data" }),
  schema: z.object({
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    headline: z.string().optional(),
    subheadline: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/gallery" }),
  schema: z.object({
    title: z.string(),
    alt: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/testimonials" }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    rating: z.number().min(1).max(5),
  }),
});

const amenities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/amenities" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/faqs" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number(),
  }),
});

export const collections = { homepageSettings, gallery, testimonials, amenities, faqs };
