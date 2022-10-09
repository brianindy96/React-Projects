import React, { Component } from 'react'
// uses connect to send data to 
import { connect } from 'react-redux'

export class PostForm extends Component {


    handleSubmit =(e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        
        const data = {
            id: new Date(),
            title,
            message,
            editing: false,
        }

        // sends action to 
        this.props.dispatch({
            type: 'ADD_POST',
            data,
        })

        this.getTitle.value='';
        this.getMessage.value='';
    }
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
            <input ref={(input)=> this.getTitle = input} type="text" placeholder="Enter Post Title" required />
            <br></br>
            <textarea ref={(input)=> this.getMessage = input} cols="30" rows="5" placeholder="Enter Post here" />
            <br></br>
            <button type="submit">Post</button>
        </form>
      </div>
    )
  }
}

export default connect()(PostForm);
