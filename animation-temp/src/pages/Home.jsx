import React from 'react'
import styled from "styled-components";
import About from '../components/About';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Container = styled.div`
    
`

const Home = () => {
  return (
    <Container className='main-container'>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
    </Container>
  )
}

export default Home