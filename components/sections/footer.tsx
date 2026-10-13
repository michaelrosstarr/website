import { site } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-purple text-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
