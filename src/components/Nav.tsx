// import React from 'react';
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='flex justify-between items-center py-3.25 container mx-auto '>
                <img src={logo} alt="" />

                <ul className='flex justify-between gap-6 items-center font-semibold'>
                    <li className='text-[#DB2777]'>Home</li>
                    <li className=' text-gray-700'>Technologies</li>
                    <li className=' text-gray-700'>Projects</li>
                    <li className=' text-gray-700'>About</li>
                    <li className=' text-gray-700'>Contact</li>
                </ul>
                <div className='flex justify-between gap-4 items-center font-semibold '>
                    <button className='text-gray-700'>Sign In</button>
                    <button className='border bg-[#DB2777] text-white rounded-full py-1.25 px-3'>Sign Up</button>
                </div >

            </div>
        </div>
    );
};

export default Nav;