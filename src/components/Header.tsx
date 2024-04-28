import Link from "next/link";
import Image from "next/image";
import porg from '@std/assets/porg-baby.png';

export default async function Header() {
    return <Link href='/' className='flex gap-2 items-center'>
        <Image src={porg} alt='A Star Wars Porg' className='w-[36px] h-[36px]' />
        <p className='text-4xl text-text font-bold'>MRT</p>
    </Link>
}