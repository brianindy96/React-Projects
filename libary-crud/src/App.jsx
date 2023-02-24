import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Header from './components/Header'
import { useEffect, useState } from "react"
import { getAllBooks } from './services/dataServices'
function App() {

  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited:", id);
    setBookId(id);
  }
  

  return (
    <div className="App">
      <Header />
      <Router>
        <div style={{height: "80vh"}}>
        <Routes>
          <Route path="/" element={<Home bookId={getBookIdHandler}  />} />
          <Route path="/add" element={<Add  />} />
          <Route path="/edit" element={<Edit bookId={bookId}  />} />
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
