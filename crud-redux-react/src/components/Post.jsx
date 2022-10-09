import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Post extends Component {
  render() {
    return (
      <div style={{border: "1px solid black"}}>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button >Edit</button>
        <button onClick={()=> this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id})}>Delete</button>
      </div>
    )
  }
}

export default connect()(Post)