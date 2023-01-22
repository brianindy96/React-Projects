// import { useState } from 'react'
import './App.css'
import About from './components/About'
import CustomCursor from './components/CustomCursor'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  const Container = styled.div`
    
  `

  return (
    <>
      <CustomCursor />

      <Container>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </Container>
    </>
  )
}

export default App
