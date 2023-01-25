// import { useState } from 'react'
import './App.css'
import Announcement from './components/Announcement'
import Banner from './components/Banner'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Announcement />
      <Banner />
    </div>
  )
}

export default App
