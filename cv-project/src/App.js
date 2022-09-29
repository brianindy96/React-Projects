import './App.css';

import React from 'react'

const App = () => {
  return (
    <div className='App'>
        <div className='General'>
          <form action="" className="general-info" name='general-info'>
            <h2>General Information</h2>
            {/* First Name */}
            <label htmlFor="firstNameInput">First Name:</label>
            <input 
            id="firstNameInput"
            type="text"
            required
            placeholder='write your first name here..' />
            {/* Last Name */}
            <label htmlFor="lastNameInput">Last Name:</label>
            <input
            id="lastNameInput" 
            required
            type="text"
            placeholder='write your first name here..' />
            {/* Email */}
            <label htmlFor="emailInput">Email: </label>
            <input 
            id="emailInput"
            required
            type="email"
            placeholder='write your email here..' />
            {/* Phone Number */}
            <label htmlFor="phoneNumInput">Phone Number:</label>
            <input 
            required
            id="phoneNumInput"
            type="text"
            placeholder='please input your country code e.g. +xx' />

            <h2>Education</h2>
            {/* School name */}
            <label htmlFor="firstNameInput">School:</label>
            <input 
            id="firstNameInput"
            type="text"
            placeholder='write your first name here..' />
            {/* Degree */}
            <label htmlFor="lastNameInput">Degree:</label>
            <input
            id="lastNameInput" 
            type="text"
            placeholder='write your first name here..' />
            {/* First enrolled date*/}
            <label htmlFor="emailInput">Date first enrolled : </label>
            <input 
            id="emailInput"
            type="date"
            placeholder='write your email here..' />
            {/* Graduation Date */}
            <label htmlFor="emailInput">Graduation date : </label>
            <input 
            id="emailInput"
            type="date"
            placeholder='write your email here..' />
            
          </form>
        </div>
    </div>
  )
}

export default App