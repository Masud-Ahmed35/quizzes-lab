import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
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
                        setCorrect={setCorrect}
                        setWrong={setWrong}
                    ></Quiz>)
                }
            </div>
            <div className='flex justify-center w-1/2 mx-auto'>
                <label htmlFor="my-modal-3" className="btn modal-button btn-outline btn-info w-full">See Your Result</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-2xl text-amber-600 font-bold text-center py-1 shadow-lg pb-1">Congratulations!!!</h3>
                        <p className="pt-4 text-lg text-green-600 text-center font-semibold">Correct Answer is: <span className='text-xl'>{correct}</span></p>
                        <p className="pt-4 text-lg text-red-600 text-center font-semibold">Wrong Answer is: <span className='text-xl'>{wrong}</span></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Quizzes;