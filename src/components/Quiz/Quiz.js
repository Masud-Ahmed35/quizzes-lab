import { EyeIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import OptionItem from '../OptionItem/OptionItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Quiz = ({ quiz, index }) => {
    const { id, correctAnswer, question, options } = quiz;
    // console.log(quiz);
    const questionWithoutTag = question.replace(/(<([^>]+)>)/ig, '');

    // const [selectedAnswer, setSelectedAnswer] = useState();
    const handleCorrectAnswer = option => {
        if (option === correctAnswer) {
            // setSelectedAnswer(true);
            console.log('Correct Answer');
            toast.success('Your Answer is Correct', { autoClose: 1000 })
        }
        else {
            // setSelectedAnswer(false);
            console.log('Wrong Answer');
            toast.error('Your Answer is Wrong', { autoClose: 1000 })
        }
    }

    return (
        <div className='m-10'>
            <div className=''>
                <h2 className='text-center text-lg font-bold mb-3'>Question: {index + 1} *{questionWithoutTag}</h2>
                <div className='flex justify-center'>
                    <label title='Click On To See The Correct Answer' htmlFor={`my-modal-${id}`} className="mb-5"><EyeIcon className="h-6 w-6 text-blue-500"></EyeIcon></label>
                </div>
                <div>
                    <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor={`my-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold text-center">Question: {index + 1}</h3>
                            <p className="py-4 text-center">Correct Answer is: <span className='font-bold text-lg'>{correctAnswer}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 lg:w-[60%] mx-auto text-center'>
                {
                    options.map((option, idx) => <OptionItem
                        key={idx}
                        option={option}
                        handleCorrectAnswer={handleCorrectAnswer}
                    // selectedAnswer={selectedAnswer}
                    ></OptionItem>)
                }
            </div>
        </div>
    );
};

export default Quiz;