import React from 'react';

const AddTaskForm = () => {
    return (
        <div className='w-3/5 mx-auto mt-12'>
            <h2 className='text-center text-xl font-semibold mb-2'>Add A New Task</h2>
            <form action="" className='w-full grid grid-cols-1 gap-2'>
                <input type="text" name='task_name' placeholder="Task Name" class="input input-bordered input-md w-full" />
                <textarea  name='description' placeholder="Task Description" class="textarea textarea-bordered h-24"></textarea>
                <input type="submit" value="Add Task" class=" uppercase cursor-pointer text-white rounded-lg bg-accent  input-md w-full" />
            </form>
        </div>
    );
};

export default AddTaskForm;