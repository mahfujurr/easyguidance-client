import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const InsideCatagory = ({ tl }) => {
    return (
        <div className='border border-black rounded-2xl p-10'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-3xl'>{tl.name}</h1>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Download as Pdf</button>}
                </Pdf>
            </div>

            <div ref={ref}>
                <div key={tl._id} className='flex flex-col lg:flex-row justify-center items-center '>

                    <img className='w-1/2 rounded-2xl my-5' src={tl.photoURL} alt="" />
                    <div className='lg:pl-10'>
                        <h1 className='font-bold text-2xl py-5'>Project Description</h1>
                        <p className='font-semibold mb-5'>{tl.details}</p>


                    </div>

                </div>
                <p className='font-semibold mb-5'>{tl.details}</p>
                <p className='font-semibold mb-5'>{tl.details}</p>
                <p className='font-semibold mb-5'>{tl.details}</p>
                <Link to={`/tutorial/${tl._id}`}>
                    <button className='btn bg-rose-900 hover:bg-rose-800'>Get premium access
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default InsideCatagory;