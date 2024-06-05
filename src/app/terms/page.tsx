import NavBar from "@std/components/Navbar";

export default function Terms() {
    return (
        <div className='bg-background min-h-screen' id="top">
            <div className='max-w-6xl m-auto p-5'>
                <NavBar />
                <main className='mt-20 space-y-10 md:space-y-32'>
                    <section id='about' className='space-y-8'>
                        <h1 className='font-bold text-5xl text-text text-center'>Terms and Conditions</h1>
                    </section>
                </main>
            </div></div>
    )
}