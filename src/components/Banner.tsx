// import React from 'react';
import bannerImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <div>
                <h1 className='text-[60px] font-bold leading-[60px]'>Build Your Ideal <br /> <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development  Stack</span></h1>

                <p className='my-[25px] text-[#475569]'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your<br />
                    next project.</p>
                <div className='flex gap-3 mt-[50px]'>
                    <button className='border-none bg-amber-500 py-[5px] px-[7px]  rounded-[6px] text-white bg-gradient-to-r from-[#F97316] to-[#EC4899] font-semibold'>Explore Technologies</button>
                    <button className='border border-gray-400 py-[5px] px-[30px]  rounded-[6px] text-[#475569] font-semibold'>Learn More</button>
                </div>
            </div>
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;