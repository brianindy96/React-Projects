import React from 'react'
import './Container.css'
import Form from './Form'
import Display from './Display'
import './Form.css'
import './Display.css'

const Container = ({ deleteBtn, handleSubmitBtn, handleInputChange, tasks}) => {
  return (
    <div className="Container">
        <Form handleSubmitBtn={handleSubmitBtn} handleInputChange={handleInputChange}/>
        <Display deleteBtn={deleteBtn} tasks={tasks}/>
    </div>
  )
}

export default Container