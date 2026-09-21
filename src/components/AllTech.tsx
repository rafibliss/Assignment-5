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
        <div className='grid grid-cols-12'>
            <div className='grid grid-cols-3 mt-7.5 gap-4 col-span-9'>

                {
                    dataTech.map((technology) => {
                        const isAdded = selectedStack.some((item) => item.id === technology.id);
                        return (
                            <TechCards technology={technology} onAddToStack={() => handleAddToStack(technology)} isAdded={isAdded}></TechCards>
                        )



                    })
                }

            </div>
            <div className='col-span-3 mt-7.5 ml-4'>
                <SelectedCard selectedStack={selectedStack} onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}></SelectedCard>
            </div>
        </div>
    );
};

export default AllTech;