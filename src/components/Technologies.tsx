
import AllTech from './AllTech';
import type { Technology } from '../Types/type';


interface TechnologiesProps {
    techPromise: Promise<Technology[]>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-[36px]'>Explore The <span className='bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h1>
            <p className='text-[#475569]'>Pick one technology per category to build your ideal stack.</p>



            <AllTech technologies={techPromise}></AllTech>

        </div>
    );
};

export default Technologies;