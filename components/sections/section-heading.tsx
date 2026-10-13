import { cn } from "@/lib/utils"

export function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  return (
    <div className="mb-12">
      <p className={cn("mb-4 inline-block -rotate-1 border-2 px-3 py-1 font-head text-sm text-black shadow-sm", accent)}>
        {eyebrow}
      </p>
      <h2 className="text-4xl sm:text-5xl">{title}</h2>
    </div>
  )
}
