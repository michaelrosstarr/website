import { ArrowUpRight } from "lucide-react"

import { ProjectCard } from "@/components/sections/project-card"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import { projects, socials } from "@/lib/data"

const github = socials.find((social) => social.name === "GitHub")

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="border-b-2">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="Things I build" title="Projects" accent="bg-primary" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProjectCard project={featured} featured />
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {github && (
            <div className="flex flex-col items-start justify-center gap-4 border-2 border-dashed bg-grid p-8">
              <h3 className="text-3xl">More on GitHub</h3>
              <p className="text-base text-muted-foreground">
                Smaller tools, experiments and the odd userscript live on my GitHub profile.
              </p>
              <Button variant="outline" asChild className="bg-card">
                <a href={github.href} target="_blank" rel="noopener noreferrer">
                  <github.icon />
                  Visit my GitHub
                  <ArrowUpRight />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
