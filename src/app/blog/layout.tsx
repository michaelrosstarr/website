import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '@std/app/globals.css'
import config from '@std/config.json';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: config.metadata['/blog'].title,
    description: config.metadata['/blog'].description,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <body className={outfit.className}>{children}</body>
    )
}
