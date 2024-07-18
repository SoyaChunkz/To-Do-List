import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (index) => {
        setTasks(
            t => t.filter((_, i) => i !== index )
        )
    }
    const moveUp = (index) => {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    const moveDown = (index) => {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className='to-do-list-container'>
            <h1>To-Do-List</h1>
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
                        <span className='text'>
                            {task}
                        </span>
                        <button className='delete-btn' onClick={() => deleteTask(index)}>
                            🗑️
                        </button>
                        <button className='up-btn' onClick={() => moveUp(index)}>
                            👆
                        </button>
                        <button className='down-btn' onClick={() => moveDown(index)}>
                            👇
                        </button>
                    </li>)
                }
            </ol>
        </div>
    );
}
export default ToDoList