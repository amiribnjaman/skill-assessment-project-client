import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth)

    return (
        <div class="navbar bg-white text-black shadow-lg text-center">
            <div class="w-2/3 mx-auto hidden lg:flex justify-center">
                <ul class="menu menu-horizontal p-0 flex items-center">
                    <Link to='/' className='text-xl font-semibold'>TODO App</Link>
                    {user ?
                        <>
                            <li><Link to='/' className='font-semibold'>Home</Link></li>
                            <li><Link to='/addtask' className='font-semibold'>Add a Task</Link></li>

                            <li> <button
                                onClick={() => signOut(auth)}
                                className='font-semibold'>Logout</button></li></>
                        : <li><Link to='/login' className='font-semibold'>Login</Link></li>

                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;