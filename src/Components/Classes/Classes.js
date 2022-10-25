import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';
import './Classes.css'

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://easy-guidance-server.vercel.app/team-catagories')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='px-5 lg:px-24  flex flex-col lg:flex-row'>
            <div className='lg:h-screen lg:sticky lg:top-0 pt-12 flex flex-col text-white text-xl w-full lg:w-1/5 '>
                {
                    classes.map(cs=> <Link to={`/catagory/${cs.id}`} className='backdrop-blur-sm bg-black/80 hover:bg-rose-800 p-2  my-1 rounded-2xl text-center font-semibold'>{cs.name}</Link>)
                }
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:w-4/5  gap-10 pt-12'>
                {
                    classes.map(cs=>
                    <SingleClass
                    key={cs.id}
                    cs={cs}
                    ></SingleClass>
                    )
                }
            </div>
        </div>
    );
};

export default Classes;