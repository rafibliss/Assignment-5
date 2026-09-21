// import React from 'react';
import { HiMenu } from 'react-icons/hi';
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='flex justify-between items-center py-3.25 container mx-auto px-4'>


                <div className='flex items-center gap-6'>
                    <button className='text-2xl text-gray-700 md:hidden'>
                        <HiMenu />
                    </button>
                    <ul className='hidden md:flex justify-between gap-6 items-center font-semibold'>
                        <li className='text-[#DB2777]'>Home</li>
                        <li className='text-gray-700'>Technologies</li>
                        <li className='text-gray-700'>Projects</li>
                        <li className='text-gray-700'>About</li>
                        <li className='text-gray-700'>Contact</li>
                    </ul>
                </div>


                <img src={logo} alt="Dev Stack Logo" className='h-7 object-contain' />


                <div className='flex justify-between gap-4 items-center font-semibold'>
                    <button className='text-gray-700 hidden sm:inline'>Sign In</button>
                    <button className='border bg-[#DB2777] text-white rounded-full py-1.25 px-3'>
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Nav;