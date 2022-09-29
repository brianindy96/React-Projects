import React, { useState } from 'react'
import './App.css'
import Overview from './components/Overview';

const App = () => {
  // // state of arrays that takes in the whole tasks 
  const [tasks, setTasks] = useState([]);
  // // state that takes in the task from input field
  const [task, setTask] = useState('');

  // Editing a task
  // isEditing is initally set as false, as we are not editing anything
  const [isEditing, setEditing] = useState(false);

  // Task that you want to change to 
  const [newTask, setNewTask] = useState({});

  //function handles editing input change
  const handleEditInputChange = (e) =>{
    setNewTask({
      ...newTask, 
      text: e.target.value,
    })
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    //If task does not equal an empty string, then setTasks to the input value.
    if(task !== ''){
      // we will update the 'tasks' state by putting in the input value from what we already have
      setTasks([
        // whatever we have in the current state
        ...tasks,
        {
          id: tasks.length+1,
          text: task.trim(),
        }
      ])
    }

    //clear Input
    setTask("");
  }
  
  const handleChange = (e) => {
    setTask(e.target.value);
  }
  // Delete Task
  const deleteTask = (id) =>{
    const removeItem = tasks.filter((task) =>{
      return task.id !== id
    })

    setTasks(removeItem);
  }

  // Edit Task Click
  const handleEditClick = (task) =>{
    setEditing(true);
    // send information on current task 
    setNewTask({...task });
  }

  // Updating the edited Task
  const handleUpdateTask = (id, updatedTodo) =>{

    const updatedTask = tasks.map((task) => {
      return task.id === id ? updatedTodo : task;
    });

    setEditing(false);
    setTasks(updatedTask);

  }

  const handleEditFormSubmit = (e) =>{
    e.preventDefault();

    handleUpdateTask(newTask.id, newTask)

  }

  return (
    <div className='App'>
        <h1>Tasks App</h1>
        {/* Conditional Statement */}
        {/* If editing is true, display an editing form */}
        {/* If false display default form */}
        {isEditing ? 
        <form onSubmit={handleEditFormSubmit}>
            <h2>Edit Task</h2>
            <label htmlFor="">Write your task</label>
            <input 
            type="text" 
            placeholder='write here....'
            name='editTodo'
            value={newTask.text}
            onChange={handleEditInputChange}/>
            <button
            type="submit"
            >Update</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
        : 
        <form className='form-container'onSubmit={handleSubmit}>
            <label htmlFor="">Write your task</label>
            <input 
            type="text" 
            placeholder='write here...'
            onChange={handleChange}
            value={task}
            />
            <button 
            type="submit"
            >
              Add Task
            </button>
        </form>
        }

        <Overview tasks={tasks} task={task} newTask={newTask} deleteTask={deleteTask} handleEdit={handleEditClick} handleUpdate={handleUpdateTask}/>
    </div>
  )
}

export default App