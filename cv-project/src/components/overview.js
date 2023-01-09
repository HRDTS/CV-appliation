import React from "react";

const Overview = (props) => {
    const tasks = props.tasks
    const handleRemove = props.handleRemove
    const handleEdit = props.handleEdit


    const updatedTasks = tasks.map((task) => {
        return <li key={task.id}> {task.school} | {task.study} | {task.date} | {task.id} <button onClick={() => handleEdit(task.id)} id="edit">edit</button> <button onClick={() => handleRemove(task.id)} id="delete">delete</button></li>
    })

    return (
        <ul>
            {updatedTasks}
        </ul>
    )

};

export default Overview;