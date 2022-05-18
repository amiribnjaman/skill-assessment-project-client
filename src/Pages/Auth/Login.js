import React from 'react';

const Login = () => {
    return (
        <div className='w-1/3 mx-auto flex items-center mt-8 justify-center'>
            <div class="card w-96 bg-base-100 shadow">
                <div className="card-body border-0 pt-4">
                    <h3 className='text-center font-semibold text-xl uppercase'>Login</h3>
                    <form action="" className='w-full grid grid-cols-1 gap-2'>
                        <input type="email" name='email' placeholder="Your Email" class="input input-bordered input-md w-full max-w-xs" />
                        <input type="password" name='password' placeholder="Your Password" class="input input-bordered input-md w-full max-w-xs" />
                        <input type="submit" value="Login" class=" uppercase text-white rounded-lg bg-accent  input-md w-full max-w-xs" />
                        <button class="btn btn-outline">Signin with Google</button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;