import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Header from './components/Header'
import { useState } from 'react'

function App() {

  const [bookId, setBookId] = useState('');

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited:", id);
    setBookId(id);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Home getBookId={getBookIdHandler} />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit bookId={bookId} />} />
      </Routes>
    </div>
  )
}

export default App
