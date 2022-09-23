import React from 'react'
import Card from './Card'
import "./Cards.css"

const Cards = ({ tasks, task }) => {
  return (
    <div className="card-container">
        {
            tasks.map((task)=>(
                <Card key={task.id} tasks={tasks} task={task} />
            ))
        }
    </div>
  )
}

export default Cards