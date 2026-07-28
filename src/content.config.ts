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
    galleryPreviewHeading: z.string().optional(),
    facilitiesHeading: z.string().optional(),
    facilities: z.array(z.string()).optional(),
    essentialsHeading: z.string().optional(),
    essentials: z.array(z.object({ label: z.string(), sub: z.string() })).optional(),
    testimonialsHeading: z.string().optional(),
    locationHeading: z.string().optional(),
    w3wHeading: z.string().optional(),
    w3wAddress: z.string().optional(),
    w3wDescription: z.string().optional(),
    displayAddress: z.string().optional(),
    faqHeading: z.string().optional(),
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
    descriptionParagraphs: z.array(z.string()).optional(),
    atAGlance: z.array(z.string()).optional(),
    nearby: z.array(z.string()).optional(),
    amenitiesSectionHeading: z.string().optional(),
    gallerySectionHeading: z.string().optional(),
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
    theAreaHeading: z.string().optional(),
    localAttractionsHeading: z.string().optional(),
    localAttractions: z.array(z.string()).optional(),
    furtherAfieldHeading: z.string().optional(),
    furtherAfield: z.array(z.string()).optional(),
    localWildlifeHeading: z.string().optional(),
    localWildlifeParagraphs: z.array(z.string()).optional(),
    whatsOnHeading: z.string().optional(),
    whatsOnItems: z.array(z.string()).optional(),
    activitiesHeading: z.string().optional(),
    walkingHeading: z.string().optional(),
    walkingParagraphs: z.array(z.string()).optional(),
    activityCards: z.array(z.object({ title: z.string(), description: z.string() })).optional(),
    foodDrinkHeading: z.string().optional(),
    foodDrinkIntro: z.string().optional(),
    takeawayHeading: z.string().optional(),
    takeawayDescription: z.string().optional(),
    eatingOutHeading: z.string().optional(),
    townVenues: z.array(z.object({ name: z.string(), description: z.string() })).optional(),
    coffeeTeaHeading: z.string().optional(),
    coffeeTeaDescription: z.string().optional(),
    justADrinkHeading: z.string().optional(),
    justADrinkDescription: z.string().optional(),
    eatingOutFurtherHeading: z.string().optional(),
    furtherVenues: z.array(z.object({ name: z.string(), distance: z.string(), description: z.string() })).optional(),
    ctaHeading: z.string().optional(),
    ctaDescription: z.string().optional(),
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
    rateCardHeading: z.string().optional(),
    rateCardSub: z.string().optional(),
    rates: z.array(z.object({
      season: z.string(),
      dates: z.string(),
      weekday: z.string(),
      weekend: z.string(),
    })).optional(),
    rateNotes: z.array(z.string()).optional(),
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
    ctaHeading: z.string().optional(),
    ctaDescription: z.string().optional(),
  }),
});

// pageYourHosts — fields actually read by your-hosts.astro
const pageYourHosts = defineCollection({
  loader: glob({ pattern: "your-hosts.yaml", base: "./src/data/pages" }),
  schema: z.object({
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    pageTitle: z.string().optional(),
    bioParagraphs: z.array(z.string()).optional(),
    ctaHeading: z.string().optional(),
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
    contactCardHeading: z.string().optional(),
    findUsHeading: z.string().optional(),
    displayAddress: z.string().optional(),
    w3wAddress: z.string().optional(),
    followHeading: z.string().optional(),
    bookingCardHeading: z.string().optional(),
    bookingCardText: z.string().optional(),
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
