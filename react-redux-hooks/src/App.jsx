
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  
  // state inside the store
  // useSelector is a callback function
  // returning the state 
  const state = useSelector((state) => state)
  // OUTPUT: Object {account:0}
  
  //   const state = useSelector((state) => state.account)
  //  OUTPUT: 0
  console.log(state);
  return (
    <div className="App">
      
    </div>
  )
}

export default App
