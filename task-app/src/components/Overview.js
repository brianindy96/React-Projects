import React from 'react'
import './Overview.css';
import Cards from './Cards';

const Overview = ({ tasks, task, deleteTask, handleEdit }) => {
  return (
    <div className="Overview">
      <h1>Your active tasks</h1>
      <Cards tasks={tasks} task={task} deleteTask={deleteTask} handleEdit={handleEdit}/> 
    </div>
  )
}

export default Overview