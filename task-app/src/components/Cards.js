import React from 'react'
import Card from './Card'
import "./Cards.css"

const Cards = ({ tasks, task, deleteTask, handleEdit }) => {
  return (
    <div className="card-container">
        {
            tasks.map((task)=>(
                <Card key={task.id} tasks={tasks} task={task} deleteTask={deleteTask} handleEdit={handleEdit} />
            ))
        }
    </div>
  )
}

export default Cards