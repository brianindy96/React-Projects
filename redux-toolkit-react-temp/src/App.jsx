import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  )
}

export default App
