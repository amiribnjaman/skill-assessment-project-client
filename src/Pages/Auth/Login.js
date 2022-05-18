import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    let location = useLocation();
    let navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return <p>Loading</p>
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
    }

    return (
        <div className='w-1/3 mx-auto flex items-center mt-4 justify-center'>
            <div className="card w-96 bg-base-100 shadow">
                <div className="card-body border-0 pt-4">
                    <h3 className='text-center font-semibold text-xl uppercase'>Login</h3>
                    <p className='text-center text-red-500 m-0'><small>Please try to Signin in with Google</small></p>
                    <form action="" className='w-full grid grid-cols-1 gap-2'>
                        <input disabled type="email" name='email' placeholder="Your Email" className="input input-bordered input-md w-full max-w-xs" />
                        <input disabled type="password" name='password' placeholder="Your Password" className="input input-bordered input-md w-full max-w-xs" />
                        <input disabled type="submit" value="Login" className=" cursor-not-allowed uppercase text-white rounded-lg bg-accent  input-md w-full max-w-xs" />
                        <p><small>New to Todo App? <Link to='/signup' className='underline text-accent'>Signup</Link></small></p>
                        <div className="divider m-0 text-sm">OR</div>


                    </form>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline text-sm">Signin with Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;