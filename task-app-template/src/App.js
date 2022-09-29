import './App.css';
import { useState } from 'react';

const App = () => {

  // define the states of tasks and task's input value
 const [tasks, setTasks] = useState([]);
 const [task, setTask] = useState('');



  return (
    <div className="App">

    <form className="task-form" action="">
      <label htmlFor="">Write down your Task:</label>
      <input 
      type="text" 
      name="" 
      placeholder='write down your task'
       />
      <button type="submit">Add Task</button>
    </form>
      
    {/* UI of Task Lists */}
    <ul>
      {}
    </ul>
    </div>
  );
}

export default App;
