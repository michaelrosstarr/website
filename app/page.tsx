import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Music, Twitter } from "lucide-react"
import Link from "next/link"

const technologies = [
  {
    link: "https://docker.com/",
    image: "https://skillicons.dev/icons?i=docker",
    name: "Docker",
  },
  {
    link: "https://azure.microsoft.com/en-us",
    image: "https://skillicons.dev/icons?i=azure",
    name: "Azure",
  },
  {
    link: "https://cloudflare.com/",
    image: "https://skillicons.dev/icons?i=cloudflare",
    name: "Cloudflare",
  },
  {
    link: "https://deno.com/",
    image: "https://skillicons.dev/icons?i=deno",
    name: "Deno",
  },
  {
    link: "https://expressjs.com/",
    image: "https://skillicons.dev/icons?i=express",
    name: "Express",
  },
  {
    link: "https://firebase.google.com/",
    image: "https://skillicons.dev/icons?i=firebase",
    name: "Firebase",
  },
  {
    link: "https://cloud.google.com/",
    image: "https://skillicons.dev/icons?i=gcp",
    name: "GCP",
  },
  {
    link: "https://github.com/",
    image: "https://skillicons.dev/icons?i=github",
    name: "GitHub",
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "https://skillicons.dev/icons?i=js",
    name: "JavaScript",
  },
  {
    link: "https://mongodb.com/",
    image: "https://skillicons.dev/icons?i=mongodb",
    name: "MongoDB",
  },
  {
    link: "https://nestjs.com/",
    image: "https://skillicons.dev/icons?i=nestjs",
    name: "NestJS",
  },
  {
    link: "https://nextjs.org",
    image: "https://skillicons.dev/icons?i=nextjs",
    name: "Next.js",
  },
  {
    link: "https://nodejs.org/en",
    image: "https://skillicons.dev/icons?i=nodejs",
    name: "Node.js",
  },
  {
    link: "https://react.dev",
    image: "https://skillicons.dev/icons?i=react",
    name: "React",
  },
  {
    link: "https://tailwindcss.com/",
    image: "https://skillicons.dev/icons?i=tailwind",
    name: "Tailwind",
  },
  {
    link: "https://typescriptlang.org/",
    image: "https://skillicons.dev/icons?i=ts",
    name: "TypeScript",
  },
  {
    link: "https://workers.cloudflare.com/",
    image: "https://skillicons.dev/icons?i=workers",
    name: "Workers",
  },
  {
    link: "https://vercel.com",
    image: "https://skillicons.dev/icons?i=vercel",
    name: "Vercel",
  },
  {
    link: "https://sentry.io",
    image: "https://skillicons.dev/icons?i=sentry",
    name: "Sentry",
  },
  {
    link: "https://aws.amazon.com",
    image: "https://skillicons.dev/icons?i=aws",
    name: "AWS",
  },
  {
    link: "https://unity.com",
    image: "https://skillicons.dev/icons?i=unity",
    name: "Unity",
  },
  {
    link: "https://bun.sh/",
    image: "https://skillicons.dev/icons?i=bun",
    name: "Bun",
  },
]

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://go.michaelrosstarr.com/github",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://go.michaelrosstarr.com/linkedin",
    color: "hover:text-blue-600",
  },
  {
    name: "Spotify",
    icon: Music,
    href: "https://go.michaelrosstarr.com/statsfm",
    color: "hover:text-green-500",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    href: "https://go.michaelrosstarr.com/twitter",
    color: "hover:text-blue-400",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/12 via-background via-50% to-secondary/12"
      >
        {/* Static grid background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-static-grid"></div>
        </div>

        {/* Flowing gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-accent/8 animate-gradient-shift"></div>
        </div>

        {/* Floating elements with better flow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/12 w-2 h-2 bg-primary/30 rounded-full animate-float-gentle"></div>
          <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-secondary/25 rounded-full animate-float-gentle-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-accent/20 rounded-full animate-float-gentle-slow"></div>
          <div className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-primary/35 rounded-full animate-float-gentle"></div>
          <div className="absolute bottom-1/4 right-1/12 w-3 h-3 bg-secondary/30 rounded-full animate-float-gentle-delayed"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
              Hey, I'm <span className="text-primary">Michael Ross Tarr</span>
            </h1>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="lg"
                    asChild
                    className="transition-all duration-200 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                      {social.name}
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

    </div>
  )
}
