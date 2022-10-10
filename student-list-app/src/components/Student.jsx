import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Student extends Component {
  render() {

    // contains the data function that sent in from props
    const delFn = this.props.deleteStudentAtStore;

    return (
      <div className="card">
        <div className="card-header">
            name: {this.props.data.name}
            {/* When button clicked, sends action to reducer to delete user from STORE */}
            <button onClick={delFn.bind(this, this.props.data.id)}>delete</button>
            <Link to={`/edit${this.props.data.id}`}>
                <button>Edit</button>
            </Link>
        </div>
        <div className="card-body">
            score: {this.props.data.score}
        </div>
      </div>
    )
  }
}

// deleteStudentAtStore is a function sent from store to component through props
const mapDispatchToProps = dispatch => {
    return {
        deleteStudentAtStore : (id) => {
            return dispatch({type: 'DELETE_STUDENT', payload: id})
        }
    }
}
// connect(null == no function to transform state, change dispatch() to props)
export default connect(null, mapDispatchToProps)(Student);
