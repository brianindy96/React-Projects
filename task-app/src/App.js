import React, { useState, useEffect } from 'react'
import './App.css';
import Container from './components/Container';

const App = () => {

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

   //  once mounted, data will be stored in local storage with useEffect() hook
 useEffect(() =>{
  // setItem(key, value)
  localStorage.setItem('tasks', JSON.stringify(tasks));
 }, [tasks])

  const [task, setTask] = useState('');

  const handleInputChange = (e) =>{
    // takes in the input value into the task state
    setTask(e.target.value)
 }

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
      <Container isEditing={isEditing} newTask={newTask} handleEditClick={handleEditClick} handleEditInputChange={handleEditInputChange} handleEditFormSubmit={handleEditFormSubmit} deleteBtn={deleteBtn} tasks={tasks} handleInputChange={handleInputChange} handleSubmitBtn={handleSubmitBtn}/>
    </div>
  )
}

export default App