import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Avatar from '@/assets/user.png'
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-6'>
            <div></div>
            <ul className='flex justify-between items-center gap-4 text-gray-600'>
                {/* <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/career'}>Career</Link></li> */}
                <li><Navlink href={'/'}
                    className={'text-blue-500'}>Home</Navlink
                ></li>
                <li><Navlink href={'/about'}
                    className={'text-purple-500'}>About</Navlink></li>
                <li><Navlink href={'/career'} className={'text-green-500'}>Career</Navlink></li>
            </ul>
            <div className='flex items-center gap-2'>
                <Image src={Avatar} alt='user' width={60} height={60} />
                <button className='bg-blue-500 text-white'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>

    );
};


export default Navbar;