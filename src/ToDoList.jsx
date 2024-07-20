import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            const now = new Date().toLocaleString(); // Get current date and time
            setTasks(t => [...t, { text: newTask, timestamp: now }]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        setTasks(t => t.filter((_, i) => i !== index));
    };

    const moveUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    const moveDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className='to-do-list-container'>
            <h1>To-Do List</h1>
            <input
                type='text' value={newTask} placeholder='Enter a task...' onChange={handleInputChange}
            />
            <button onClick={addTask} className='add-btn'>
                Add
            </button>
            <ol>
                {
                    tasks.map((task, index) =>
                        <li key={index}>
                            <div className='task-details'>
                                <span className='text'>{task.text}</span>
                                <span className='timestamp'>{task.timestamp}</span>
                            </div>
                            <button className='delete-btn' onClick={() => deleteTask(index)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button className='up-btn' onClick={() => moveUp(index)}>
                                <FontAwesomeIcon icon={faArrowUp} />
                            </button>
                            <button className='down-btn' onClick={() => moveDown(index)}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </button>
                        </li>)
                }
            </ol>
        </div>
    );
}

export default ToDoList;
