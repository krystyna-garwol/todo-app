import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, setTasks, setTaskInput, setIsEditing, setEditedTaskId }) => {
    return (
        <div>
            {tasks.map(task => (
                <Task
                    tasks={tasks}
                    setTasks={setTasks}
                    task={task}
                    key={task.id}
                    setTaskInput={setTaskInput}
                    setIsEditing={setIsEditing}
                    setEditedTaskId={setEditedTaskId}
                />
            ))}
        </div>
    )
}

export default TaskList;
