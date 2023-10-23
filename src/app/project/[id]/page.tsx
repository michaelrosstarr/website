import Link from 'next/link';
import { getProject } from '@std/utils/notion';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default async function Project({ params }: { params: { id: string } }) {

    const project = await getProject(params.id);

    return (
        <div className='bg-background'>
            <div className='max-w-6xl m-auto p-5'>
                <nav className='flex justify-between items-center'>
                    <Link href='https://michaelrosstarr.com' className='text-4xl text-text font-bold'>MRT</Link>
                    <div className='md:flex items-center gap-5 hidden'>
                        <Link href='/' className='text-xl text-text duration-75 hover:text-primary'>go home</Link>
                        <Link href='/blog' className='text-xl text-text duration-75 hover:text-primary'>my blog</Link>
                    </div>
                </nav>
                <main className='mt-20 space-y-10'>
                    <h1 className='font-bold text-5xl text-text text-center'>{project[0].name}</h1>
                    <p id='description' className='text-text text-center text-lg md:m-5'>{project[0].description}</p>
                    <div className='flex gap-2 text-text text-sm justify-center flex-wrap'>
                        {project[0].stack.map((stack: string, stackIndex: number) => <span key={stackIndex}>{stack}</span>)}
                    </div>
                    <div className='flex gap-5 justify-center'>
                        <Link href={project[0].link} className='text-text hover:text-primary flex items-center hover:-translate-y-0.5 duration-100 gap-2'>Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='w-4 h-4' /></Link>
                    </div>
                    <nav className='flex justify-center md:hidden text-text flex-col items-center gap-5'>
                        <Link href='/' className='text-xl text-text duration-75 hover:text-primary'>go home</Link>
                        <Link href='/blog' className='text-xl text-text duration-75 hover:text-primary'>my blog</Link>
                    </nav>
                </main>
            </div>
        </div>
    )
}
