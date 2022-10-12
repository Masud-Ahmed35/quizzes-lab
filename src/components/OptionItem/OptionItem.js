import React from 'react';

const OptionItem = ({ option, handleCorrectAnswer, selectedAnswer, id }) => {
    return (
        <div>
            <div className={`border-2 py-2 `}>
                <input onClick={() => handleCorrectAnswer(option)} type="radio" name={`radio-${id}`} className="radio radio-secondary w-4 h-4" />
                <span className='ml-5'>{option}</span>
            </div>
        </div>
    );
};

export default OptionItem;



// --------------Comment For Myself---------------------

/* <button onClick={() => handleCorrectAnswer(option)} className={`w-full`}>
    <p className='border-2 py-3'><input type="radio" name={`radio-${id}`} className="radio radio-secondary w-4 h-4" /> {option}</p>
</button> */