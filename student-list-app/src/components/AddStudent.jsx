import React, { Component } from 'react'
import { connect } from "react-redux";

export class AddStudent extends Component {
  state ={
    name: '',
    score: '',
  }
  onChangeData = (e) => {
    this.setState(
      {
        [e.target.name] : e.target.value,
      }
    )
  }
  onSubmitStudentForm = (data, e) =>{
    e.preventDefault();
    const newData = {
      id: new Date().getTime().toString(),
      name: data.name,
      score: data.score,
    }

    this.props.addStudentAtStore(newData);
    this.props.history.push('/');
    
  }
  render() {
    return (
      <div className="card-body">
        <form onSubmit={this.onSubmitStudentForm.bind(this, this.state)}>
          <div className="img-container">
            <img src="http://lorempixel.com/150/150/sports/" alt="" />
          </div>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input 
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.onChangeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Score</label>
            <input 
            type="text"
            className="form-control"
            name="score"
            value={this.state.score}
            onChange={this.onChangeData}
            />
          </div>
          <div className="form-group">
            <button onClick={() => this.props.history.push('/')}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addStudentAtStore : (newStudentData) => {
      return dispatch({type: 'ADD_STUDENT', payload: newStudentData});
    }
  }
}

export default connect(null, mapDispatchToProps)(AddStudent);
