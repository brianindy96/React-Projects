import React from 'react'

const Display = ({ tasks }) => {
  return (
    <div className="Display">
        {tasks.map((task)=>(
            <li key={task.id}>
                {task.text}
            </li>
        ))}
    </div>
  )
}

export default Display