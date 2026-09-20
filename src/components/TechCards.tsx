import React from 'react';

const TechCards = ({ technology, onAddToStack, isAdded }) => {
    return (
        <div className="w-full max-w-[340px] bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between ">
            <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                    <img src={technology.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50/80 border border-blue-100 px-3 py-1 rounded-full">
                    {technology.badge}
                </span>
            </div>


            <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{technology.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {technology.description}
                </p>
            </div>


            <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-4 mb-5 border-t border-gray-100">
                <span className="bg-slate-100/80 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                    {technology.category}
                </span>
                <span>{technology.difficulty}</span>
                <div className="flex items-center gap-1">
                    <span className="text-amber-400">★</span>
                    <span className="font-semibold text-slate-800">{technology.rating}</span>
                </div>
            </div>


            <button
                onClick={onAddToStack}
                disabled={isAdded}
                className={`w-full py-3 font-medium text-sm rounded-xl transition-colors ${isAdded
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-[#0D111D] hover:bg-slate-800 text-white'
                    }`}
            >
                {isAdded ? 'Added to Stack' : 'Add to Stack'}
            </button>
        </div>
    );
};

export default TechCards;