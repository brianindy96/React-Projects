import React, { useState } from 'react'
import './App.css';
import Container from './components/Container';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleInputChange = (e) =>{
    // takes in the input value into the task state
    setTask(e.target.value)
 }

  const handleSubmitBtn = (e) =>{
    e.preventDefault();
  
    // if task is not empty, return a new state 
    if (task !== ''){
      setTasks([...tasks, {
        id: tasks.length + 1,
        // takes in the text from task state, and trims the spaces in between
        text: task.trim(),
      }])
    }
    setTask('');
   }

   const deleteBtn = (id) =>{
    const removeItem = tasks.filter((task)=>{
      return task.id !== id
    })

    setTasks(removeItem)
 }

   
  return (
    <div className="App">
      <Container deleteBtn={deleteBtn} tasks={tasks} handleInputChange={handleInputChange} handleSubmitBtn={handleSubmitBtn}/>
    </div>
  )
}

export default App