import Link from 'next/link';
import { getPost } from '@std/utils/notion';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize'
import NavBar from '@std/components/Navbar';
import BackToTop from '@std/components/BackToTop';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = (await params).id
    const post = await getPost(slug) as any;
    return {
        title: `${post.metadata.title}`,
        description: post.metadata.description
    }
}

export default async function Post({ params }: Props) {
    const slug = (await params).id
    const post = await getPost(slug);

    return (
        <div className='bg-background min-h-screen' id="top">
            <div className='max-w-6xl m-auto p-5'>
                <NavBar />
                <main className='mt-10 space-y-10'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-5xl text-text'>{post.metadata.title}</h1>
                        <p id='description' className='text-text text-lg'>{post.metadata.date} | {post.metadata.author}</p>
                    </div>

                    {post?.markdown && <div className='text-white space-y-3'>
                        <Markdown
                            rehypePlugins={[rehypeHighlight, rehypeRaw, remarkGfm, rehypeSanitize]}
                            components={{
                                p(props) {
                                    const { node, children, ...rest } = props;
                                    return <p className=''>{children}</p>
                                },
                                img(props) {
                                    const { node, children, ...rest } = props;
                                    return <img src={node?.properties.src as string} className='rounded-lg mx-auto' />
                                },
                                a(props) {
                                    const { node, children, ...rest } = props;
                                    return <Link href={node?.properties.href as string} className='duration-75 text-primary hover:underline'>{children}</Link>
                                },
                                ul(props) {
                                    const { node, children, ...rest } = props;
                                    return <ul className='list-disc ml-5'>{children}</ul>
                                },
                                pre(props) {
                                    const { node, children, ...rest } = props;
                                    return <pre className='bg-cardBackground p-2 rounded-lg'>{children}</pre>
                                }
                            }}

                        >{post?.markdown?.toString()}</Markdown>
                    </div>}
                </main>
            </div>
            <BackToTop />
        </div>
    )
}
