import { Experience } from "@/components/sections/experience"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { SiteHeader } from "@/components/sections/site-header"
import { Stack } from "@/components/sections/stack"

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

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
