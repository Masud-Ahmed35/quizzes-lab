import React from 'react';

const OptionItem = ({ option, handleCorrectAnswer, selectedAnswer, id }) => {
    return (
        <div>
            <button onClick={() => handleCorrectAnswer(option)} className={`w-full`}>
                <p className='border-2 py-3'><input type="radio" name={`radio-${id}`} className="radio radio-secondary w-4 h-4" /> {option}</p>
            </button>
        </div>
    );
};

export default OptionItem;