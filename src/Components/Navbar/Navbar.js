import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error.message)
            });
    }
    return (
        <div className=' sticky top-0 w-full'>
            <div className='backdrop-blur-sm bg-black/80  flex w-full justify-between px-24 items-center  font-semibold text-rose-50 py-1'>
                <div className='flex justify-center items-center'>
                    <img className='w-10' src="./eg2.png" alt="" />
                    <Link to={'/'} className='text-white font-bold text-2xl mx-2'>
                        Easy Guidance
                    </Link>
                </div>
                <div>
                    <Link className='mx-5 hover:text-rose-500' to={'/'}>Home</Link>
                    <Link className='mx-5 hover:text-rose-500' to={'/classes'}>Classes</Link>
                    <Link className='mx-5 hover:text-rose-500' to={'/about'}>About</Link>
                    <Link className='mx-5 hover:text-rose-500' to={'/faq'}>Faq</Link>
                    <Link className='mx-5 hover:text-rose-500' to={'/blog'}>Blog</Link>
                </div>

                <div className='flex items-center justify-center'>
                    <div className='mx-4 '>
                        <label className="swap swap-rotate">
                            <input type="checkbox" />
                            <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                    {user?.uid ?
                        <div className='flex justify-center items-center'>
                            {/* <h1>
                                <img className='rounded-full w-8 mx-5' src={user.photoURL} alt="" />
                            </h1> */}
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <button className="">
                                    <div className="avatar online mx-5">
                                        <div className="w-8 rounded-full">
                                            <img src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <button className='mx-2 p-2 px-5 rounded-lg bg-rose-800 hover:bg-rose-900' onClick={handleLogout}  >
                                Logout
                            </button>
                        </div> :
                        <div>
                            <Link className='mx-2 p-2 px-5 rounded-lg bg-rose-800 hover:bg-rose-900' to={'/login'}>Login</Link>
                            <Link className='mx-5 p-2 px-5 rounded-lg bg-rose-800 hover:bg-rose-900' to={'/register'}>Register</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;