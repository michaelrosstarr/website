import { ArrowUpRight, GraduationCap, HandHeart } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { education, experience, socials, volunteering, type Role } from "@/lib/data"
import { cn } from "@/lib/utils"

const linkedin = socials.find((social) => social.name === "LinkedIn")

export function Experience() {
  return (
    <section id="experience" className="border-b-2">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="Where I've worked" title="Experience" accent="bg-green" />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_20rem]">
          <ol className="relative ml-2 space-y-8 border-l-4 border-border pl-8">
            {experience.map((role) => (
              <RoleItem key={`${role.company}-${role.title}`} role={role} />
            ))}
          </ol>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="border-2 bg-card shadow-md">
              <div className="flex items-center gap-2 border-b-2 bg-blue p-4 text-black">
                <GraduationCap className="size-6" />
                <h3 className="text-xl">Education</h3>
              </div>
              <ul className="divide-y-2">
                {education.map((item) => (
                  <li key={item.qualification} className="p-4">
                    <div className="font-head">{item.qualification}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.school} · {item.period}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {volunteering.length > 0 && (
              <div className="border-2 bg-card shadow-md">
                <div className="flex items-center gap-2 border-b-2 bg-pink p-4 text-black">
                  <HandHeart className="size-6" />
                  <h3 className="text-xl">Volunteering</h3>
                </div>
                <ul className="divide-y-2">
                  {volunteering.map((item) => (
                    <li key={`${item.organization}-${item.role}`} className="p-4">
                      <div className="font-head">{item.role}</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {item.organization} · {item.start} – {item.end ?? "Present"}
                      </div>
                      {item.cause && <div className="mt-1 text-sm text-muted-foreground">{item.cause}</div>}
                      {item.description && <p className="mt-2 text-sm">{item.description}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {linkedin && (
              <Button variant="outline" asChild className="w-full bg-card">
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer">
                  <linkedin.icon />
                  Full history on LinkedIn
                  <ArrowUpRight />
                </a>
              </Button>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}

function RoleItem({ role }: { role: Role }) {
  const current = !role.end

  return (
    <li className="relative">
      <span
        aria-hidden
        className={cn(
          "absolute top-5 -left-[2.75rem] size-5 border-2 shadow-sm",
          current ? "bg-primary" : "bg-card",
        )}
      />
      <div className="border-2 bg-card p-5 shadow-md">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <h3 className="text-xl">{role.title}</h3>
            <p className="font-medium">{role.company}</p>
          </div>
          <Badge variant={current ? "default" : "outline"} className="h-6">
            {role.start} – {role.end ?? "Present"}
          </Badge>
        </div>
        {role.location && <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>}
        {role.description && <p className="mt-3 text-base">{role.description}</p>}
        {role.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {role.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-background">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
