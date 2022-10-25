import React from 'react';

const SingleClass = ({ cs }) => {
    const { id, name, thumbnail_url, thumbnail_details } = cs;
    console.log(cs)
    return (
        <div className=' text-white'>
            <div className=''>
                <h1 className='font-bold text-3xl text-center pb-3'>{name}</h1>
                <p></p>
            </div>
        
            

        </div>
    );
};

export default SingleClass;