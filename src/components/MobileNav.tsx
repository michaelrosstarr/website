'use client'
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import config from '../config.json';
import Link from 'next/link';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { NavItem } from '@std/utils/interfaces';

export default function MobileNav() {
    return <Popover as='nav'>
        {({ open, close }) => <>
            <PopoverButton className='outline-none active:outline-none'>
                <FontAwesomeIcon icon={open ? faXmark : faBars} size='2x' className='border-transparent focus:border-transparent focus:ring-0 text-text' />
            </PopoverButton>

            <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
            >
                <PopoverPanel className='absolute inset-x-0 top-full mt-2 flex origin-top flex-col rounded-2xl bg-black3 p-4 text-lg tracking-tight text-slate-900 shadow-xl bg-cardBackground gap-2'>
                    {
                        config.nav.map((item: NavItem, index: number) => <Link key={index} href={item.href} prefetch={true} className='text-xl text-gray-300 duration-75 hover:text-primary py-2' onClick={() => close()}>{item.name}</Link>)
                    }
                </PopoverPanel>
            </Transition>
        </>
        }
    </Popover>
}