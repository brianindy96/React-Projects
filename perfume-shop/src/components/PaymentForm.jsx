import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
const Container = styled.div`
    
`

const Title = styled.h3`
    margin-bottom: 10px;
    font-size: 1.4rem;
`

const Item = styled.div`
    margin: 20px 5px;
`

const ItemName = styled.h4`
    font-size: 1.2rem;
`

const ItemAmount = styled.div`
    display: flex;
    justify-content: space-between;
`

const ItemDesc = styled.span`
    display: flex;
    flex-direction: column;
`

const ItemPrice = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
`

const ItemQty = styled.span`
    color: #a3a3a3;
`

const ItemSize = styled.span`
    
`

const Hr = styled.hr`
    background-color: lightgrey;
    border: none;
    height: 1px;
`
// Total
const Total = styled.div`
    
`

const SubTotal = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
`

const Cost = styled.span`
    
`

const SubTitle = styled.span`
    font-weight: 800;
`

const Payment = styled.h3`
    margin-top: 10px;
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const PaymentForm = () => {
  return (
    <Container>
        <Title>Order Summary</Title>
        <Item>
            <ItemName>Versace Eros</ItemName>
            <ItemAmount>
                <ItemDesc>
                    <ItemQty>Quantity: 2</ItemQty>
                </ItemDesc>
                
                <ItemPrice>$65.00</ItemPrice>
            </ItemAmount>
        </Item>
        <Item>
            <ItemName>Armani Si</ItemName>
            <ItemAmount>
                <ItemQty>Quantity: 1</ItemQty>
                <ItemPrice>$90.00</ItemPrice>
            </ItemAmount>
        </Item>
        <Item>
            <ItemName>Keyboard</ItemName>
            <ItemAmount>
                <ItemQty>Quantity: 2</ItemQty>
                <ItemPrice>$65.00</ItemPrice>
            </ItemAmount>
        </Item>
        <Hr />
        <br />
        <Total>
            <SubTotal>
                <SubTitle>Subtotal:</SubTitle>
                <Cost>$1000.00 </Cost>
            </SubTotal>
            <SubTotal>
                <SubTitle>Shipping Fee:</SubTitle>
                <Cost>$20.00 </Cost>
            </SubTotal>
            <SubTotal>
                <SubTitle>Total:</SubTitle>
                <Cost><strong>$1020.00</strong> </Cost>
            </SubTotal>
        </Total>
        <Hr />
        <Payment>Payment Method</Payment>
        {/* Stripe */}
        
        <BtnContainer>
            <Button variant="outlined" style={{width: "100px"}}>Back</Button>
            <Button variant="contained" color="primary">PAY $1020.00</Button>
        </BtnContainer>
    </Container>
  )
}

export default PaymentForm