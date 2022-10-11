import React from 'react';

const OptionItem = ({ option }) => {
    return (
        <div className=''>
            <button className='w-full'><p className='border-2 py-3'>{option}</p></button>
        </div>
    );
};

export default OptionItem;