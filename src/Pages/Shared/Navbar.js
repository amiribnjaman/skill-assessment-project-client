import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-white text-black shadow-lg text-center">
            <div class="w-2/3 mx-auto hidden lg:flex justify-center">
                <ul class="menu menu-horizontal p-0">
                    <li><a className='text-xl font-semibold'>TODO App</a></li>
                    <li><a className='font-semibold'>Add a Task</a></li>
                    <li><a className='font-semibold'>My Task</a></li>
                    <li><a className='font-semibold'>Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;