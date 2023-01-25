// import { useState } from 'react'
import './App.css'
import Announcement from './components/Announcement'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './components/Products'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Announcement />
      <Banner />
      <Products />
      <Footer />
    </div>
  )
}

export default App
