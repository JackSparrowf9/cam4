import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import MobileNav from "./mobileNav";
import Link from "next/link";

const Header = () => {
  const [openMoblieMenu, setOpenMobileMenu] = useState(false);

  return (
    <div className='header'>
      <div className='relative shadow w-full z-50'>
        <div className='w-full'>
          <div className='flex flex-row justify-between items-center bg-black text-white h-[40px] md:h-[51px] lg:h-[60px]'>
            {/* logo and header box: search box & login  */}
            <div className='flex flex-row justify-center md:justify-between w-full items-center text-white'>
              {/* Logo */}
              <div className='flex items-center py-2 px-4 lg:px-6 cursor-pointer'>
                <Link href='https://livesexcam4.com'>
                  <div
                    className='flex justify-center items-center'
                    id='logo'
                    alt='live sex cam4'>
                    {/* <img
                      className='lg:w-[220px] lg:h-[42px]'
                      alt='CamWhores.TV'
                      src='/logo.png'
                      width='150'
                      height='30'
                    /> */}
                    <a className='text-2xl font-bold text-red-600'>LIVESEX</a>
                    <a className='text-2xl font-bold text-white'>CAM</a>
                    <a className='text-2xl font-bold text-orange-600'>4</a>
                  </div>
                </Link>
              </div>

              {/* Sign up & login  */}
              <div className='hidden md:flex md:basis-1/4 lg:basis-1/4'>
                <div className='flex justify-end items-center w-full px-2 space-x-2 xl:space-x-3 xl:mr-2 xl:px-4 cursor-pointer'>
                  <span className='flex items-center border-2 border-[#ff2562] bg-[#ff2562] rounded-sm px-[2px] lg:px-4 py-1 uppercase text-[12px] xl:text-sm font-semibold hover:border-white'>
                    <Link href='/join'>
                      <a>Join for free</a>
                    </Link>
                  </span>
                  <span className='flex border-2 border-white rounded-sm px-[2px] lg:px-4 py-1 uppercase text-[13px] lg:text-sm font-semibold hover:border-[#ff2562]'>
                    <Link href='/login'>
                      <a>login</a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            {/* search icon for mobile  */}
            <div className='flex items-center md:hidden cursor-pointer px-2'>
              {!openMoblieMenu ? (
                <MenuIcon
                  className='h-6 w-6 text-white hover:text-red-700'
                  onClick={() => setOpenMobileMenu(!openMoblieMenu)}
                />
              ) : (
                <XIcon
                  className='h-6 w-6 text-white hover:text-red-700'
                  onClick={() => setOpenMobileMenu(!openMoblieMenu)}
                />
              )}
            </div>
          </div>
        </div>

        {/* mobile menu transition */}
        <Transition
          show={openMoblieMenu}
          enter='transition ease-out duration-700'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <MobileNav />
        </Transition>
      </div>
    </div>
  );
};

export default Header;
