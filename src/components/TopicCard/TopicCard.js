import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const TopicCard = ({ topic }) => {
    const { id, logo, name, total } = topic;

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${id}`)
    }

    return (
        <div className="p-6 rounded-md shadow-md bg-slate-200 lg:grid grid-cols-2">
            <div className=''>
                <img src={logo} alt="" className="rounded-md border-2 border-purple-500 hover:border-purple-800 hover:border-4" />
            </div>
            <div className="ml-5 lg:relative mt-7">
                <h2 className="text-xl font-semibold tracking-wide lg:mb-3">Topic Name: <span className='text-stone-600'>{name}</span></h2>
                {/* <p>Description: It is a dummy description for looking more cool and better.</p> */}
                <p className="mb-3 lg:mt-5 text-lg">Total Question: <span className='text-orange-600 font-bold'>{total}</span></p>
                <div className='lg:absolute bottom-1 w-full'>
                    <button onClick={handleNavigate} type="button" className="flex items-center justify-center w-full p-3 font-semibold btn btn-outline btn-success">Start Quiz <ArrowRightIcon className='h-5 w-5 ml-2'></ArrowRightIcon></button>

                </div>
            </div>
        </div>
    );
};

export default TopicCard;