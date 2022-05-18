import React, { useState } from 'react';

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

    return (
        <tr>
            <td className='w-1/12'>{index + 1}</td>
            <td className='w-1/5'>{taskName}</td>
            <td className={`w-2/5 ${strikeThrough ? 'line-through' : ''}`}>{description}</td>
            <td className='w-1/5'>
                <button
                    onClick={() => setStrikeThrough(!strikeThrough)}
                    class="btn btn-ghost text-accent">{strikeThrough ? 'Undo' : 'Complete'}</button>
                <button
                    onClick={() => handleTaskDelete(_id)}
                    class="btn btn-ghost text-red-600">Delete</button>
            </td>
        </tr>
    );
};

export default SingleTask;