import React, { useContext } from 'react';
import coverPhoto from '../../images/coverPhoto.jpg'
import { TopicContext } from '../../layouts/Root';
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {
    const data = useContext(TopicContext);
    const topics = data.data;
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-[85%] mx-auto mt-11 lg:divide-x-2'>
                <div>
                    <img className='w-[90%] mx-auto border-8 border-yellow-500 hover:border-yellow-800' src={coverPhoto} alt="" />
                </div>
                <div className='mt-7 lg:mt-0'>
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
            <div className='mt-16'>
                <h1 className='text-3xl font-bold text-center mb-8 shadow-xl pb-5 rounded-xl'>Try Our Popular Topics</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto gap-7'>
                    {
                        topics.map(topic => <TopicCard
                            key={topic.id}
                            topic={topic}
                        ></TopicCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;