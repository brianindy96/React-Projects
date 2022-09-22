import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      task: {
        text: '',
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      // It adds the task (whatever is in our input field when we submit the form) to our tasks array.
      tasks: this.state.tasks.concat(this.state.task),
      //set task back to inital state
      task: { text: ''},
    })
  }

  render() {

    // so in the JSX i don't have to put this.state.task or this.state.tasks
    const { task, tasks } = this.state;


    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} >
          <label htmlFor="">
            Write Task...
          </label>
          
          <input 
          onChange={this.handleChange}
          type="text" 
          // very IMPORTANT
          value={task.text} 
          id="taskInput" />

          <button type="submit">
            Add Task
          </button>
          <Overview tasks={this.tasks}/>
        </form>
      </div>
    )
  }
}
