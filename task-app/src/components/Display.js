import React from 'react'

const Display = ({ tasks, deleteBtn }) => {
  return (
    <div className="Display">
        {tasks.map((task)=>(
            <li key={task.id}>
                <p>{task.text}</p>
                <div className="button">
                    <button>Edit</button>
                    <button onClick={() => deleteBtn(task.id)}>X</button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default Display