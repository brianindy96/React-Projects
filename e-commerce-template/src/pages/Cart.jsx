import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    min-height: 80vh;
`

const Title = styled.h1`
    
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your Cart</Title>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart