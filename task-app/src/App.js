import React, { useState } from 'react'
import './App.css'
import Overview from './components/Overview';

const App = () => {
  // // state of arrays that takes in the whole tasks 
  const [tasks, setTasks] = useState([]);
  // // state that takes in the task from input field
  const [task, setTask] = useState('');

  
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

  console.log(tasks);
  
  const handleChange = (e) => {
    setTask(e.target.value);

    // console.log({task})
  }

  return (
    <div className='App'>
        <h1>Tasks App</h1>
        <form action="/" className='form-container'onSubmit={handleSubmit}>
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

        <Overview tasks={tasks} task={task}/>
    </div>
  )
}

export default App