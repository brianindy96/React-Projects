import { useRef, useState, useEffect } from 'react'
import './App.css'
import About from './components/About'
import CustomCursor from './components/CustomCursor'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Navbar from './components/Navbar'
import styled from 'styled-components'

import useLocoScroll from './hooks/useLocoScroll'


const Container = styled.div`
    padding: 0 5vw;
`

const LoaderWrapper = styled.div`
    background-color: #191919;
    position: absolute;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const LoaderTitle = styled.h1`
    color: #dbd8d6;
    font-size: 8rem;
    margin-bottom: 50px;
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
`

const LoaderSubtitle = styled.h2`
    color: #dbd8d6;
    font-size: 1.7rem;
    font-family: "Bodoni Moda", sans-serif;
    font-style: italic;

`


function App() {

  //--------------------- LOADER------------------------------------
  // Preloader
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

  // Preloader timer
  const [timer, setTimer] = useState(4);

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useEffect(() => {
    id.current = window.setInterval(()=>{
      setTimer((timer)=> timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if(timer === 0){
      clear();
    }
  }, [timer])
  

  return (
    <>
      <CustomCursor />
      {preloader ? (
        <LoaderWrapper className='loader-wrapper absolute'>
          <LoaderTitle>Flirty Flowers</LoaderTitle>
          <LoaderSubtitle>Chiang Mai</LoaderSubtitle>
        </LoaderWrapper>
      ) : (
      <Container className='main-container' id='main-container'
      data-scroll-container
      >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
      </Container>
      )}
      
      
    </>
  )
}

export default App
