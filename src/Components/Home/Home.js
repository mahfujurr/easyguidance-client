import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Test from '../Test/Test';

const Home = () => {
    const [data, setData] = useState([]);
  useEffect (()=>{
  fetch('https://t20-worldcup-2022-server.vercel.app/team-catagories')
  .then(res => res.json())
  .then(data => setData(data))
  },[])
  const news = useLoaderData();
    return (
        <div className='flex pl-36 pt-16 pb-72 bg-gradient-to-r from-black'>
                <div className='w-1/2 mt-24 '>
                    <h1 className='text-5xl font-bold text-rose-600 py-2'>
                        TICKETS ON SALE!
                    </h1>
                    <p className='text-xl font-semibold text-white py-5'>
                        16 of the world's biggest teams are set to clash in the ICC Men's T20 World Cup 2022
                    </p>
                </div>
                <div className='w-1/2 flex'>
                    {
                        data.map(pd=>
                        <Test 
                        pd={pd}
                        key={pd.id}
                        ></Test>
                    )
                        
                    }
                </div>
        </div>
    );
};

export default Home;