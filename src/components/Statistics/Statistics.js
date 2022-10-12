import React, { useContext } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TopicContext } from '../../layouts/Root';

const Statistics = () => {
    const data = useContext(TopicContext);
    const statistics = data.data;

    return (
        <div className='lg:w-1/2 mx-auto'>

            <h1 className='text-2xl text-center mt-5 font-bold mb-7 ml-20'>Bar Chart for All Question</h1>
            <ResponsiveContainer width="97%" height={400}>
                <BarChart data={statistics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>

            <h1 className='text-2xl text-center mt-5 font-bold mb-7 ml-20'>Area Chart for All Question</h1>
            <ResponsiveContainer width="97%" height={300}>
                <AreaChart data={statistics}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>

            <h1 className='text-2xl text-center mt-5 font-bold ml-20'>Pie Chart for All Question</h1>
            <ResponsiveContainer width="97%" height={300}>
                <PieChart>
                    <Pie data={statistics} dataKey="total" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={statistics} dataKey="total" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Statistics;