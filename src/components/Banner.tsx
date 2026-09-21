// import React from 'react';
import bannerImg from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <div>
                <h1 className='text-[60px] font-bold leading-15'>Build Your Ideal <br /> <span className='bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development  Stack</span></h1>

                <p className='my-6.25 text-[#475569]'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your<br />
                    next project.</p>
                <div className='flex gap-3 mt-12.5'>
                    <button className='border-none bg-amber-500 py-1.25 px-1.75  rounded-md text-white bg-linear-to-r from-[#F97316] to-[#EC4899] font-semibold'>Explore Technologies</button>
                    <button className='border border-gray-400 py-1.25 px-7.5  rounded-md text-[#475569] font-semibold'>Learn More</button>
                </div>
            </div>
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;