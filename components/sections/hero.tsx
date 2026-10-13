import Image from "next/image"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site, socials } from "@/lib/data"

export function Hero() {
  return (
    <section id="top" className="border-b-2 bg-grid">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:py-28 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="mb-6 inline-block -rotate-2 border-2 bg-pink px-3 py-1 font-head text-sm text-black shadow-md">
            Software engineer · South Africa
          </p>
          <h1 className="text-5xl leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            Hey, I&apos;m{" "}
            {/* Marker underline that follows each wrapped line */}
            <span className="box-decoration-clone bg-[linear-gradient(transparent_62%,var(--primary)_62%,var(--primary)_88%,transparent_88%)]">
              Michael Ross Tarr
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Also known as <strong className="text-foreground">{site.alias}</strong> in some places. I build web apps,
            desktop apps and tools for the Waze community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <Button key={social.name} variant="outline" size="lg" asChild className="bg-card">
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="size-5" />
                    {social.name}
                  </a>
                </Button>
              )
            })}
          </div>

          <Button size="lg" asChild className="mt-6">
            <a href="#projects">
              See what I&apos;m building
              <ArrowDown className="size-5" />
            </a>
          </Button>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-xs sm:max-w-sm lg:w-96">
          <div aria-hidden className="absolute inset-0 rotate-6 border-2 bg-blue shadow-lg" />
          <div aria-hidden className="absolute inset-0 -rotate-3 border-2 bg-primary shadow-lg" />
          <Image
            src="/profile.jpg"
            alt={`${site.name} lying on the floor, smiling, nose to nose with a black-and-white dog`}
            fill
            priority
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 320px"
            className="border-2 object-cover object-[72%_center] shadow-xl"
          />
          <span className="absolute -top-5 -right-2 rotate-12 border-2 bg-green px-3 py-1 font-head text-sm text-black shadow-md sm:-right-6">
            aka {site.alias}
          </span>
        </div>
      </div>
    </section>
  )
}
