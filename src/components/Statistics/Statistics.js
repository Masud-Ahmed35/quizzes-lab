import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicContext } from '../../layouts/Root';

const Statistics = () => {
    const data = useContext(TopicContext);
    const statistics = data.data;

    return (
        <div className=''>
            <h1 className='text-2xl font-bold mb-7 ml-20'>Bar Chart for All Question</h1>

            <BarChart width={400} height={400} data={statistics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>

        </div >
    );
};

export default Statistics;