import './App.css';
import { useState } from 'react'

import React from 'react'

const App = () => {

  const [person, setPerson] = useState([]);

  const [isEditing, setIsEditing] = useState(false);

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    schoolName: '',
    degreeName: '',
    dateEnrolled: '',
    dateGraduate: '',
    companyName: '',
    positionName: '',
    dateJobBegin: '',
    dateEndWork: '',
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
        schoolName: state.schoolName,
        degreeName: state.degreeName,
        dateEnrolled: state.dateEnrolled,
        dateGraduate: state.dateGraduate,
        companyName: state.companyName,
        positionName: state.positionName,
        dateJobBegin: state.dateJobBegin,
        dateEndWork: state.dateEndWork,
      }])
    }

    setState('');
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
                name="schoolName"
                onChange={handleInputChange}
                id="schoolName"
                type="text"
                placeholder='write your school name here..' />
                {/* Degree */}
                <label htmlFor="degreeName">Degree:</label>
                <input
                name="degreeName"
                onChange={handleInputChange}
                id="degreeName" 
                type="text"
                placeholder='write your highest degree here..' />
                {/* First enrolled date*/}
                <label htmlFor="date-enrolled">Date first enrolled : </label>
                <input 
                name="dateEnrolled"
                id="date-enrolled"
                onChange={handleInputChange}
                type="date"
                />
                {/* Graduation Date */}
                <label htmlFor="date-graduation">Graduation date : </label>
                <input 
                name="dateGraduate"
                id="date-graduation"
                onChange={handleInputChange}
                type="date"
                />
            </div>
            
            <div className="Work">
              {/* Work Experience */}
              <h2>Work Experiences</h2>
              {/* Company Name */}
              <label htmlFor="companyName">Company Name:</label>
              <input 
              onChange={handleInputChange}
              name="companyName"
              id="companyName"
              type="text"
              placeholder='write your Company Name here..' />
              {/* Position */}
              <label htmlFor="positionName">Position Title:</label>
              <input
              onChange={handleInputChange}
              name="positionName"
              id="positionName" 
              type="text"
              placeholder='write your position title here..' />
              {/* First enrolled date*/}
              <label htmlFor="date-jobbegin">Date first enrolled : </label>
              <input 
              onChange={handleInputChange}
              name="dateJobBegin"
              id="date-jobbegin"
              type="date"
              />
              {/* Graduation Date */}
              <label htmlFor="date-endwork">End date : </label>
              <input 
              onChange={handleInputChange}
              name="dateEndWork"
              id="date-endwork"
              type="date"
              />
            </div>
            
            <br />
          <button type="submit">Submit</button>
          </form>
        </div>

    <div className="Overview">
      {person.map((user)=>(
        <div className="display-card" key={user.id}>
          <h3>General Information:</h3>
          <div><strong>First Name:</strong> {user.firstName}</div>
          <div><strong>Last Name:</strong> {user.lastName}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Phone#: </strong>{user.phoneNum}</div>
          <h3>Education:</h3>
          <div><strong>School Name:</strong> {user.schoolName}</div>
          <div><strong>Degree Name:</strong> {user.degreeName}</div>
          <div><strong>Date Enrolled:</strong> {user.dateEnrolled}</div>
          <div><strong>Date Graduated: </strong>{user.dateGraduate}</div>
          <h3>Work Experiences: </h3>
          <div><strong>Company Name:</strong> {user.companyName}</div>
          <div><strong>Position Name:</strong> {user.positionName}</div>
          <div><strong>Date Begin Job:</strong> {user.dateJobBegin}</div>
          <div><strong>Date End Work: </strong>{user.dateEndWork}</div>
        </div>
      ))}
    </div>
        
      
    </div>
  )
}

export default App