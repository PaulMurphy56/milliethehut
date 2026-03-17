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
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    heroEyebrow: z.string().optional(),
    headline: z.string().optional(),
    subheadline: z.string().optional(),
    facts: z.array(z.string()).optional(),
    aboutHeading: z.string().optional(),
    aboutDescription: z.string().optional(),
    galleryHeading: z.string().optional(),
    ctaHeading: z.string().optional(),
    ctaDescription: z.string().optional(),
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

const attractions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/attractions" }),
  schema: z.object({
    name: z.string(),
    distance: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const pageTheHut = defineCollection({
  loader: glob({ pattern: "the-hut.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    pageEyebrow: z.string(),
    pageTitle: z.string(),
    pageDescription: z.string(),
    descriptionHeading: z.string(),
    descriptionParagraphs: z.array(z.string()),
    atAGlance: z.array(z.string()),
    nearby: z.array(z.string()),
    amenitiesSectionHeading: z.string(),
    gallerySectionHeading: z.string(),
    ctaHeading: z.string(),
    ctaDescription: z.string(),
  }),
});

const pageLocation = defineCollection({
  loader: glob({ pattern: "location.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    pageEyebrow: z.string(),
    pageTitle: z.string(),
    pageDescription: z.string(),
    gettingThereHeading: z.string(),
    gettingThereParagraphs: z.array(z.string()),
    journeyTimes: z.array(z.object({ place: z.string(), time: z.string() })),
    attractionsSectionHeading: z.string(),
    attractionsSectionDescription: z.string(),
    landscapeHeading: z.string(),
    landscapeParagraphs: z.array(z.string()),
    ctaHeading: z.string(),
    ctaDescription: z.string(),
  }),
});

const pageBook = defineCollection({
  loader: glob({ pattern: "book.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    pageEyebrow: z.string(),
    pageTitle: z.string(),
    pageDescription: z.string(),
    formHeading: z.string(),
    formDescription: z.string(),
    infoItems: z.array(z.string()),
  }),
});

const pageGallery = defineCollection({
  loader: glob({ pattern: "gallery.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    pageEyebrow: z.string(),
    pageTitle: z.string(),
    pageDescription: z.string(),
  }),
});

const pageYourHosts = defineCollection({
  loader: glob({ pattern: "your-hosts.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    pageEyebrow: z.string(),
    pageTitle: z.string(),
    pageDescription: z.string(),
    storyHeading: z.string(),
    storyParagraphs: z.array(z.string()),
    valuesHeading: z.string(),
    values: z.array(z.object({ title: z.string(), description: z.string() })),
    ctaHeading: z.string(),
    ctaDescription: z.string(),
  }),
});

const pageContact = defineCollection({
  loader: glob({ pattern: "contact.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    pageEyebrow: z.string(),
    pageTitle: z.string(),
    pageDescription: z.string(),
    formHeading: z.string(),
    formDescription: z.string(),
  }),
});

export const collections = {
  siteSettings,
  homepageSettings,
  gallery,
  testimonials,
  amenities,
  faqs,
  attractions,
  pageTheHut,
  pageLocation,
  pageBook,
  pageGallery,
  pageYourHosts,
  pageContact,
};
