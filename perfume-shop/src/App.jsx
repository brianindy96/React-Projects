// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<SingleProduct />} />
      </Routes>
    </div>
  )
}

export default App
