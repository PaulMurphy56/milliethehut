// Static site config — nav structure and URL only.
// All business info (name, phone, email, etc.) is CMS-managed via src/data/settings/site.yaml

export const siteConfig = {
  url: "https://milliethehut.co.uk",
  nav: [
    { label: "The Hut", href: "/the-hut/" },
    { label: "Location", href: "/location/" },
    { label: "Book", href: "/book/" },
  ],
} as const;
