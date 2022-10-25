import React from 'react';

const SingleClass = ({ cs }) => {
    const { id, name, thumbnail_url, thumbnail_details } = cs;
    console.log(cs)
    return (
        <div className=' text-white'>
            <div className=''>
                <h1 className='font-bold text-3xl text-center pb-3'>{name}</h1>
            </div>
        
            {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default SingleClass;