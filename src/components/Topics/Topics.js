import React, { useContext } from 'react';
import { TopicContext } from '../../layouts/Root';
import TopicCard from '../TopicCard/TopicCard';

const Topics = () => {
    const data = useContext(TopicContext);
    const topics = data.data;

    return (
        <div className='mt-16'>
            <h1 className='text-3xl font-bold text-center mb-8 shadow-xl pb-5 rounded-xl'>Select Your Topic</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[80%] mx-auto gap-7'>
                {
                    topics.map(topic => <TopicCard
                        key={topic.id}
                        topic={topic}
                    ></TopicCard>)
                }
            </div>
        </div>
    );
};

export default Topics;