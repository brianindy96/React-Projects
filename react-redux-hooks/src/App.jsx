
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  
  // state inside the store
  // useSelector is a callback function
  // basically returning the state from the store here
  // const state = useSelector((state) => state)
  // OUTPUT: Object {account:0}

    const account = useSelector((state) => state.account)
    // console.log(account);
    //  OUTPUT: 0
    const dispatch = useDispatch();

    // const AC = bindActionCreators(actionCreators, dispatch);
    // OUTPUT: Object {depositMoney: bindActionCreator() }
    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
    // console.log(AC);

    return (
    <div className="App">
      <h1>Account: {account}</h1>
      <button onClick={() => withdrawMoney(1000)}>withdraw</button>
      <button onClick={() => depositMoney(1000)}>deposit</button>
    </div>
  )
}

export default App
