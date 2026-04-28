// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import Avatar from '@/assets/user.png'
// import Navlink from './Navlink';
// const Navbar = () => {
//     return (
//         <div className='container mx-auto flex justify-between mt-6'>
//             <div></div>
//             <ul className='flex justify-between items-center gap-4 text-gray-600'>
//                 {/* <li><Link href={'/'}>Home</Link></li>
//                 <li><Link href={'/about'}>About</Link></li>
//                 <li><Link href={'/career'}>Career</Link></li> */}
//                 <li><Navlink href={'/'}
//                     className={'text-blue-500'}>Home</Navlink
//                 ></li>
//                 <li><Navlink href={'/about'}
//                     className={'text-purple-500'}>About</Navlink></li>
//                 <li><Navlink href={'/career'} className={'text-green-500'}>Career</Navlink></li>
//             </ul>
//             <div className='flex items-center gap-2'>
//                 <Image src={Avatar} alt='user' width={60} height={60} />
//                 <button className='bg-violet-500 text-white'><Link href={'/login'}>Login</Link></button>
//             </div>
//         </div>

//     );
// };


// export default Navbar;
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Avatar from '@/assets/user.png'
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user, "user");
    return (
        <nav className='bg-white shadow-sm border-b border-gray-100'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6'>

                {/* Logo */}
                <Link href='/' className='text-2xl font-bold text-violet-600 tracking-tight'>
                    Dragon News
                </Link>

                {/* Nav Links */}
                <ul className='flex items-center gap-8 text-sm font-medium'>
                    <li><Navlink href='/'>Home</Navlink></li>
                    <li><Navlink href='/about'>About</Navlink></li>
                    <li><Navlink href='/career'>Career</Navlink></li>
                </ul>

                {/* User & Login */}
                {/* {user?( 
                    <div className='flex items-center gap-3'>
                    <h2> Hello, {user.name}</h2>
                    <Image
                        src={user.image || userAvatar}
                        alt='user'
                        width={40}
                        height={40}
                        className='rounded-full border-2 border-violet-200'
                    />
                    <Link
                        href='/login'
                        className='bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200'
                    >
                        Login
                    </Link> ):(
                      <button
                        
                        className='bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200'
                    >
                        LogOut
                    </button>)
                </div> */}
                {isPending ? <span className="loading loading-spinner text-primary"></span> : user ? (
                    <div className='flex items-center gap-3'>
                        <h2>Hello, {user.name}</h2>
                        <Image
                            src={user.image || userAvatar}
                            alt='user'
                            width={40}
                            height={40}
                            className='rounded-full border-2 border-violet-200'
                        />
                        <button
                            className='bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200'
                            onClick={async () => await authClient.signOut()}>
                            LogOut
                        </button>
                    </div>
                ) : (
                    <Link
                        href='/login'
                        className='bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200'
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;