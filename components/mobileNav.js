import Link from "next/link";
import React, { useState } from "react";

const MobileNav = () => {
  return (
    <div className='absolute block w-full bg-stone-900 md:hidden z-50 text-white'>
      <div className='flex flex-col justify-center items-center space-y-4 py-6 my-4 cursor-pointer uppercase font-semibold'>
        <span className='flex justify-center items-center w-full hover:border-l-4 hover:border-[#ff2562] hover:bg-stone-600'>
          <Link href='/'>
            <a className='px-20 py-4'>Home</a>
          </Link>
        </span>
        <div className='flex flex-row justify-center w-full items-center space-x-2'>
          <span className='flex justify-center items-center bg-[#ff2562] border-[#ff2562] border-2 rounded-md  hover:border-2 hover:border-white '>
            <Link href='/join'>
              <a className='px-4 py-2'>join for free</a>
            </Link>
          </span>
          <span className='flex justify-center items-center border-white border-2 rounded-md hover:border-[#ff2562]'>
            <Link href='/login'>
              <a className='px-4 py-2'>login</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
