import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://seodit.com",
  author: "Jason Cline for SuperCight Domains",
  profile: "https://seodit.com",
  desc: "SEOdIt.com is a premium domain ideal for AI-driven SEO platforms, automation tools, or agencies. Own the future of SEO today.",
  title: "SEOdIt.com - Premium AI SEO Domain for Sale",
  ogImage: "seo-og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 1,
  postPerPage: 1,
  showArchives: true,
};

export const LOCALE = {
  lang: "en", 
  langTag: ["en-US"],
} as const;

export const LOGO_IMAGE = {
  enable: false, 
  svg: true,
  width: 250,
  height: 60,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/supercight-domains",
    linkTitle: `Follow SuperCight Domains on LinkedIn`,
    active: true,
  },
  {
    name: "X",
    href: "",
    linkTitle: `Follow SuperCight Domains on Twitter`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:seodit.com@supercight.com",
    linkTitle: `Send an email to SEOdIt.com@SuperCight.com`,
    active: true,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Github",
    href: "",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
  {
    name: "Facebook",
    href: "",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
