import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 400;
    cursor: pointer;
`

const Bottom = styled.div`
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                
                <TopButton>CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>

            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart