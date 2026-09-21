// import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import type { Technology } from '../Types/type';

interface SelectedCardProps {
    selectedStack: Technology[];
    onRemove: (id: number | string) => void;
    onRemoveAll: () => void;
}


const SelectedCard = ({ selectedStack, onRemove, onRemoveAll }: SelectedCardProps) => {
    return (
        <div className="w-full bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between min-h-95">
            <div>

                <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
                <p className="text-xs text-slate-400 font-medium mt-1 mb-5">
                    {selectedStack.length} {selectedStack.length === 1 ? 'Technology' : 'Technology'} Selected
                </p>


                <div className="space-y-3">
                    {selectedStack.length === 0 ? (
                        <p className="text-xs text-slate-400 italic border border-gray-400 border-dashed rounded-2xl   p-20">Your Stack is empty.</p>
                    ) : (
                        selectedStack.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border border-slate-100/80 rounded-2xl p-3 bg-white"
                            >

                                <div className="flex items-center gap-3">
                                    <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-900 leading-tight">
                                            {item.name}
                                        </span>
                                        <span className="text-[10px] text-slate-400 font-medium">
                                            {item.category || 'Frontend'}
                                        </span>
                                    </div>
                                </div>


                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                                ><IoCloseSharp />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>


            {selectedStack.length > 0 && (
                <button
                    onClick={onRemoveAll}
                    className="w-full py-2.5 mt-6 border border-red-200 text-red-500 font-semibold text-xs rounded-xl hover:bg-red-50/50 transition-colors"
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default SelectedCard;