import React from 'react';
import coverPhoto from '../../images/coverPhoto.jpg'

const Home = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-[85%] mx-auto mt-11 divide-x-2'>
            <div>
                <img className='w-[90%] mx-auto border-8 border-yellow-500 hover:border-yellow-800' src={coverPhoto} alt="" />
            </div>
            <div className=''>
                <div className='text-center border-b-4 rounded-full shadow-xl'>
                    <h1 className='text-3xl font-bold text-rose-600'>---Trust Yourself---</h1>
                    <h1 className='text-xl font-bold text-stone-700 mb-2'>You Know More Than You Think You Do</h1>
                </div>
                <div className='text-center mt-5 ml-3'>
                    <p className='text-gray-500 mb-5'>Unlock your dream with <span className='text-blue-700'>Quizzes Laboratory</span></p>
                    <p>It is an online quiz website. This website provide quizzes only for 'IT' students. There are several topics, you may choose any topic and also provide your performance instantly.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;