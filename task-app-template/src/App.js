import './App.css';
import { useState } from 'react';

const App = () => {

  // define the states of tasks and task's input value
 const [tasks, setTasks] = useState([]);
 const [task, setTask] = useState('');

 // function that handles Submit button clicked
 const handleSubmitBtn = (e) =>{
  e.preventDefault();

  // if task is not empty, return a new state 
  if (task !== ''){
    setTasks([...tasks, {
      id: tasks.length + 1,
      // takes in the text from task state, and trims the spaces in between
      text: task.trim(),
    }])
  }

  setTask('');
 }

 //function that handles input changes
 // then sets this function to input form with OnChange eventlistener
 const handleInputChange = (e) =>{
    // takes in the input value into the task state
    setTask(e.target.value)
 }


  return (
    <div className="App">

      <form className="task-form" action="" onSubmit={handleSubmitBtn}>
        <label htmlFor="">Write down your Task:</label>
        <input 
        type="text" 
        name="" 
        placeholder='write down your task'
        onChange={handleInputChange}
        value={task}
        />
        <button type="submit">Add Task</button>
      </form>
        
      {/* UI of Task Lists */}
      <div className="tasks-ui">
        <ol>
            {tasks.map((task) =>(
              // when mapping arrays, always refer KEY TO ELEMENT
              <li key={task.id}>{task.text}</li>
            ))}
          </ol>
      </div>
          
    </div>
  );
}

export default App;
