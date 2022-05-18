import React from 'react';
import { toast } from 'react-toastify';

const AddTaskForm = () => {

    const handleAddNewTask = e => {
        e.preventDefault()
        const taskName = e.target.task_name.value
        const description = e.target.description.value

        fetch('http://localhost:5000/addTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ taskName, description })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.insertedId);
            if(data.insertedId){
                toast.success('Task added successfully.')
            }
            e.target.reset()
        })
    }

    return (
        <div className='w-3/5 mx-auto mt-12'>
            <h2 className='text-center text-xl font-semibold mb-2'>Add A New Task</h2>
            <form
                onSubmit={handleAddNewTask}
                action="" className='w-full grid grid-cols-1 gap-2'>
                <input type="text" name='task_name' placeholder="Task Name" class="input input-bordered input-md w-full" />
                <textarea name='description' placeholder="Task Description" class="textarea textarea-bordered h-24"></textarea>
                <input type="submit" value="Add Task" class=" uppercase cursor-pointer text-white rounded-lg bg-accent  input-md w-full" />
            </form>
        </div>
    );
};

export default AddTaskForm;