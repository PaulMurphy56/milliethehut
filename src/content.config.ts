import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const siteSettings = defineCollection({
  loader: glob({ pattern: "site.yaml", base: "./src/data/settings" }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    phone: z.string(),
    email: z.string(),
    bookingUrl: z.string(),
    addressLocality: z.string(),
    addressRegion: z.string(),
    addressPostalCode: z.string(),
    addressCountry: z.string().default("GB"),
    geoLatitude: z.number(),
    geoLongitude: z.number(),
    checkinTime: z.string(),
    checkoutTime: z.string(),
    instagramUrl: z.string().optional(),
    facebookUrl: z.string().optional(),
  }),
});

const homepageSettings = defineCollection({
  loader: glob({ pattern: "homepage-settings.yaml", base: "./src/data" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    heroOverlayText: z.string().optional(),
    introHeading: z.string().optional(),
    introParagraph: z.string().optional(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/gallery" }),
  schema: z.object({
    title: z.string().optional(),
    alt: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/testimonials" }),
  schema: z.object({
    name: z.string(),
    date: z.string(),
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

// pageTheHut — fields actually read by the-hut.astro
const pageTheHut = defineCollection({
  loader: glob({ pattern: "the-hut.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pageEyebrow: z.string().optional(),
    pageTitle: z.string().optional(),
    pageDescription: z.string().optional(),
    descriptionHeading: z.string().optional(),
    atAGlance: z.array(z.string()).optional(),
    nearby: z.array(z.string()).optional(),
    ctaHeading: z.string().optional(),
    ctaDescription: z.string().optional(),
  }),
});

// pageLocation — fields actually read by location.astro
const pageLocation = defineCollection({
  loader: glob({ pattern: "location.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pageTitle: z.string().optional(),
    pageDescription: z.string().optional(),
  }),
});

// pageBook — fields actually read by book.astro
const pageBook = defineCollection({
  loader: glob({ pattern: "book.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pageTitle: z.string().optional(),
    pageDescription: z.string().optional(),
  }),
});

// pageGallery — fields actually read by gallery.astro
const pageGallery = defineCollection({
  loader: glob({ pattern: "gallery.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pageTitle: z.string().optional(),
    pageDescription: z.string().optional(),
  }),
});

// pageYourHosts — fields actually read by your-hosts.astro
const pageYourHosts = defineCollection({
  loader: glob({ pattern: "your-hosts.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pageTitle: z.string().optional(),
  }),
});

// pageContact — fields actually read by contact.astro
const pageContact = defineCollection({
  loader: glob({ pattern: "contact.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pageTitle: z.string().optional(),
    pageDescription: z.string().optional(),
  }),
});

export const collections = {
  siteSettings,
  homepageSettings,
  gallery,
  testimonials,
  amenities,
  faqs,
  pageTheHut,
  pageLocation,
  pageBook,
  pageGallery,
  pageYourHosts,
  pageContact,
};
