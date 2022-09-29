import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  // define the states of tasks and task's input value
 const [tasks, setTasks] = useState(() =>{
  // gets Task from local storage by accessing the key: tasks
  const savedTasks = localStorage.getItem("tasks");

  // if there are datas in savedTodos
  if(savedTasks) {
    // .parse returns javascript string as objects again
    return JSON.parse(savedTasks);
  } else{
    return [];
  };
 });
 const [task, setTask] = useState('');

//  once mounted, data will be stored in local storage with useEffect() hook
 useEffect(() =>{
  // setItem(key, value)
  localStorage.setItem('tasks', JSON.stringify(tasks));
 }, [tasks])

// ---------------------------------------------------------------
// FUNCTIONS

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

//  function that deletes element
 const deleteBtn = (id) =>{
    const removeItem = tasks.filter((task)=>{
      return task.id !== id
    })

    setTasks(removeItem)
 }

//  EDITING

const [isEditing, setIsEditing] = useState(false);
const [newTask, setNewTask] = useState({});

// sets isEditing to true everything we are trying to edit
const handleEditClick = (task) =>{
  setIsEditing(true);
  console.log(isEditing);
  // sends current task to current new Task
  setNewTask({...task});
}

//handles inputchange on editing
const handleEditInputChange = (e)=>{
  setNewTask({
    ...newTask,
      text: e.target.value,
  })
}

// Updates information once edited

const handleUpdate = (id, updatedTodo) =>{
  const updatedTask = tasks.map((task) => {
    return task.id === id ? updatedTodo : task;
  });

  setIsEditing(false);
  setTasks(updatedTask);
}

//handles formsubmit on editing
const handleEditFormSubmit = (e) =>{
  e.preventDefault();

  handleUpdate(newTask.id, newTask)
}

  return (
    <div className="App">

      {isEditing 
      ?
        <form className="task-form" action="" onSubmit={handleEditFormSubmit}>
          <label htmlFor="">Edit your task:</label>
          <input 
          type="text"
          placeholder="write down your task"
          value={newTask.text}
          onChange={handleEditInputChange}
           />
           <button type="submit">Update</button>
           <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      :
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
    </form>}
        
      {/* UI of Task Lists */}
      <div className="tasks-ui">
        <ol>
            {tasks.map((task) =>(
              // when mapping arrays, always refer KEY TO ELEMENT
              <li key={task.id}>
                {task.text}
                <button className="deleteBtn" onClick={() => deleteBtn(task.id)}>X</button>
                <button className="editBtn" onClick={() => handleEditClick(task)}>Edit</button>
              </li>
              
            ))}
          </ol>
      </div>
          
    </div>
  );
}

export default App;
