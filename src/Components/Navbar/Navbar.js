import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-black'>
            <div className='flex w-full justify-center text-2xl font-semibold text-rose-50 py-3'>
                <Link className='mx-5 hover:text-rose-500' to={'/'}>Home</Link>
                <Link className='mx-5 hover:text-rose-500' to={'/about'}>About</Link>
                <Link className='mx-5 hover:text-rose-500' to={'/login'}>Login</Link>
                <Link className='mx-5 hover:text-rose-500' to={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;