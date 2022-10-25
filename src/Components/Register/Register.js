import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Register = () => {
    const { createUser, updateCurrentProfile } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photourl.value;

        //console.log(email, password, name, photoURL);

        createUser(email, password)
            .then(res => {
                const user = res.user;
                form.reset();
                handleUserInfoUpdate(name, photoURL);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

    const handleUserInfoUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL

        }
        updateCurrentProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Name" className="input input-bordered" />

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
                                <label className="label">
                                    <Link to={'/login'} className="label-text-alt link link-hover">Have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;