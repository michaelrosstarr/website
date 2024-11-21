'use client' // Error boundaries must be Client Components

import NavBar from '@std/components/Navbar'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='bg-background min-h-screen'>
            <div className='max-w-6xl m-auto p-5'>
                <NavBar />
                <main className='mt-20 space-y-10'>
                    <h1 className='font-bold text-5xl text-text text-center'>Error -_- <span className='text-primary'>{error.message}</span></h1>
                </main>
            </div>
        </div>
    )
}
