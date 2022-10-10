import './App.css'
import UserInfo from "./UserInfo"

// dispatching action
import { thunk_action_creator } from './actions/fetchAction';
// component that connects the App to redux-store
import { connect } from "react-redux";

function App(props) {

  // variable that holds the input value 
  let getUsername;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = getUsername.value;
    props.dispatch(thunk_action_creator(username));
    getUsername.value = "";

    console.log(props.data);
  }
  return (
    <div className="container">
      <form 
      onSubmit={handleSubmit}
      className="form"
      >
        <h2 className="title">Enter the Github Username</h2>
        <input 
        type="text"
        placeholder="Enter Github Username"
        required
        ref={input => (getUsername = input)}
         />
        <button type="submit" className="button">Search</button>
      </form>
      
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    data: state,
  }
}

export default connect(mapStateToProps)(App);
