import React, { Component } from 'react'
import { connect } from "react-redux"

export class EditPost extends Component {
  
    handleEdit = (e) =>{
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const data = {
            newTitle,
            newMessage
        }

        this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data})
    }
    render() {
        return (
      <div>
        <h1>Edit Post</h1>
        <form onSubmit={this.handleEdit}>
            <input ref={(input)=> this.getTitle = input} defaultValue = {this.props.post.title} type="text" placeholder="Enter Post Title" required />
            <br></br>
            <textarea ref={(input)=> this.getMessage = input} defaultValue = {this.props.post.message} cols="30" rows="5" placeholder="Enter Post here" required />
            <br></br>
            <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

export default connect()(EditPost);