// Static site config — nav structure and URL only.
// All business info (name, phone, email, etc.) is CMS-managed via src/data/settings/site.yaml

export const siteConfig = {
  url: "https://milliethehut.co.uk",
  nav: [
    { label: "Gallery", href: "/gallery/" },
    { label: "Local Area", href: "/location/" },
    { label: "Your Hosts", href: "/your-hosts/" },
    { label: "Contact", href: "/contact/" },
  ],
} as const;
