import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer"
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div`
    
`

const Wrapper = styled.div`
    min-height: 80vh;
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

// --------------------TOP------------------------
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    border: ${(props)=> props.type === "filled" && "none"};
    background-color:  ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
// ------------------------BOTTOM---------------------------

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`
// ----------------Info------------------------
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
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

const ProductColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${props => props.color}
`

const ProductSize = styled.span`
    
`

const PriceDetail = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 8px;
`

const ProductAmount = styled.div`
    font-size: 20px;
    margin: 5px;
`

const ProductPrice = styled.p`
    margin-top: 10px;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

// ---------------- Summary -------------------
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h2`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`

const SummaryItemText = styled.span`
    margin: 0 20px;
    font-weight: ${(props) => props.type === "total" ? "800" : "200"};
    /* IF ITS TOTAL, IT WILL BE 2REM */
    font-size: ${(props) => props.type === "total" && "1.2rem"};
`

const SummaryItemPrice = styled.span`
    font-weight: ${(props) => props.type === "total" && "800"};
`

const Button = styled.button`
        width: 100%;
        font-weight: 800;
        background-color: black;
        padding: 5px;
        color: white;
        cursor: pointer;
`


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="/img/shoe.png" />
                            <Details>
                                <ProductName><b>JESSIE THUNDER SHOES</b></ProductName>
                                <ProductId><b>ID: </b></ProductId>
                                <ProductColor color="brown"/>
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <b><Add style={{margin: "0 5px", cursor: "pointer",}}/></b>
                                <ProductAmount>2</ProductAmount>
                                <b><Remove style={{margin: "0 5px", cursor: "pointer"}} /></b>
                            </ProductAmountContainer>
                            <ProductPrice>30,0 EUR</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="/img/shirt.png" />
                            <Details>
                                <ProductName><b>PUSSY MAGNET T-SHIRT</b></ProductName>
                                <ProductId><b>ID: </b></ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <b><Add style={{margin: "0 5px", cursor: "pointer",}}/></b>
                                <ProductAmount>2</ProductAmount>
                                <b><Remove style={{margin: "0 5px", cursor: "pointer"}} /></b>
                            </ProductAmountContainer>
                            <ProductPrice>30,0 EUR</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>60 EUR</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>5,90 EUR</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-5,90 EUR</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Total</SummaryItemText>
                        <SummaryItemPrice type="total">60 EUR</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECK OUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart