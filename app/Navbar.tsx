import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className=' bg-gradient-to-br from-primary to-primary/100  sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
               
                <a href='/'>
                  <img
                    src="/logo.webp"
                    alt="Valorant Agents"
                    className='w-10 h-10 flashingImage'
                  />
                </a>
              </div>
            </div>

            <div className='flex'>
                <a 
                href='/'
                className='text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                Home
              </a>
             
              <a
                href='/news'
                className='text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                News
              </a>
              <a
                href='/more'
                className='text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                More
              </a>
              <a
                href='/Footer'
                className='text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                About
              </a>
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

