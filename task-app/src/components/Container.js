import React from 'react'
import './Container.css'
import Form from './Form'
import Display from './Display'
import './Form.css'
import './Display.css'

const Container = () => {
  return (
    <div className="Container">
        <Form />
        <Display />
    </div>
  )
}

export default Container