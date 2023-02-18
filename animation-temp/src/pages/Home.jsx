import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import About from '../components/About';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import useLocoScroll from '../hooks/useLocoScroll';

const Container = styled.div`
    
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Home = () => {

  const [preLoader, setPreloader] = useState(true);

  useLocoScroll(!preLoader);
  
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000)
  }, [])
  

  return (
    <>
    {preLoader ? (
      <LoaderWrapper className="loader-wrapper absolute">
        <h1>Flirty Flowers</h1>
        <h2>Rio de Janerio</h2>
      </LoaderWrapper>
    ) : (
      <Container 
      className='main-container'
      id='main-container'
      // Container wrap for locomotive
      data-scroll-container
      >
        <Navbar />
        <Header title="Art Objects" />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </Container>
    )}
    </>
  )
}

export default Home