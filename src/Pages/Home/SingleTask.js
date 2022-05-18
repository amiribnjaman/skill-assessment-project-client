import React, { useState } from 'react';

const SingleTask = ({ index, task }) => {
    const [strikeThrough, setStrikeThrough] = useState(false)

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.taskName}</td>
            <td className={`${strikeThrough ? 'line-through' : ''}`}>{task.description}</td>
            <td>
                <button
                    onClick={() => setStrikeThrough(!strikeThrough)}
                    class="btn btn-ghost text-accent">{strikeThrough ? 'Undo' : 'Complete'}</button>
                <button class="btn btn-ghost text-red-600">Delete</button>
            </td>
        </tr>
    );
};

export default SingleTask;