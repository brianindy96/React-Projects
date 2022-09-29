import React from 'react'

const Display = ({ tasks, deleteBtn, handleEditClick }) => {
  return (
    <div className="Display">
        {tasks.map((task)=>(
            <li key={task.id}>
                <p>{task.text}</p>
                <div className="button">
                    <button onClick={() => handleEditClick(task)}>Edit</button>
                    <button onClick={() => deleteBtn(task.id)}>X</button>
                </div>
            </li>
        ))}
    </div>
  )
}

export default Display