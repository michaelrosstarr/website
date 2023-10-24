import config from '../../config.json';
import Link from 'next/link';
import { PostItem, PostTagItem, } from '@std/utils/interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons';
import { getPosts } from '@std/utils/notion';
import { cookies } from 'next/headers'

export default async function Blog() {
    const posts = await getPosts();
    const cookieStore = cookies();
    return (
        <div className='bg-background min-h-screen' id="top">
            <div className='max-w-6xl m-auto p-5'>
                <nav className='flex justify-between items-center'>
                    <Link href='https://michaelrosstarr.com' prefetch={true} className='text-4xl text-text font-bold'>MRT</Link>
                    <div className='flex items-center gap-5'>
                        <Link href='/' prefetch={true} className='text-xl text-text duration-75 hover:text-primary'>go home</Link>
                    </div>
                </nav>
                <main className='mt-20 space-y-10 md:space-y-32'>
                    <section id='about' className='space-y-8'>
                        <h1 className='font-bold text-5xl text-text text-center'>👋, welcome to my <span className='text-primary'>BLOG</span></h1>
                        <p id='description' className='text-text text-center text-lg md:m-5'>I just blog about anything really, anything that I find interesting or just want to share with the world, it goes here.</p>
                    </section>
                    <section id='posts' className='space-y-5'>
                        <h3 className='font-semibold text-4xl text-text text-center'>my Posts</h3>
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                            {posts.map((item: PostItem, index: number) => <div className={`bg-third p-5 md:p-10 space-y-4 shadow hover:-translate-y-1 duration-200 block rounded-lg`} key={index}>
                                <h4 className='text-text text-center text-2xl font-semibold'>{item.title}</h4>
                                <p className='text-text text-center text-lg line-clamp-3'>{item.description}</p>
                                <div className='flex gap-2 text-text text-sm justify-center flex-wrap'>
                                    {item.tags.map((tag: PostTagItem, stackIndex: number) => <span key={stackIndex} className={`py-1 px-2 bg-forth rounded-lg cursor-default`}>#{tag.name}</span>)}
                                </div>
                                <div className='flex gap-5 justify-between'>
                                    <p className='text-text'>{item.date}</p>
                                    <Link href={`/blog/${item.slug}`} className='text-text hover:text-primary flex items-center hover:-translate-y-0.5 duration-100 gap-1'>read post <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' /></Link>
                                </div>
                            </div>)}
                        </div>
                    </section>
                    <section id='contact'>
                        <div className='flex gap-5 justify-center'>
                            <Link href={`mailto:${config.contact.email.address}`} className='text-text hover:text-primary text-lg flex items-center hover:-translate-y-0.5 duration-100 gap-2'>{config.contact.email.text}</Link>
                        </div>
                    </section>
                    <nav className='flex justify-center md:hidden text-text flex-col items-center gap-5'>
                        <Link prefetch={true} href='/' className='text-xl text-text duration-75 hover:text-primary'>go home</Link>
                        <Link href='#top' className='text-xl text-text duration-75 hover:text-primary'>back to the top</Link>
                    </nav>
                </main>
            </div>
        </div>
    )
}
