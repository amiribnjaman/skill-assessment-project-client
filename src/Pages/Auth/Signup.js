import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
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

    return (
        <div className='w-1/3 mx-auto flex items-center mt-3 justify-center'>
            <div class="card w-96 bg-base-100 shadow">
                <div className="card-body border-0 pt-3 pb-4">
                    <h3 className='text-center font-semibold text-xl uppercase'>Signup</h3>
                    <form
                        onSubmit={handleSignupForm}
                        action="" className='w-full grid grid-cols-1 gap-2'>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered input-md w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered input-md w-full max-w-xs" required />
                        <input type="password" name='password' placeholder="Your Passsword" class="input input-bordered input-md w-full max-w-xs" required />
                        <input type="submit" value="Signup" class=" uppercase text-white rounded-lg bg-accent cursor-pointer input-md w-full max-w-xs" />
                        <p><small>Already Have an account? <Link to='/login' className='underline text-accent'>Login</Link></small></p>
                        <div class="divider m-0 text-sm">OR</div>

                    </form>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Signin with Google</button>
                </div>

            </div>
        </div>
    );
};

export default Signup;