export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  role?: string;
  description: string;
  image: string;
  url: string;
  actionLabel: string;
  githubUrl?: string;
  specs: string[];
  techStack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "intent-host",
    name: "Intent Host",
    tagline: "Fast Web Hosting, Cloud Infrastructure and Domains",
    category: "Web Infrastructure",
    role: "Founder & CEO",
    description:
      "A web hosting and infrastructure platform built to make running websites simple and dependable. Provides NVMe shared hosting, managed WordPress, cloud instances, bare metal servers, and domain registration with cPanel and 24/7 technical support.",
    image: "/IntentHost.png",
    url: "https://intenthost.com",
    actionLabel: "Visit intenthost.com",
    specs: ["LiteSpeed and NVMe", "cPanel Access", "Managed WordPress", "Anycast DNS"],
    techStack: ["Web Hosting", "Cloud Infrastructure", "NVMe Storage", "LiteSpeed", "cPanel/WHM", "Linux"],
  },
  {
    id: "nodezed",
    name: "Nodezed",
    tagline: "Developer Cloud Infrastructure and NVMe Servers",
    category: "Cloud Platform",
    role: "Founder & CEO",
    description:
      "A developer-first cloud platform created to spin up high-speed NVMe servers, Anycast networking, and container environments in seconds without complicated configuration.",
    image: "/Nodezed.png",
    url: "https://nodezed.com",
    actionLabel: "Visit nodezed.com",
    specs: ["Fast Provisioning", "12 Global Locations", "Anycast Edge CDN", "Root SSH Access"],
    techStack: ["Cloud Infrastructure", "NVMe Compute", "Anycast CDN", "REST API", "DevOps"],
  },
  {
    id: "sync-disk",
    name: "Sync Disk",
    tagline: "Real-Time macOS External Disk Mirror and Backup",
    category: "macOS System Tool",
    description:
      "A lightweight macOS menu bar tool that mirrors local folders to external drives in real time. Uses native FSEvents to track file changes instantly, with deduplication and safe iCloud Drive handling to keep files protected.",
    image: "/Sync-Disk.png",
    url: "https://github.com/subhmo/Sync-Disk",
    actionLabel: "View on GitHub",
    githubUrl: "https://github.com/subhmo/Sync-Disk",
    specs: ["Real-Time FSEvents", "SHA-256 Deduplication", "iCloud Eviction", "Point-in-Time Restore"],
    techStack: ["Swift", "macOS Sonoma/Sequoia", "FSEvents", "AppKit", "System Architecture"],
  },
];
