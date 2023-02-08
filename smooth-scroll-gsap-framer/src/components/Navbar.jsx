import React, { useEffect } from 'react'
import styled from "styled-components"
import { gsap } from "gsap";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: 'Syncopate', sans-serif;
    color: #464646;
    font-weight: 600;
    text-transform: uppercase;

`


const Navbar = () => {

  useEffect(() => {
    
    gsap.to(
      ".navbar", { 
        duration: 2,
        y: 50,
      }); 
    }, [])
  
  
    
  return (
    <Container className='navbar' data-scroll-section>
        <div>menu</div>
        <div>Flirty Flowers</div>
        <div>cart</div>
    </Container>
  )
}

export default Navbar