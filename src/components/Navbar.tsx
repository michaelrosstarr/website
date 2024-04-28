import { NavItem } from "@std/utils/interfaces";
import Header from "./Header";
import config from '../config.json';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default async function NavBar() {
    return <nav className='flex justify-between items-center'>
        <Header />

        <div className='md:flex items-center gap-5 hidden'>
            {
                config.nav.map((item: NavItem, index: number) => <Link key={index} href={item.href} prefetch={true} className='text-xl text-text duration-75 hover:text-primary'>{item.name}</Link>)
            }
        </div>
        <div className='md:hidden block'>
            <Link href='#mobile-nav' className='text-text'><FontAwesomeIcon icon={faBars} className='w-8 h-8' /></Link>
        </div>
    </nav>
}