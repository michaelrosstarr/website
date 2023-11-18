
import { Outfit } from 'next/font/google'
import '@std/app/globals.css'
import { getPost } from '@std/utils/notion'
import { Metadata } from 'next'

const outfit = Outfit({ subsets: ['latin'] })

type MetadataProps = {
    params: { id: string }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const slug = params.id;
    const post = await getPost(slug) as any;
    return {
        title: `${post.metadata.title}`,
        description: post.metadata.description
    }
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
