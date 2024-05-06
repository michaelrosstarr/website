import { NavItem } from "@std/utils/interfaces";
import Header from "./Header";
import config from '../config.json';
import Link from "next/link";
import MobileNav from "./MobileNav";

export default async function NavBar() {
    return <header className='flex justify-between items-center relative'>
        <Header />

        <nav className='md:flex items-center gap-5 hidden'>
            {
                config.nav.map((item: NavItem, index: number) => <Link key={index} href={item.href} prefetch={true} className='text-xl text-text duration-75 hover:text-primary'>{item.name}</Link>)
            }
        </nav>
        <div className='md:hidden block'>
            <MobileNav />
        </div>
    </header>
}