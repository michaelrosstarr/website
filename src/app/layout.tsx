import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import config from '../config.json';
import { SpeedInsights } from "@vercel/speed-insights/next"

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.metadata['/'].title,
  description: config.metadata['/'].description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <SpeedInsights />
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
