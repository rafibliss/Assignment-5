import { HiMenu } from 'react-icons/hi';
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div className='flex justify-between items-center py-3.25 container mx-auto px-4'>


                <div className='flex items-center gap-3'>
                    <button className='text-2xl text-gray-700 md:hidden flex items-center justify-center p-1'>
                        <HiMenu />
                    </button>
                    <img src={logo} alt="Dev Stack Logo" className='h-7 object-contain' />
                </div>


                <ul className='hidden md:flex items-center gap-6 font-semibold'>
                    <li className='text-[#DB2777] cursor-pointer'>Home</li>
                    <li className='text-gray-700 cursor-pointer hover:text-[#DB2777]'>Technologies</li>
                    <li className='text-gray-700 cursor-pointer hover:text-[#DB2777]'>Projects</li>
                    <li className='text-gray-700 cursor-pointer hover:text-[#DB2777]'>About</li>
                    <li className='text-gray-700 cursor-pointer hover:text-[#DB2777]'>Contact</li>
                </ul>


                <div className='flex items-center gap-4 font-semibold'>
                    <button className='text-gray-700 hidden sm:inline hover:text-[#DB2777]'>Sign In</button>
                    <button className='border bg-[#DB2777] text-white rounded-full py-1.25 px-4 hover:bg-[#be185d] transition-colors'>
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Nav;