import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-[85vh] items-center justify-center'>
            {/* Category Loading */}
            <span className="loading loading-spinner text-success"></span>
        </div>
    );
};

export default Loading;