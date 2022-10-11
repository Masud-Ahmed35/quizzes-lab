import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const data = useLoaderData();
    const quizzes = data.data.questions

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-7'>Quiz on The Topic of <span className='text-yellow-700'>{data.data.name}</span></h1>
            <p className='text-lg text-center font-bold mt-2'>Total Question: <span className='text-yellow-600'>{data.data.total}</span></p>
            <div>
                {
                    quizzes.map((quiz, index) => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        index={index}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizzes;