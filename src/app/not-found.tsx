import NavBar from '@std/components/Navbar';
import Link from 'next/link';

export default async function NoExist() {
    return (
        <div className='bg-background min-h-screen'>
            <div className='max-w-6xl m-auto p-5'>
                <NavBar />
                <main className='mt-20 space-y-10'>
                    <h1 className='font-bold text-5xl text-text text-center'>Seems you got abit <span className='text-primary'>lost...</span></h1>
                </main>
            </div>
        </div>
    )
}
