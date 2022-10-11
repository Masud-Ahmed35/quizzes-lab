import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const TopicContext = createContext({});
export const QuestionContext = createContext({});

const Root = () => {
    const data = useLoaderData();
    return (
        <TopicContext.Provider value={data}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </TopicContext.Provider>
    );
};

export default Root;