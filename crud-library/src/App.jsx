import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
