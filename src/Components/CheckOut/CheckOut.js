import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const info = useLoaderData();
    console.log(info);
    return (
        <div>
            this is checkout{info.name}
        </div>
    );
};

export default CheckOut;