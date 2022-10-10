import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';

export const TopicContext = createContext({});

const Root = () => {
    const data = useLoaderData();
    return (
        <TopicContext.Provider value={data}>
            <Header></Header>
            <Outlet></Outlet>
        </TopicContext.Provider>
    );
};

export default Root;