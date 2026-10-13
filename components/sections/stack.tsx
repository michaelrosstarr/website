import Image from "next/image"

import { SectionHeading } from "@/components/sections/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { stack, type StackItem } from "@/lib/data"

export function Stack() {
  return (
    <section id="stack" className="border-b-2 bg-grid">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="What I build with" title="Tech stack" accent="bg-blue" />
        <Tabs defaultValue={stack[0].id} className="gap-8">
          <TabsList className="h-auto! w-full flex-wrap justify-start gap-1 sm:w-fit">
            {stack.map((group) => (
              <TabsTrigger key={group.id} value={group.id} className="flex-none text-base">
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {stack.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <StackTile item={item} />
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function StackTile({ item }: { item: StackItem }) {
  // skillicons ship their own dark rounded tile; simpleicons are bare glyphs, so give them one
  const bare = item.icon.includes("simpleicons")

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 border-2 bg-card p-3 text-center font-head sm:flex-row sm:gap-3 sm:text-left shadow-md transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      {bare ? (
        <span className="grid size-12 shrink-0 place-items-center rounded-[22%] bg-[#242938] p-2.5">
          <Image src={item.icon} alt="" width={28} height={28} className="size-full" />
        </span>
      ) : (
        <Image src={item.icon} alt="" width={48} height={48} className="size-12 shrink-0" />
      )}
      <span className="min-w-0 break-words">{item.name}</span>
    </a>
  )
}
