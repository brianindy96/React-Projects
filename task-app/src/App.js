import React, { useState } from 'react'
import './App.css';
import Container from './components/Container';

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  
  return (
    <div className="App">
      <Container />
    </div>
  )
}

export default App