import React from 'react'
import './Card.css'

const Card = ({ tasks, task, deleteTask }) => {
  return (
    <div className='card'>
        <div className="delete-btn">
        <button 
            onClick={() => deleteTask(task.id)}
        >X</button>
        </div>
        <div>
            <h1> Task: {task.id}</h1>
            <br></br>
            <p>{task.text}</p>
        </div>      
    </div>
  )
}

export default Card