import React from 'react'
import styled from "styled-components"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from "../responsive"

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
    ${mobile({padding: "10px 0"})}
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 400;
    cursor: pointer;
    ${mobile({padding: "5px"})}

    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => 
        props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    ${mobile({display: "flex"})}

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
    ${mobile({display: "none"})}

    
`

// Bottom

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({flexDirection: "column"})}

`


const Info = styled.div`
    flex: 3;
`


// Product 
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}

`

// ProductDetails

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({flexDirection: "column"})}

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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobile({marginBottom: "10px"})}

`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.span`
    margin: 0 15px;
    font-size: 24px;
    font-weight: 300;
`

const ProductPrice = styled.span`
    font-size: 24px;
    font-weight: 200;
    ${mobile({fontWeight: "700"})}

`

// Line Break
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

// Summary

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    margin-left: 20px;
    ${mobile({width: "90%", marginLeft: "0"})}

`

const SummaryTitle = styled.h1`
    margin-bottom: 10px;
    font-weight: 200;
    ${mobile({fontSize: "24px", marginBottom: "0"})}

`

// Summary Item

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "800"};
    font-size: ${props=> props.type === "total" && "24px"}
   
`

const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
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
                    <Product>
                        <ProductDetail>
                            <Image src="/img/shoe.png" />
                            <Details>
                                <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID: </b>98342345232</ProductId>
                                <ProductColour color="brown"/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                <RemoveIcon />
                            </ProductAmountContainer>
                            <Hr></Hr>
                            <ProductPrice>$ 30.00</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="/img/shoe.png" />
                            <Details>
                                <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID: </b>98342345232</ProductId>
                                <ProductColour color="brown"/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                <RemoveIcon />
                            </ProductAmountContainer>
                            <Hr></Hr>
                            <ProductPrice>$ 30.00</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart