import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-full'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    );
};

export default Spinner;