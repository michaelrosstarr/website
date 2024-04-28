import Link from 'next/link';
import { getProject } from '@std/utils/notion';
import { faArrowUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize'
import Header from '@std/components/Header';

export default async function Project({ params }: { params: { id: string } }) {

    const project = await getProject(params.id);

    return (
        <div className='bg-background min-h-screen' id="#top">
            <div className='max-w-6xl m-auto p-5'>
                <nav className='flex justify-between items-center'>
                    <Header />
                    <div className='md:flex items-center gap-5 hidden'>
                        <Link href='/' className='text-xl text-text duration-75 hover:text-primary'>go home</Link>
                        <Link href='/blog' className='text-xl text-text duration-75 hover:text-primary'>my blog</Link>
                    </div>
                    <div className='md:hidden block'>
                        <Link href='#mobile-nav' className='text-text'><FontAwesomeIcon icon={faBars} className='w-8 h-8' /></Link>
                    </div>
                </nav>
                <main className='mt-20 space-y-10'>
                    <h1 className='font-bold text-5xl text-text text-center'>{project.name}</h1>
                    <p id='description' className='text-text text-center text-lg md:m-5'>{project.description}</p>
                    <div className='flex gap-2 text-text text-sm justify-center flex-wrap'>
                        {project.stack.map((stack: any, stackIndex: number) => <span key={stackIndex} className='bg-cardBackground px-2 py-1 rounded-lg'>{stack.name}</span>)}
                    </div>
                    <div className='flex gap-5 justify-center'>
                        <Link href={project.link} className='text-text hover:text-primary flex items-center gap-2'>Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='w-4 h-4' /></Link>
                    </div>

                    {project?.content && <div className='text-white text-lg'>
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
                        >{project?.content?.toString()}</Markdown>
                    </div>}

                    <nav className='flex justify-center md:hidden text-text flex-col items-center gap-5' id='mobile-nav'>
                        <Link href='/' className='text-xl text-text duration-75 hover:text-primary'>go back home</Link>
                        <Link href='/blog' className='text-xl text-text duration-75 hover:text-primary'>my blog</Link>
                        <Link href='#top' className='text-xl text-text duration-75 hover:text-primary'>back to the top</Link>
                    </nav>
                </main>
            </div>
        </div>
    )
}
