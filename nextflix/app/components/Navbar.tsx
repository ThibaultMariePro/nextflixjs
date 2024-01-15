'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/netflix-logo.png"
import { usePathname } from "next/navigation";
import { Bell, Search, User } from "lucide-react";
import UserNav from "./UserNav";


interface linkProps {
    name: string;
    href: string;
}

const links: linkProps[] = [
    {name: 'Home', href: '/home'},
    {name: 'TV Shows', href: '/home/shows'},
    {name: 'Movies', href: '/home/movies'},
    {name: 'Recently Added', href: '/home/recently'},
    {name: 'My List', href: '/home/user/list'}
]

export default function Navbar() {

    const pathName = usePathname()

    return (
        <div className="w-full mx-auto max-w-7xl items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
            <div className="flex items-center">
                <Link href="/home" className="w-32">
                    <Image
                        src={Logo}
                        alt="Netflix Logo"
                        priority
                    />
                </Link>
                <ul className="lg:flex gap-x-4 ml-14 hidden">
                    {links.map((link, index) => (
                        <div key={index}>
                            {pathName === link.href ? (
                                <li>
                                    <Link href={link.href} className="text-white font-semibold underline text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ):(
                                <li>
                                <Link href={link.href} className="text-gray-400">
                                    {link.name}
                                </Link>
                            </li>
                            )
                        }
                        </div>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-x-8"> 
                <Search className="text-white cursor-pointer w-6 h-6" size={24}/>
                <Bell className="text-white cursor-pointer w-6 h-6" size={24}/>
                <UserNav />
            </div>
        </div>
    )
}