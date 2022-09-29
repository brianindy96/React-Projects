import './App.css';

import React from 'react'

const App = () => {
  return (
    <div className='App'>
        <div className='General'>
          <form action="" className="general-info" name='general-info'>
            {/* General Information */}
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
            
            {/* Education */}
              <h2>Education</h2>
              {/* School name */}
              <label htmlFor="schoolName">School:</label>
              <input 
              id="schoolName"
              type="text"
              placeholder='write your school name here..' />
              {/* Degree */}
              <label htmlFor="degreeName">Degree:</label>
              <input
              id="degreeName" 
              type="text"
              placeholder='write your highest degree here..' />
              {/* First enrolled date*/}
              <label htmlFor="date-enrolled">Date first enrolled : </label>
              <input 
              id="date-enrolled"
              type="date"
              />
              {/* Graduation Date */}
              <label htmlFor="date-graduation">Graduation date : </label>
              <input 
              id="date-graduation"
              type="date"
              />

            {/* Work Experience */}
              <h2>Work Experiences</h2>
              {/* Company Name */}
              <label htmlFor="companyName">Company Name:</label>
              <input 
              id="companyName"
              type="text"
              placeholder='write your Company Name here..' />
              {/* Position */}
              <label htmlFor="positionName">Position Title:</label>
              <input
              id="positionName" 
              type="text"
              placeholder='write your position title here..' />
              {/* First enrolled date*/}
              <label htmlFor="date-jobbegin">Date first enrolled : </label>
              <input 
              id="date-jobbegin"
              type="date"
              />
              {/* Graduation Date */}
              <label htmlFor="date-endwork">End date : </label>
              <input 
              id="date-endwork"
              type="date"
              />
            <br />
          <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default App