import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div class="overflow-x-auto overflow-y-auto w-10/12 mx-auto mt-8">
            <div className='flex justify-between mb-2'>
                <h2 className='  text-xl font-semibold'>All Tasks</h2>
                <button
                    onClick={() => navigate('/addtask')}
                    class="btn btn-active btn-accent text-white">Add A Task</button>
            </div>
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Task Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>
                            <button class="btn btn-ghost text-accent">Complete</button>
                            <button class="btn btn-ghost text-red-600">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>
                            <button class="btn btn-ghost text-accent">Complete</button>
                            <button class="btn btn-ghost text-red-600">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Home;