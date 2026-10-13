import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowUpRight, Download, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { accentBg, type Project, type SubProject } from "@/lib/data"
import { cn } from "@/lib/utils"

const external = { target: "_blank", rel: "noopener noreferrer" } as const

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, "")
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const hasActions = project.url || project.repo || project.releases

  return (
    <Card className={cn("min-w-0 gap-0 py-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg", featured && "lg:col-span-2")}>
      <div
        className={cn(
          "relative border-b-2 p-5 text-black",
          project.image ? "flex min-h-64 flex-col justify-end overflow-hidden md:min-h-72" : accentBg[project.accent],
        )}
      >
        {project.image && (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes={featured ? "(min-width: 1152px) 1120px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
            className="object-cover object-[75%_30%]"
          />
        )}
        <div className="flex items-start justify-between gap-3">
          {/* Over an image the text sits on its own sticker so it stays readable */}
          <div className={cn(project.image && cn("relative w-fit border-2 p-4 shadow-md", accentBg[project.accent]))}>
            <h3 className="text-2xl sm:text-3xl">{project.name}</h3>
            <p className="mt-1 font-medium">{project.tagline}</p>
            {project.platforms && (
              <p className="mt-3 text-sm font-medium opacity-80">{project.platforms.join(" · ")}</p>
            )}
          </div>
          <Badge
            variant="outline"
            className={cn("h-6 bg-card text-card-foreground", project.image && "absolute top-5 right-5")}
          >
            {project.status}
          </Badge>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col gap-5 py-5 text-base">
        <p>{project.description}</p>

        <ul className="space-y-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden className={cn("mt-1.5 size-3 shrink-0 border-2", accentBg[project.accent])} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {(project.apps || project.userscripts) && (
          <div className="grid gap-6 md:grid-cols-2">
            {project.apps && <SubProjectList title="Apps" items={project.apps} />}
            {project.userscripts && <SubProjectList title="Userscripts" items={project.userscripts} />}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="bg-background">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      {hasActions && (
        <CardFooter className="flex-wrap gap-3 bg-muted">
          {project.url && (
            <Button asChild>
              <a href={project.url} {...external}>
                Visit {hostname(project.url)}
                <ArrowUpRight />
              </a>
            </Button>
          )}
          {project.releases && (
            <Button asChild>
              <a href={project.releases} {...external}>
                <Download />
                Download
              </a>
            </Button>
          )}
          {project.repo && (
            <Button variant="outline" asChild className="bg-card">
              <a href={project.repo} {...external}>
                <Github />
                Source
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  )
}

function SubProjectList({ title, items }: { title: string; items: SubProject[] }) {
  return (
    <div>
      <h4 className="mb-3 text-lg">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name} className="border-2 bg-background p-3 shadow-sm">
            <div className="font-head">{item.name}</div>
            <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
              {item.url && <SubLink href={item.url}>{hostname(item.url)}</SubLink>}
              {item.greasyfork && <SubLink href={item.greasyfork}>Greasy Fork</SubLink>}
              {item.repo && <SubLink href={item.repo}>GitHub</SubLink>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SubLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      {...external}
      className="inline-flex items-center gap-0.5 underline decoration-2 underline-offset-4 hover:decoration-primary"
    >
      {children}
      <ArrowUpRight className="size-3.5" />
    </a>
  )
}
