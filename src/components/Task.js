import React from 'react';

const Task = ({ task, tasks, setTasks, setTaskInput, setIsEditing, setEditedTaskId }) => {

    const removeTask = () => {
        setTasks(tasks.filter(item => item.id !== task.id));
    }

    const completeTask = () => {
        setTasks(tasks.map(item => {
            if (item.id === task.id) return { ...task, completed: !task.completed };
            return item;
        }))
    }

    const handleEdit = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        const selectedTask = tasks.find(task => task.id === id);
        setTaskInput(selectedTask.title);
        setIsEditing(true);
        setEditedTaskId(id);
    }

    return (
        <div data-testid="todo-item" className="todo-item">
            <div onClick={completeTask} className="todo-text">
                <div data-testid="todo-text" className={`${task.completed ? 'completed' : ''}`}>{task.title}</div>
            </div>
            <div className="todo-icons">
                <i data-testid="i-edit" onClick={() => { handleEdit(task.id) }} className="fas fa-pencil-alt"></i>&nbsp;&nbsp;&nbsp;
                <i data-testid="i-trash" onClick={removeTask} className="fas fa-trash"></i>
            </div>
        </div>
    )
}

export default Task;
