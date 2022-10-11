import React from 'react';

const OptionItem = ({ option, handleCorrectAnswer, selectedAnswer }) => {
    return (
        <div className=''>
            <button onClick={() => handleCorrectAnswer(option)} className={`w-full ${selectedAnswer ? 'bg-green-400' : 'bg-red-500'}`}><p className='border-2 py-3'>{option}</p></button>
        </div>
    );
};

export default OptionItem;