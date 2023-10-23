
import { Outfit } from 'next/font/google'
import '@std/app/globals.css'
import { getPost, getProject } from '@std/utils/notion'
import { PostItem, ProjectItem } from '@std/utils/interfaces'
import { Metadata } from 'next'

const outfit = Outfit({ subsets: ['latin'] })

type MetadataProps = {
    params: { id: string }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const slug = params.id;
    const post = await getPost(slug) as any;
    return {
        title: `${post.metadata.title} | Michael Ross Tarr`,
        description: post.metadata.description
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <body className={`${outfit.className} bg-background max-w-6xl m-auto p-5`}>{children}</body>
    )
}