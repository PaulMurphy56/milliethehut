export const siteConfig = {
  name: "Millie The Hut",
  tagline: "A Shepherd's Hut Retreat on the England/Wales Border",
  description:
    "Millie The Hut is a beautifully restored shepherd's hut nestled on the England/Wales border near Presteigne, Powys. The perfect escape for couples seeking peace, countryside views, and cosy comfort.",
  url: "https://milliethehut.co.uk",
  phone: "07700 000000",
  email: "hello@milliethehut.co.uk",
  bookingUrl: "https://milliethehut.co.uk/book/",
  address: {
    street: "",
    locality: "Presteigne",
    region: "Powys",
    postalCode: "LD8",
    country: "GB",
  },
  geo: {
    latitude: 52.2762,
    longitude: -3.0028,
  },
  hours: "Check-in 15:00, Check-out 10:00",
  socials: {
    instagram: "https://instagram.com/milliethehut",
    facebook: "https://facebook.com/milliethehut",
  },
  nav: [
    { label: "The Hut", href: "/the-hut/" },
    { label: "Location", href: "/location/" },
    { label: "Book", href: "/book/" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
