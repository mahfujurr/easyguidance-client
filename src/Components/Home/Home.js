import React from 'react';
import { Link} from 'react-router-dom';


const Home = () => {
    

    return (
        <div className='flex px-24 pt-16 pb-72 bg-gradient-to-r from-black'>
            <div className='flex mt-12 justify-center items-center'>
                <div className='w-1/2  '>
                    <h1 className='text-5xl font-bold text-rose-600 py-2'>
                        Easy Guidance For Physics!
                    </h1>
                    <p className='text-xl font-semibold text-white py-5'>
                        Studying physics is a fascinating journey where the human mind explores how the universe works.
                        Unfortunately, this is not what most high school students feel… Often, students perceive Physics like a difficult topic, sometimes incomprehensible. Nothing could be further from the truth.
                    </p>
                    <button className='p-4 bg-rose-900 rounded-lg hover:bg-rose-800 text-xl font-semibold text-rose-50'>
                        <Link to={'/classes'}>Explore Classes</Link>
                    </button>
                </div>
                <div className='w-1/2 px-10 '>
                    <img className='rounded-lg' src="https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                </div>
            </div>
            {/* <div className=' flex'>
                {
                    data.map(pd =>
                        <Test
                            pd={pd}
                            key={pd.id}
                        ></Test>
                    )

                }
            </div> */}
        </div>
    );
};

export default Home;