import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'

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

const ItemId = styled.span`
    color: #575757;
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
    margin: 20px 0px;
`

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


const PaymentForm = ({ shippingData, checkoutToken, backStep, nextStep, onCaptureCheckout}) => {


    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
    
        if (!stripe || !elements) return;
    
        const cardElement = elements.getElement(CardElement);
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
    
        if(error){
          console.log(error)
        } else {
          const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
            shipping: {
              name: "Primary", 
              street: shippingData.address1, 
              town_city: shippingData.city, 
              county_state: shippingData.shippingSubdivision,
              postal_zip_code: shippingData.zip,
              country: shippingData.shippingCountry
            },
            fulfillment: { shipping_method: shippingData.shippingOption },
            payment: {
              gateway: "stripe", 
              stripe: {
                payment_method_id: paymentMethod.id
              }
            }
          }
    
          onCaptureCheckout(checkoutToken.id, orderData);
    
        //   timeout(); 
          
          nextStep();
        }
      }
  
    return (
    <Container>
        <Title>Order Summary</Title>
        {checkoutToken.live.line_items.map((item)=> (
            <Item key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemAmount>
                <ItemDesc>
                    <ItemId>Product ID: {item.product_id}</ItemId>
                    <ItemQty>Quantity: {item.quantity}</ItemQty>
                </ItemDesc>
                <ItemPrice>{item.price.formatted_with_symbol}</ItemPrice>
            </ItemAmount>
        </Item>
        ))}
        <Hr />
        <br />
        <Total>
            <SubTotal>
                <SubTitle>Subtotal:</SubTitle>
                <Cost>{checkoutToken.live.subtotal.formatted_with_symbol}</Cost>
            </SubTotal>
            <SubTotal>
                <SubTitle>Shipping Fee:</SubTitle>
                <Cost>{checkoutToken.live.shipping.price.formatted_with_symbol}</Cost>
            </SubTotal>
            <SubTotal>
                <SubTitle>Total:</SubTitle>
                <Cost><strong>{checkoutToken.live.total.formatted_with_symbol}</strong> </Cost>
            </SubTotal>
        </Total>
        <Hr />
        <Payment>Payment Method</Payment>
        {/* Stripe */}
        <Elements stripe={stripePromise}>
            <ElementsConsumer>
            {({ elements, stripe})=>(
                <form onSubmit={(e)=> handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br /><br />
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <Button variant="outlined" onClick={backStep}>Back</Button>
                    <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                    Pay {checkoutToken.live.subtotal.formatted_with_symbol }
                    </Button>
                </div>
                </form>
            )}
            </ElementsConsumer>
        </Elements>
    </Container>
  )
}

export default PaymentForm