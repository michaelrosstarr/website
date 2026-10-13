import type React from "react"
import type { Metadata, Viewport } from "next"
import { Archivo_Black, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { site } from "@/lib/data"
import "./globals.css"

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Michael Ross Tarr",
    "Sloth",
    "software engineer",
    "web developer",
    "portfolio",
    "WME Kit",
    "Waze Map Editor",
    "beaches.africa",
    "Duo22",
    "k8sview",
    "TypeScript",
    "Next.js",
    "Cloudflare Workers",
    "Tauri",
    "South Africa",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff7e8" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1815" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${archivoBlack.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
