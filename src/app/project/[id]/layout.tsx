
import { Outfit } from 'next/font/google'
import '@std/app/globals.css'
import { getProject } from '@std/utils/notion'
import { ProjectItem } from '@std/utils/interfaces'
import { Metadata } from 'next'

const outfit = Outfit({ subsets: ['latin'] })

type MetadataProps = {
    params: { id: string }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
    const slug = params.id;
    const project = await getProject(slug) as ProjectItem[];
    return {
        title: project[0].name
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
