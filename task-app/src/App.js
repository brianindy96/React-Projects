import React from 'react'
import './App.css'
// import { useState } from 'react'

const App = () => {
  // // state of arrays that takes in the whole tasks 
  // const [tasks, setTasks] = useState([]);
  // // state that takes in the task from input field
  // const [task, setTask] = useState('');

  return (
    <div className='App'>
        <h1>Tasks App</h1>
        <form action="/" className='form-container'>
          <label htmlFor="">Write your task</label>
          <input 
          type="text" 
          placeholder='write here...'
          />
          <button type="submit">
            Add Task
          </button>
        </form>
    </div>
  )
}

export default App