import { use, useState } from 'react';
import TechCards from './TechCards';
import SelectedCard from './SelectedCard';
import type { Technology } from '../Types/type';
import { toast } from 'react-toastify';


interface TechProps {
    technologies: Promise<Technology[]>;
}

const AllTech = ({ technologies }: TechProps) => {
    const dataTech = use(technologies)
    const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
    const handleAddToStack = (tech: Technology) => {

        const isDuplicate = selectedStack.some((item) => item.id === tech.id);

        if (isDuplicate) {

            toast.warning(`${tech.name} is already in your stack!`);
        } else {

            setSelectedStack([...selectedStack, tech]);
            toast.success(`Added ${tech.name} to your stack!`);
        }
    };
    const handleRemove = (id: number | string) => {
        setSelectedStack(selectedStack.filter((item) => item.id !== id));
    };
    const handleRemoveAll = () => {
        setSelectedStack([]);
        toast.error('Cleared all technologies from your stack!');
    };
    return (
        <div className='flex flex-col lg:grid lg:grid-cols-12 gap-6 px-4 lg:px-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7.5 gap-4 lg:col-span-9'>

                {
                    dataTech.map((technology) => {
                        const isAdded = selectedStack.some((item) => item.id === technology.id);
                        return (
                            <TechCards technology={technology} onAddToStack={() => handleAddToStack(technology)} isAdded={isAdded}></TechCards>
                        )



                    })
                }

            </div>
            <div className='lg:col-span-3 mt-7.5 lg:ml-4 w-full'>
                <SelectedCard selectedStack={selectedStack} onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}></SelectedCard>
            </div>
        </div>
    );
};

export default AllTech;