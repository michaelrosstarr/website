import { Github, Linkedin, Music, Twitter, type LucideIcon } from "lucide-react"

export const site = {
  name: "Michael Ross Tarr",
  alias: "Sloth",
  url: "https://michaelrosstarr.com",
  description:
    "Hey 👋, I'm Michael, but I am also known as Sloth in some places. I build web apps, desktop apps and tools for the Waze community.",
}

export type Accent = "yellow" | "pink" | "blue" | "green" | "orange" | "purple"

export const accentBg: Record<Accent, string> = {
  yellow: "bg-primary",
  pink: "bg-pink",
  blue: "bg-blue",
  green: "bg-green",
  orange: "bg-orange",
  purple: "bg-purple",
}

export type SubProject = {
  name: string
  description: string
  url?: string
  repo?: string
  greasyfork?: string
}

export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  url?: string
  repo?: string
  /** Where to download builds, for desktop apps */
  releases?: string
  status: string
  platforms?: string[]
  stack: string[]
  highlights: string[]
  accent: Accent
  /** Banner across the top of the card */
  image?: { src: string; alt: string }
  apps?: SubProject[]
  userscripts?: SubProject[]
}

export const projects: Project[] = [
  {
    slug: "wmekit",
    name: "WME Kit",
    tagline: "Tools for Waze Map Editors",
    description:
      "A family of apps and userscripts that make life easier for the volunteer editors who keep Waze's map up to date, all behind one shared WMEKit account.",
    url: "https://wmekit.com",
    status: "Live",
    platforms: ["Web", "Userscripts"],
    stack: ["TanStack Start", "Cloudflare Workers", "D1", "Mantine", "React Query", "Better Auth", "PostHog"],
    highlights: [
      "Every app is a single Cloudflare Worker on D1",
      "One sign-in across apps over Cloudflare service bindings",
      "Userscripts share one WME Kit-styled UI library",
    ],
    accent: "yellow",
    image: {
      src: "/wmekit-banner.jpg",
      alt: "Illustrated \"South African Road Trip\" banner: cartoon cars on rolling hills past acacia trees, proteas, penguins and Table Mountain",
    },
    apps: [
      {
        name: "WME Requests",
        description: "Send downlock and imagery requests straight from WME to Slack, Discord and Telegram.",
        url: "https://requests.wmekit.com",
        repo: "https://github.com/wmekit/wme-requests",
      },
      {
        name: "WME Sync",
        description: "Syncs userscript settings and data across browsers with a username and PIN.",
        url: "https://sync.wmekit.com",
      },
      {
        name: "WMEKit Account",
        description: "One sign-in for every WMEKit app: Better Auth with passkeys, Discord and 2FA.",
        url: "https://auth.wmekit.com",
      },
      {
        name: "wmekit-wme-ui",
        description: "Shared UI builders for userscript panes: ink-bordered cards, pills and toggles that follow WME's dark mode.",
        repo: "https://github.com/wmekit/wmekit-wme-ui",
      },
    ],
    userscripts: [
      {
        name: "WME EZ Comments",
        description: "Quick comment templates with auto-filled placeholders.",
        url: "https://wmekit.com/wme-ez-comment",
        repo: "https://github.com/wmekit/WME-EZComments",
      },
      {
        name: "WME EZ Segments",
        description: "Update road segments in one click.",
        greasyfork: "https://greasyfork.org/en/scripts/518381-wme-ezsegments",
        repo: "https://github.com/wmekit/WME-EZSegments",
      },
      {
        name: "wmeZA",
        description: "Segment checks, GIS house numbers and more for the South African community.",
        greasyfork: "https://greasyfork.org/en/scripts/593244-wmeza",
        repo: "https://github.com/wmekit/wmeZA",
      },
      {
        name: "WME Always Visible (BushmanZA Edition)",
        description: "Keeps your editor status visible in WME.",
        greasyfork: "https://greasyfork.org/en/scripts/523636-wme-always-visible-bushmanza-edition",
        repo: "https://github.com/michaelrosstarr/WME_AlwaysOnline",
      },
    ],
  },
  {
    slug: "beaches-africa",
    name: "beaches.africa",
    tagline: "A live map of Africa's beaches",
    description:
      "Whether a beach is open, who is on duty, what the sea and the weather are doing, and what other visitors think. Most beaches so far are in South Africa.",
    url: "https://beaches.africa",
    status: "Live",
    platforms: ["Web", "Android", "iOS"],
    stack: ["Next.js 16", "Cloudflare Workers", "OpenNext", "Supabase", "Mapbox GL", "Open-Meteo", "FCM", "Capacitor", "PostHog"],
    highlights: [
      "Open / closed status, lifeguard hours and shark flags",
      "Weather, UV, wind and swell with a \"best time to go\" rating",
      "Reviews, live votes and push alerts for favourite beaches",
    ],
    accent: "blue",
  },
  {
    slug: "duo22",
    name: "Duo22",
    tagline: "SSH and remote desktop, with an encrypted vault",
    description:
      "A desktop SSH, RDP, VNC and SFTP client with an end-to-end encrypted vault that syncs across your devices and can be shared with a team.",
    status: "In development",
    platforms: ["macOS", "Windows", "Linux"],
    stack: ["Tauri v2", "Rust", "Next.js", "Mantine", "xterm.js", "Hono", "Cloudflare Workers", "D1"],
    highlights: [
      "SSH, RDP, VNC, Telnet and serial in tabs, plus a dual-pane SFTP browser",
      "Port forwarding (-L, -R, SOCKS5) and Docker over SSH",
      "Zero-knowledge vault with team sharing, 2FA and FIDO2 keys",
    ],
    accent: "pink",
  },
  {
    slug: "k8sview",
    name: "k8sview",
    tagline: "A small desktop Kubernetes viewer",
    description:
      "Pods, logs, shells and port forwards for every kubeconfig context, with usage graphs, a version matrix and a Flux dashboard.",
    repo: "https://github.com/michaelrosstarr/k8sview",
    releases: "https://github.com/michaelrosstarr/k8sview/releases/latest",
    status: "Open source",
    platforms: ["macOS", "Windows", "Linux"],
    stack: ["Tauri v2", "Rust", "kube-rs", "Next.js", "Mantine", "xterm.js", "Monaco"],
    highlights: [
      "Live pod logs, exec and attach in a dock or their own windows",
      "Namespace × app matrix of the image tags actually running",
      "Flux health, Helm history and reconcile / suspend / resume",
    ],
    accent: "green",
  },
]

export type StackItem = {
  name: string
  href: string
  icon: string
}

export type StackGroup = {
  id: string
  label: string
  items: StackItem[]
}

const skill = (id: string) => `https://skillicons.dev/icons?i=${id}`
// For tools skillicons doesn't have; rendered on a skillicons-style dark tile
const simple = (slug: string, color: string) => `https://cdn.simpleicons.org/${slug}/${color}`

export const stack: StackGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { name: "TypeScript", href: "https://typescriptlang.org/", icon: skill("ts") },
      { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: skill("js") },
      { name: "Rust", href: "https://rust-lang.org/", icon: skill("rust") },
      { name: "Lua", href: "https://lua.org/", icon: skill("lua") },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", href: "https://react.dev", icon: skill("react") },
      { name: "Next.js", href: "https://nextjs.org", icon: skill("nextjs") },
      { name: "TanStack", href: "https://tanstack.com", icon: simple("tanstack", "ff4154") },
      { name: "Tailwind", href: "https://tailwindcss.com/", icon: skill("tailwind") },
      { name: "shadcn/ui", href: "https://ui.shadcn.com", icon: simple("shadcnui", "ffffff") },
      { name: "Mantine", href: "https://mantine.dev", icon: simple("mantine", "339af0") },
    ],
  },
  {
    id: "backend",
    label: "Backend & Data",
    items: [
      { name: "Node.js", href: "https://nodejs.org/en", icon: skill("nodejs") },
      { name: "Bun", href: "https://bun.sh/", icon: skill("bun") },
      { name: "Deno", href: "https://deno.com/", icon: skill("deno") },
      { name: "NestJS", href: "https://nestjs.com/", icon: skill("nestjs") },
      { name: "Express", href: "https://expressjs.com/", icon: skill("express") },
      { name: "Supabase", href: "https://supabase.com", icon: skill("supabase") },
      { name: "Postgres", href: "https://postgresql.org", icon: skill("postgres") },
      { name: "MongoDB", href: "https://mongodb.com/", icon: skill("mongodb") },
      { name: "D1", href: "https://developers.cloudflare.com/d1/", icon: simple("cloudflare", "f38020") },
      { name: "Firebase", href: "https://firebase.google.com/", icon: skill("firebase") },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    items: [
      { name: "Cloudflare", href: "https://cloudflare.com/", icon: skill("cloudflare") },
      { name: "Workers", href: "https://workers.cloudflare.com/", icon: skill("workers") },
      { name: "Docker", href: "https://docker.com/", icon: skill("docker") },
      { name: "Kubernetes", href: "https://kubernetes.io", icon: skill("kubernetes") },
      { name: "Flux", href: "https://fluxcd.io", icon: simple("flux", "5468ff") },
      { name: "Vercel", href: "https://vercel.com", icon: skill("vercel") },
      { name: "AWS", href: "https://aws.amazon.com", icon: skill("aws") },
      { name: "Azure", href: "https://azure.microsoft.com/en-us", icon: skill("azure") },
      { name: "GCP", href: "https://cloud.google.com/", icon: skill("gcp") },
    ],
  },
  {
    id: "apps",
    label: "Desktop & Mobile",
    items: [
      { name: "Tauri", href: "https://tauri.app", icon: skill("tauri") },
      { name: "Capacitor", href: "https://capacitorjs.com", icon: simple("capacitor", "119eff") },
      { name: "Unity", href: "https://unity.com", icon: skill("unity") },
    ],
  },
  {
    id: "tooling",
    label: "Tooling",
    items: [
      { name: "GitHub", href: "https://github.com/", icon: skill("github") },
      { name: "Sentry", href: "https://sentry.io", icon: skill("sentry") },
      { name: "PostHog", href: "https://posthog.com", icon: simple("posthog", "f9bd2b") },
    ],
  },
]

export type Social = {
  name: string
  href: string
  icon: LucideIcon
}

export const socials: Social[] = [
  { name: "GitHub", href: "https://go.michaelrosstarr.com/github", icon: Github },
  { name: "LinkedIn", href: "https://go.michaelrosstarr.com/linkedin", icon: Linkedin },
  { name: "Spotify", href: "https://go.michaelrosstarr.com/statsfm", icon: Music },
  { name: "X (Twitter)", href: "https://go.michaelrosstarr.com/twitter", icon: Twitter },
]

export type Role = {
  company: string
  title: string
  /** Display strings, e.g. "Dec 2023"; no `end` means it's current */
  start: string
  end?: string
  location?: string
  description?: string
  tags?: string[]
}

// Most recent first, from the LinkedIn profile
export const experience: Role[] = [
  {
    company: "DNS ZA",
    title: "Software Engineer",
    start: "Dec 2023",
    location: "Gauteng",
  },
  {
    company: "4C Recruitment",
    title: "Webmaster & Full Stack Developer",
    start: "Oct 2023",
    location: "South Africa",
    description: "Develop and maintain a Recruitment Management Platform (RMP), integrating AI to streamline workflows and exploring automation of repetitive, time-consuming tasks."
  },
  {
    company: "Hyper Layer",
    title: "Freelance Web Developer",
    start: "May 2020",
    end: "Sep 2026",
    description:
      "Web development for a South African hosting provider offering web hosting, game server hosting and dedicated servers.",
  },
  {
    company: "University of Pretoria",
    title: "Assistant Lecturer",
    start: "Jan 2024",
    end: "Dec 2025",
    location: "Pretoria",
    description:
      "Academic staff for IMY210 and IMY220 (Advanced Web Technologies) in the Multimedia degree, where I helped bring Docker, Docker Compose and Tailwind CSS into the modules.",
    tags: ["Docker", "Tailwind CSS"],
  },
  {
    company: "BMW IT Hub South Africa",
    title: "Student Intern",
    start: "Jan 2024",
    end: "Dec 2025",
    location: "Pretoria",
    description: "Built a mixed reality application with Unity and the Meta XR SDK for the Meta Quest 3.",
    tags: ["Unity", "Meta XR SDK", "Quest 3"],
  },
  {
    company: "BotGhost",
    title: "Full Stack Developer",
    start: "Dec 2021",
    end: "Feb 2025",
    description:
      "Freelance work on the frontend and backend of a Discord bot platform serving over 150,000 users a month.",
    tags: ["MERN", "Tailwind CSS", "Discord.js"],
  },
  {
    company: "University of Pretoria",
    title: "Student Tutor",
    start: "Mar 2023",
    end: "Nov 2023",
    location: "Pretoria",
    description:
      "Tutored COS110 and COS212 (C++) and COS216 (HTML, CSS, JS, MySQL, Angular): weekly tutorials, practical sessions, and testing and marking assignments.",
    tags: ["C++", "Angular"],
  },
  {
    company: "Buffalo City Metropolitan Municipality",
    title: "Seasonal Lifeguard",
    start: "Dec 2020",
    end: "Jan 2023",
    location: "East London",
    description:
      "Three summers at Nahoon and Bonza Bay beaches: rescues, first aid, water awareness, and instructing and examining Lifesaving South Africa courses.",
  },
]

export type Qualification = {
  school: string
  qualification: string
  period: string
}

export const education: Qualification[] = [
  { school: "University of Pretoria", qualification: "BIS (Hons) Multimedia", period: "2024" },
  { school: "University of Pretoria", qualification: "BIS Multimedia", period: "2020 – 2023" },
]

export const navLinks: { label: string; href: string }[] = []
