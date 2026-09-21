import { use, useState } from 'react';
import TechCards from './TechCards';
import SelectedCard from './SelectedCard';
import type { Technology } from '../Types/type';


interface TechProps {
    technologies: Promise<Technology[]>;
}

const AllTech = ({ technologies }: TechProps) => {
    const dataTech = use(technologies)
    const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
    const handleAddToStack = (tech: Technology) => {

        if (!selectedStack.some((item) => item.id === tech.id)) {
            setSelectedStack([...selectedStack, tech]);
        }
    };
    const handleRemove = (id: number | string) => {
        setSelectedStack(selectedStack.filter((item) => item.id !== id));
    };
    const handleRemoveAll = () => {
        setSelectedStack([]);
    };
    return (
        <div className='grid grid-cols-12'>
            <div className='grid grid-cols-3 mt-[30px] gap-4 col-span-9'>

                {
                    dataTech.map((technology) => {
                        const isAdded = selectedStack.some((item) => item.id === technology.id);
                        return (
                            <TechCards technology={technology} onAddToStack={() => handleAddToStack(technology)} isAdded={isAdded}></TechCards>
                        )



                    })
                }

            </div>
            <div className='col-span-3 mt-[30px] ml-4'>
                <SelectedCard selectedStack={selectedStack} onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}></SelectedCard>
            </div>
        </div>
    );
};

export default AllTech;