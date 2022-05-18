import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleTask = ({ index, task, reRender, setReRender }) => {
    const { _id, taskName, description } = task

    const [strikeThrough, setStrikeThrough] = useState(false)

    const handleTaskDelete = id => {
        console.log(id);
        fetch(`http://localhost:5000/deleteTask/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setReRender(!reRender)
            })
    }

    const handleTaskComplete = () => {
        setStrikeThrough(!strikeThrough)
        if (!strikeThrough) {
            toast.success(<p className='text-sm'>You have completed your <span className='font-bold text-black '>{taskName}</span> task.</p>)
        }
    }


    return (
        <tr>
            <td className='w-1/12'>{index + 1}</td>
            <td className={`w-3/12 ${strikeThrough ? 'line-through' : ''}`}>{taskName}</td>
            <td className={`w-6/12 ${strikeThrough ? 'line-through' : ''}`}><p className=''>{description.length > 20 ? description.substr(0, 50)+'...' : description}</p></td>
            <td className='w-4/12'>
                <button
                    onClick={handleTaskComplete}
                    class="btn btn-ghost text-accent">{strikeThrough ? 'Undo' : 'Complete'}</button>
                <button
                    onClick={() => handleTaskDelete(_id)}
                    class="btn btn-ghost text-red-600">Delete</button>
            </td>
        </tr>
    );
};

export default SingleTask;