import Link from 'next/link';
import { getPost } from '@std/utils/notion';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '@std/components/Header';
import NavBar from '@std/components/Navbar';

export default async function Post({ params }: { params: { id: string } }) {

    const post = await getPost(params.id);

    return (
        <div className='bg-background min-h-screen' id="top">
            <div className='max-w-6xl m-auto p-5'>
                <NavBar />
                <main className='mt-10 space-y-10'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-5xl text-text'>{post.metadata.title}</h1>
                        <p id='description' className='text-text text-lg'>{post.metadata.date} | {post.metadata.author}</p>
                    </div>

                    {post?.markdown && <div className='text-white'>
                        <Markdown
                            rehypePlugins={[rehypeHighlight, rehypeRaw, remarkGfm, rehypeSanitize]}
                            components={{
                                p(props) {
                                    const { node, children, ...rest } = props;
                                    return <p className='mt-2'>{children}</p>
                                },
                                img(props) {
                                    const { node, children, ...rest } = props;
                                    return <img src={node?.properties.src as string} className='mt-2 rounded-lg' />
                                },
                                a(props) {
                                    const { node, children, ...rest } = props;
                                    return <Link href={node?.properties.href as string} className='duration-75 text-primary hover:underline'>{children}</Link>
                                },
                                ul(props) {
                                    const { node, children, ...rest } = props;
                                    return <ul className='list-disc ml-5 mt-1'>{children}</ul>
                                },
                                pre(props) {
                                    const { node, children, ...rest } = props;
                                    return <pre className='bg-cardBackground p-2 rounded-lg mt-2'>{children}</pre>
                                }
                            }}

                        >{post?.markdown?.toString()}</Markdown>
                    </div>}

                    <nav className='flex justify-center md:hidden text-text flex-col items-center gap-5' id='mobile-nav'>
                        <Link prefetch={true} href='/' className='text-xl text-text duration-75 hover:text-primary'>go back home</Link>
                        <Link prefetch={true} href='/blog' className='text-xl text-text duration-75 hover:text-primary'>back to blog posts</Link>
                        <Link href='#top' className='text-xl text-text duration-75 hover:text-primary'>back to the top</Link>
                    </nav>
                </main>
            </div>
        </div>
    )
}
