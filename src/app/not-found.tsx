import Link from 'next/link';

export default async function NoExist() {
    return (
        <div className='bg-background min-h-screen'>
            <div className='max-w-6xl m-auto p-5'>
                <nav className='flex justify-between items-center'>
                    <Link href='/' className='text-4xl text-text font-bold'>MRT</Link>
                    <div className='md:flex items-center gap-5 hidden'>
                        <Link href='/' className='text-xl text-text duration-75 hover:text-primary'>go home</Link>
                        <Link href='/blog' className='text-xl text-text duration-75 hover:text-primary'>my blog</Link>
                    </div>
                </nav>
                <main className='mt-20 space-y-10'>
                    <h1 className='font-bold text-5xl text-text text-center'>Seems you got abit <span className='text-primary'>lost...</span></h1>
                    <div className='flex gap-5 justify-center'>
                        <Link href="/" className='text-text hover:text-primary flex items-center hover:-translate-y-0.5 duration-100 gap-2 text-xl'>go back home</Link>
                        <Link href="/blog" className='text-text hover:text-primary flex items-center hover:-translate-y-0.5 duration-100 gap-2 text-xl'>or visit my blog</Link>
                    </div>
                </main>
            </div>
        </div>
    )
}
