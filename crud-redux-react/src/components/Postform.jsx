import React, { Component } from 'react'

export class Postform extends Component {
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form action="">
            <input type="text" placeholder="Enter Post Title" required />
            <br></br>
            <textarea cols="30" rows="5" placeholder="Enter Post here" />
        </form>
      </div>
    )
  }
}

export default Postform