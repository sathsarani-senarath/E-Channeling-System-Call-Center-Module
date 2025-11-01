/*import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LOGO from '../../../public/logo.jpg'

const Navbar = () => {
  return (

    <nav className='bg-transparent-0 shadow p-6 space-x-4 font-bold'>
       <div className='flex place-items-center'> 
       <Image src={LOGO} alt="logo" width={120} height={120} />
       </div> 
      <Link href="/pages/first" className='hover:text-blue-600'>Link One</Link>
      <Link href="" className='hover:text-blue-600'>Link Two</Link>
      <Link href="" className='hover:text-blue-600'>Link Three</Link>
    </nav>
    
  )
}

export default Navbar
*/

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LOGO from '../../../public/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8">
      {/* Flex container */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Left side links */}
        <div className="flex space-x-8 font-bold text-gray-700">
          <Link href="/pages/first" className="hover:text-blue-600 transition">
            Link One
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Link Two
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Link Three
          </Link>
        </div>

        {/* Centered logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src={LOGO}
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
