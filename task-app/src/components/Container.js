import React from 'react'
import './Container.css'
import Form from './Form'
import Display from './Display'
import './Form.css'
import './Display.css'

const Container = ({ handleEditFormSubmit, handleEditInputChange, newTask, isEditing, handleEditClick, deleteBtn, handleSubmitBtn, handleInputChange, tasks}) => {
  return (
    <div className="Container">
        <Form handleEditInputChange={handleEditInputChange} handleEditFormSubmit={handleEditFormSubmit} newTask={newTask} isEditing={isEditing} handleSubmitBtn={handleSubmitBtn} handleInputChange={handleInputChange}/>
        <Display handleEditClick={handleEditClick} deleteBtn={deleteBtn} tasks={tasks}/>
    </div>
  )
}

export default Container