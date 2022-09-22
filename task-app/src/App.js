import './App.css';
import { useState } from 'react'

function App() {

  const [task, setTask] = useState({
    task: {
      text: '',
    },
    tasks: [], 
  });

  return (
    <div className="App">
        <h1>Tasks</h1>
        <br />
        <form action="" className="form-component">
          <label htmlFor="">Write a Task:</label>
          <br />
          <input type="text" id='taskInput' />
          <br />
          <button type="submit">Add Task</button>
        </form>

    </div>
  );
}

export default App;
