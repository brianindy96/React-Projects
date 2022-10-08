import React from 'react'
import styled from "styled-components";
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from "../components/Newsletter"

const Container = styled.div`
    
`

const Wrapper = styled.div`
    
`

const Left = styled.div`
    
`
const Right = styled.div`
    
`
const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Left>

            </Left>
            <Right>

            </Right>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product