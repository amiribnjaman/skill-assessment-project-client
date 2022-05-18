import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-white text-black shadow-lg text-center">
            <div class="w-2/3 mx-auto hidden lg:flex justify-center">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to='/' className='text-xl font-semibold'>TODO App</Link></li>
                    <li><Link to='/' className='font-semibold'>Add a Task</Link></li>
                    <li><Link to='/' className='font-semibold'>My Task</Link></li>
                    <li><Link to='/login' className='font-semibold'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;