import React from 'react'

const Form = ({ newTask, isEditing, handleEditFormSubmit, handleEditInputChange, task, setIsEditing, handleSubmitBtn, handleInputChange }) => {
  return (
    <div className='Form'>
        {isEditing 
      ?
        <form className="task-form" action="" onSubmit={handleEditFormSubmit}>
          <label htmlFor="">Edit your task:</label>
          <input 
          type="text"
          placeholder="write down your task"
          value={newTask.text}
          onChange={handleEditInputChange}
           />
           <button type="submit">Update</button>
           <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      :
      <form className="task-form" action="" onSubmit={handleSubmitBtn}>
        <label htmlFor="">Write down your Task:</label>
        <input 
        type="text" 
        name="" 
        placeholder='write down your task'
        onChange={handleInputChange}
        value={task}
        />
    </form>}
    </div>
  )
}

export default Form