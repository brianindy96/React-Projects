import React from 'react'
import './Overview.css';

const Overview = ({ tasks }) => {
  return (
    <div className="Overview">
      <h1>Your active tasks</h1>
        <ul className="todo-list">
          {
            tasks.map((task)=>(
              <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    </div>
  )
}

export default Overview