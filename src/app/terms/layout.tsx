import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '../globals.css'
import config from '../../config.json';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: config.metadata['/terms'].title,
    description: config.metadata['/terms'].description,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={outfit.className}>{children}</body>
        </html>
    )
}
