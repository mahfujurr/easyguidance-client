import React from 'react';
import { Link } from 'react-router-dom';

const SingleClass = ({ cs }) => {
    const { id, name, thumbnail_url, thumbnail_details } = cs;
    console.log(cs)
    return (
        <div className=' text-black bg-white/90 pb-0  rounded-xl lg:ml-10 hover:shadow-rose-400 shadow-xl shadow-slate-400'>
            <div className=''>
                <img className='rounded-t-xl object-cover h-64 w-full	 ' src={thumbnail_url} alt="" />
                <div className='p-5 h-full flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-3xl text-center pb-3'>{name}</h1>
                    <p>{thumbnail_details.length > 150 ? thumbnail_details.slice(0,300)+ '...' : thumbnail_details}</p>
                    <Link to={`/catagory/${cs.id}`}><button className='btn mt-5 bg-rose-900 hover:bg-rose-800'>See Details</button></Link>
                </div>
            </div>
            {/* ${card.details.length > 150 ? card.details.slice(0,300) +'...' : 'No details Found'} */}


        </div>
    );
};

export default SingleClass;