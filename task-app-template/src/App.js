import './App.css';
import { useState } from 'react';

const App = () => {

  // define the states of tasks and task's input value
 const [tasks, setTasks] = useState([]);
 const [task, setTask] = useState('');

 // function that handles Submit button clicked
 const handleSubmitBtn = (e) =>{
  e.preventDefault();


 }

 //function that handles input changes


  return (
    <div className="App">

    <form className="task-form" action="" onSubmit={handleSubmitBtn}>
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
      {/* {tasks.map((task) =>{
        <li>{task.id}</li>
        <li>{task.text}</li>
      })} */}
    </ul>
    </div>
  );
}

export default App;
