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

            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 text-pretty">
              I do the <Link className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:underline" href='https://interactivecompany.net'>Interactive Company</Link>
            </p>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              Building digital experiences that connect people and technology. Passionate about creating innovative
              solutions with modern web technologies.
            </p>

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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a
            href="#tech-stack"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce-down"></div>
            </div>
          </a>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="relative py-20 bg-gradient-to-bl from-orange-500/12 via-background via-50% to-blue-500/12 overflow-hidden">
        {/* Static grid background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-static-grid"></div>
        </div>

        {/* Flowing gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-blue-500/8 animate-gradient-shift"></div>
        </div>

        {/* Floating elements with better flow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/12 w-2 h-2 bg-orange-500/30 rounded-full animate-float-gentle"></div>
          <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-blue-500/25 rounded-full animate-float-gentle-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-orange-400/20 rounded-full animate-float-gentle-slow"></div>
          <div className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-blue-500/35 rounded-full animate-float-gentle"></div>
          <div className="absolute bottom-1/4 right-1/12 w-3 h-3 bg-orange-500/30 rounded-full animate-float-gentle-delayed"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Technologies I Work With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A diverse toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 sm:gap-4 max-w-6xl mx-auto">
            {technologies.map((tech) => (
              <Card
                key={tech.name}
                className="tech-card group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 aspect-square"
              >
                <CardContent className="text-center p-2 sm:p-6 h-full flex flex-col justify-center items-center">
                  <Link href={tech.link} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={tech.image || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 sm:mb-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    />
                    <p className="text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">

            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className={`transition-colors duration-200 hover:bg-primary/10 ${social.color}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                )
              })}
            </div>

            <div className="text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Michael Ross Tarr • <Link href='https://interactivecompany.net'>the Interactive Company</Link></p>
              <p className="mt-1">Made with ❤️ in South Africa 🇿🇦</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
