import React from 'react';
import { useLoaderData } from 'react-router-dom';

import InsideCatagory from './InsideCatagory';

const Catagory = () => {
    const tutorial = useLoaderData();
    //console.log(tutorial)

    return (
        <div className='p-5 mt-5  mx-48'>
            
            
            {
                tutorial.map(tl =>
                    <InsideCatagory
                    key={tl._id}
                    tl={tl}
                    ></InsideCatagory>
                    )
            }
            </div>
    );
};

export default Catagory;