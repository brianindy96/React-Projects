import React, { Component } from 'react'
import Student from './Student'
import { connect } from "react-redux";

export class StudentLists extends Component {
  render() {

    const allStudents = this.props.studentsFromStore;

    return (
      <div>
        {
          allStudents.map(item=>(
            <div key={item.id}>
              <Student data={item} />
            </div>
          ))
        }
      </div>
    )
  }
}

// should write this first
const mapStateToProps = state => {
  return {
    studentsFromStore : state.students
  }
}

export default connect(mapStateToProps, null)(StudentLists);