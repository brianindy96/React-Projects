import React from 'react'

const Form = ({ handleSubmitBtn, handleInputChange }) => {
  return (
    <div className='Form'>
        <h1>Write your task here:</h1>
        <form action="" className='task-form' onSubmit={handleSubmitBtn}>
            <input 
            type="text" 
            name="" 
            placeholder='what to do today...'
            id="" 
            onChange={handleInputChange}
            />
        </form>
    </div>
  )
}

export default Form