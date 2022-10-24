import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const news = useLoaderData();

    return (
        <div>
            <h1>this is catagory {news.length}</h1>
        </div>
    );
};

export default Catagory;