import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks, taskInput, setTaskInput, isEditing, setIsEditing, editedTaskId }) => {

    const inputTaskHandler = (event) => {
        setTaskInput(event.target.value);
    }

    const submitTask = (event) => {
        event.preventDefault()
        setTasks([
            ...tasks,
            { title: taskInput, id: isEditing ? editedTaskId : uuidv4(), completed: false }
        ]);
        setTaskInput('');
        setIsEditing(false);
    }

    const removeAllTasksHandler = (event) => {
        event.preventDefault();
        setTasks([]);
    }

    return (
        <div>
            <form onSubmit={submitTask} className="addtask-form">
                <input value={taskInput} onChange={inputTaskHandler} data-testid="addtask-input" id="addtask-input" type="text" placeholder="Add Task"></input>
                <div className="addtask-buttons">
                    <button onSubmit={submitTask} data-testid={isEditing ? "btn-edit" : "btn-add"} id={isEditing ? "btn-edit" : "btn-add"} type="submit"><i className={isEditing ? "fas fa-check fa-lg" : "fas fa-plus fa-lg"}></i></button>
                    <button onClick={removeAllTasksHandler} data-testid="btn-clear" id="btn-clear" type="submit"><i className="fas fa-trash fa-lg"></i></button>
                </div>
            </form>
            <div className="hr"></div>
        </div>
    )
}

export default TaskForm;
