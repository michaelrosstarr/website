import Link from 'next/link';
import { getPost, getProject } from '@std/utils/notion';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from '@std/components/CodeBlock';


interface ExtraProps {
    inline?: boolean;
}

export default async function Post({ params }: { params: { id: string } }) {

    const post = await getPost(params.id);

    return (
        <>
            <nav className='flex justify-between items-center'>
                <Link prefetch={true} href='https://michaelrosstarr.com' className='text-4xl text-text font-bold'>MRT</Link>
                <div className='md:flex items-center gap-5 hidden'>
                    <Link prefetch={true} href='/blog' className='text-xl text-text duration-75 hover:text-primary'>go back</Link>
                </div>
            </nav>
            <main className='mt-20 space-y-10'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-5xl text-text'>{post.metadata.title}</h1>
                    <p id='description' className='text-text text-lg'>{post.metadata.date} | {post.metadata.author}</p>
                </div>

                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }: ExtraProps & any) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <CodeBlock
                                    code={String(children).replace(/\n$/, '')}
                                    language={match[1]}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                    className='text-text'
                >
                    {post?.markdown?.toString()}
                </ReactMarkdown>

                <nav className='flex justify-center md:hidden text-text flex-col items-center gap-5'>
                    <Link prefetch={true} href='/blog' className='text-xl text-text duration-75 hover:text-primary'>my blog</Link>
                </nav>
            </main>
        </>
    )
}
