import './App.css';
import React, { useState, useEffect } from 'react';
import DateForm from './components/DateForm';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {
  //Local Storage - getItem
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState);
  const [taskInput, setTaskInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskId, setEditedTaskId] = useState(0);

  //Local Storage - setItem
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])


  return (
    <div className="container">
      <div className="app-wrapper">
        <DateForm tasks={tasks} />
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editedTaskId={editedTaskId}
        />
        {tasks.length === 0 ? (
          <div className="no-tasks-message">
            <h3 data-testid="no-tasks-message">Your list is empty!</h3>
            <p>Start adding items to your list.</p>
          </div>
        ) : (
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            setTaskInput={setTaskInput}
            setIsEditing={setIsEditing}
            setEditedTaskId={setEditedTaskId}
          />
        )}
      </div>
    </div>
  );
}

export default App;
