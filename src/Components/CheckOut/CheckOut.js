import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const info = useLoaderData();
    console.log(info);
    return (
        <div className='flex flex-col items-center justify-center mt-14'>
            <h1 className=' text-center font-semibold text-2xl p-5 border border-black rounded w-1/2'>
            Proceed to purchase  <span className='text-red-500'>{info.name}</span>.
            </h1>
            <button  className=' px-5 py-3 mt-5 rounded-xl font-semibold border text-white border-black bg-black hover:bg-white hover:text-black'>Confirm</button>
        </div>
    );
};

export default CheckOut;