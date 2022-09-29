import './App.css';
import { useState } from 'react'

import React from 'react'

const App = () => {

  const [person, setPerson] = useState([]);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
  });

  const handleInputChange = (e) =>{
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })


  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if (state !== ''){
      setPerson([...person, {
        id: person.length + 1,
        // takes in the text from task state, and trims the spaces in between
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phoneNum: state.phoneNum,
      }])
    }

    setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNum: '',
    });

    console.log(person);
  }
  
  return (
    <div className='App'>
        <div className='Form'>
          <form onSubmit={handleSubmit} action="" className="general-info" name='general-info'>
            {/* General Information */}
            <div className='General'>
              <h2>General Information</h2>
                {/* First Name */}
                <label htmlFor="firstNameInput">First Name:</label>
                <input 
                onChange={handleInputChange}
                name="firstName"
                id="firstNameInput"
                type="text"
                required
                placeholder='write your first name here..' />
                {/* Last Name */}
                <label htmlFor="lastNameInput" >Last Name:</label>
                <input
                name="lastName"
                onChange={handleInputChange}
                id="lastNameInput" 
                required
                type="text"
                placeholder='write your first name here..' />
                {/* Email */}
                <label htmlFor="emailInput">Email: </label>
                <input 
                name="email"
                onChange={handleInputChange}
                id="emailInput"
                required
                type="email"
                placeholder='write your email here..' />
                {/* Phone Number */}
                <label htmlFor="phoneNumInput">Phone Number:</label>
                <input 
                name="phoneNum"
                onChange={handleInputChange}
                required
                id="phoneNumInput"
                type="text"
                placeholder='please input your country code e.g. +xx' />
            </div>
            <div className='Education'>
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
            </div>
            
            <div className="Work">
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
            </div>
            
            <br />
          <button type="submit">Submit</button>
          </form>
        </div>

    <ul>
      {person.map((user)=>(
        <div className="display-card" key={user.id}>
          <div>First Name: {user.firstName}</div>
          <div>Last Name: {user.lastName}</div>
          <div>Email: {user.email}</div>
          <div>Phone#: {user.phoneNum}</div>
        </div>
      ))}
    </ul>
        
      
    </div>
  )
}

export default App