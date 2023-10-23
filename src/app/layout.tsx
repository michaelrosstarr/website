import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import config from '../config.json';

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
      <body className={`${outfit.className} bg-background max-w-6xl m-auto p-5`}>{children}</body>
    </html>
  )
}
