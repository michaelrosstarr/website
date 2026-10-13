import { Experience } from "@/components/sections/experience"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { SiteHeader } from "@/components/sections/site-header"
import { Stack } from "@/components/sections/stack"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Stack />
      </main>
      <Footer />
    </>
  )
}
