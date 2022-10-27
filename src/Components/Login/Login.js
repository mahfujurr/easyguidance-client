import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Login = () => {
    const [errors, setError] = useState();
    const { googleLogin, loginUser, githubLogin } = useContext(AuthContext);
    const gProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSign = () => {
        googleLogin(gProvider)
            .then((result) => {
                const user = result.user;
                navigate(from, {replace: true});

            }).catch((error) => {
                const errorMessage = error.message;
                
            });
    }
    const handleGithubSign = () => {
        githubLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                navigate(from, {replace: true});

            }).catch((error) => {
                const errorMessage = error.message;
                
            });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(res => {
                const user = res.user;
                
                form.reset();
                navigate(from, {replace: true});
            })
            .catch((error) => {
                const errorMessage = error.message;
                if(errorMessage){
                    setError(error.message);
                }
            });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label mt-2">
                                    <h1 className="label-text-alt ">Don't have an account?</h1>
                                    <Link to={'/register'} className="label-text-alt link link-hover">Create account.</Link>
                                </label>
                            </div>
                            <div>
                                <p className='text-red-500'>
                                    {errors}
                                </p>
                            </div>
                            <div className="form-control ">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <button onClick={handleGoogleSign} className='btn'>Login with Google</button>
            <button onClick={handleGithubSign} className='btn'>Login with Github</button>
        </div>
    );
};

export default Login;