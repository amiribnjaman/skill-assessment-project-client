import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    let location = useLocation();
    let navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignupForm = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        if (name && email && password) {
            createUserWithEmailAndPassword(email, password)
        }
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
        <div className='w-1/3 mx-auto flex items-center mt-3 justify-center'>
            <div className="card w-96 bg-base-100 shadow">
                <div className="card-body border-0 pt-3 pb-4">
                    <h3 className='text-center font-semibold text-xl uppercase'>Signup</h3>
                    <p className='text-center m-0 text-red-500'><small>Please try to Signin in with Google.</small></p>
                    <form
                        onSubmit={handleSignupForm}
                        action="" className='w-full grid grid-cols-1 gap-1'>
                        <input disabled type="text" name='name' placeholder="Your Name" className="input input-bordered input-md w-full max-w-xs" required />
                        <input disabled type="email" name='email' placeholder="Your Email" className="input input-bordered input-md w-full max-w-xs" required />
                        <input disabled type="password" name='password' placeholder="Your Passsword" className="input input-bordered input-md w-full max-w-xs" required />
                        <input disabled type="submit" value="Signup" className=" uppercase text-white rounded-lg bg-accent cursor-not-allowed input-md w-full max-w-xs" />
                        <p><small>Already Have an account? <Link to='/login' className='underline text-accent'>Login</Link></small></p>
                        <div className="divider m-0 text-sm">OR</div>

                    </form>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Signin with Google</button>
                </div>

            </div>
        </div>
    );
};

export default Signup;