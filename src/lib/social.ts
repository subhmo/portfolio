export interface SocialPlatform {
  name: string;
  username: string;
  handle: string;
  url: string;
  title: string;
}

export const SOCIAL = {
  name: "Subh Mondal",
  firstName: "Subh",
  username: "subhmondal_",
  handle: "@subhmondal_",
  avatar: "https://avatars.githubusercontent.com/u/269526018",
  title: "Founder at Intent Host",
  bio: "Founder at Intent Host, building fast web hosting, cloud servers, and domain infrastructure.",
  shortBio: "Founder at Intent Host.",
  domain: "subhmondal.com",
  website: "https://subhmondal.com",
  company: {
    name: "Intent Host",
    url: "https://intenthost.com",
    role: "Founder",
  },
  x: {
    name: "X",
    username: "subhmondal_",
    handle: "@subhmondal_",
    url: "https://x.com/subhmondal_",
    title: "X Profile (@subhmondal_)",
  },
  github: {
    name: "GitHub",
    username: "subhmo",
    handle: "@subhmo",
    url: "https://github.com/subhmo",
    title: "GitHub (@subhmo)",
  },
  instagram: {
    name: "Instagram",
    username: "subhmo",
    handle: "@subhmo",
    url: "https://instagram.com/subhmo",
    title: "Instagram (@subhmo)",
  },
  linkedin: {
    name: "LinkedIn",
    username: "subhm",
    handle: "@subhm",
    url: "https://linkedin.com/in/subhm",
    title: "LinkedIn (@subhm)",
  },
} as const;

export type SocialKey = "x" | "github" | "instagram" | "linkedin";
