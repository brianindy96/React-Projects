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
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 400;
    cursor: pointer;

    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => 
        props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

// Bottom

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`


const Info = styled.div`
    flex: 3;
`

const Summary = styled.div`
    flex: 1;
`

// Product 
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

// ProductDetails

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 250px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
 
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`

const ProductColour = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    box-shadow: 8px 8px 24px -20px rgba(66, 68, 90, 1); 
`

const ProductSize = styled.span`
    
`

// Price

const PriceDetail = styled.div`
    flex: 1;
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
                <TopTexts>
                    <TopText>Shopping Cart(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    Info
                    <Product>
                        <ProductDetail>
                            <Image src="/img/shoe.png" />
                            <Details>
                                <ProductName><b>Product: </b>Jessie Thunder Shoes</ProductName>
                                <ProductId><b>ID: </b>98342345232</ProductId>
                                <ProductColour color="brown"/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            price
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>Summary:</Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart