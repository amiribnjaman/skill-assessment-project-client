import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleTask from './SingleTask';

const Home = () => {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    })

    return (
        <div class="overflow-x-auto max-h-80 overflow-y-auto w-10/12 mx-auto mt-8">
            <div className='flex justify-between mb-2'>
                <h2 className='  text-xl font-semibold'>All Tasks</h2>
                <button
                    onClick={() => navigate('/addtask')}
                    class="btn btn-active btn-accent text-white">Add A Task</button>
            </div>
            <table class="table table-compact w-full">
                <thead className='relative'>
                    <tr className='sticky top-0'>
                        <th>SL</th>
                        <th>Task Name</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => <SingleTask
                            key={index}
                            task={task}
                            index={index
                            } />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;