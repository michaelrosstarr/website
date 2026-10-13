"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { navLinks, site } from "@/lib/data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-2 bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-2 font-head text-lg">
          <span className="grid size-9 place-items-center border-2 bg-primary text-primary-foreground shadow-sm">
            MT
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {navLinks.length > 0 && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-card md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <SheetHeader className="border-b-2">
                  <SheetTitle className="text-xl">{site.name}</SheetTitle>
                  <SheetDescription>aka {site.alias}</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 px-4">
                  {navLinks.map((link) => (
                    <Button key={link.href} size="lg" asChild className="justify-start">
                      <a href={link.href} onClick={() => setOpen(false)}>
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
