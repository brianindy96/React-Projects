import React, { Component } from 'react'
import { connect } from "react-redux";

export class EditStudent extends Component {
    state = {
        id: '',
        name: '',
        score: '',
    }

    onChangeData = (e) =>{
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    componentDidMount(){
        const userId = this.props.match.params.id;
        const student = this.getCurrentStudent(userId);
        if(student){
            this.setState({
                id: student.id,
                name: student.name,
                score: student.score,
            })
        } else{
            this.props.history.push('/');
        }
    }
    getCurrentStudent(id){
        const allStudents = this.props.studentsFromStore;
        const [student] = allStudents.filter((item) =>{
            return item.id === id;
        });
        return student;
    }
    onSubmitStudentForm = (data, e) =>{
        e.preventDefault();
        const newData ={
            id: data.id,
            name: data.name,
            score: data.score,
        }
        this.props.editStudentAtStore(newData);
        this.props.history.push('/');
    }
  render() {
    return (
        <div className="card-body">
        <form onSubmit={this.onSubmitStudentForm.bind(this, this.state)}>
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
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    )
    }
}

const mapStateToProps = state => {
    return {
        studentsFromStore: state.students
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editStudentAtStore : (id) => {
            return dispatch({type: 'EDIT_STUDENT', payload: id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
