import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleTask from './SingleTask';

const Home = () => {
    const [tasks, setTasks] = useState([])
    const navigate = useNavigate()
    const [reRender, setReRender] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [reRender])

    return (
        <div className="overflow-x-auto max-h-80 overflow-y-auto w-10/12 mx-auto mt-8">
            <div className='flex justify-between mb-2'>
                <h2 className='  text-xl font-semibold'>All Tasks</h2>
                <button
                    onClick={() => navigate('/addtask')}
                    className="btn btn-active btn-accent text-white">Add A Task</button>
            </div>
            <table className="table table-compact w-full">
                <thead className='relative'>
                    <tr className='sticky top-0'>
                        <th className='w-1/12'>SL</th>
                        <th className='w-1/5'>Task Name</th>
                        <th className='w-2/5'>Description</th>
                        <th className='w-1/5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       tasks.length ? tasks.map((task, index) => <SingleTask
                            key={index}
                            task={task}
                            index={index}
                            reRender={reRender}
                            setReRender={setReRender}
                        />)
                   : <p className='text-center mt-8'>You didn\'t added a task yet</p> }
                </tbody>
            </table>
        </div>
    );
};

export default Home;