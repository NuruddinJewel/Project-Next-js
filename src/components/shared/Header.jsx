import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";
const Header = () => {
    return (
        // <div className='text-center py-8 space-y-4 '>
        //     <div className='flex justify-center'>
        //         <Image src={logo} width={300} height={200} alt='logo' className='mx-auto block' />
        //     </div>
        //     <p>Journalism Without Fear or Favour</p>
        //     <p>Date</p>
        // </div>
        <div className='text-center py-8 flex flex-col items-center gap-4 mx-auto'>
            <Image src={logo} width={300} height={200} alt='logo' />
            <p>Journalism Without Fear or Favour</p>
            {/* <p>{format(new Date(), " EEEE dd-MM-yyyy")}</p> */}
            <p>{format(new Date(), " EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;