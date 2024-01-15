import Image from 'next/image';
import React, { ReactNode } from 'react';
import BackgroundImage from '../../public/images/netflix-bg.jpg';
import Logo from '../../public/images/netflix-logo.png';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
            <Image 
                src={BackgroundImage} 
                alt='background-image'
                className='hidden sm:flex sm:object-cover -z-10 brightness-50'
                priority
                fill
            />
            <Image 
                src={Logo}
                alt='logo'
                width={120}
                height={120}
                className='absolute left-2 top-4 object-contain md:left-4 md:top-2'
            />
            {children}
        </div>
    );
}