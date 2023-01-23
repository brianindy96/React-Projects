// import { useState } from 'react'
import './App.css'
import About from './components/About'
import CustomCursor from './components/CustomCursor'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Navbar from './components/Navbar'
import styled from 'styled-components'


const Container = styled.div`
    padding: 0 5vw;
`


function App() {


  return (
    <>
      <CustomCursor />

      <Container className='main-container'>
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
