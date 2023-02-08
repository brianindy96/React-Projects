import React from 'react'
import { Button, Divider} from '@mui/material'
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import styled from "styled-components";
import Review from './Review';

const Container = styled.div`
  text-align: start;
`

const PaymentTitle = styled.h3`
  margin: 20px 0;
  margin-left: 20px;
`
const BtnCon = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`

// STRIPE

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ addStep, checkoutToken, backStep, onCaptureCheckout, shippingData }) => {
  
  const handleSubmit = async (e, elements, stripe) =>{
    e.preventDefault();

    if(!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement })
 
    if(error){
      console.log(error);
    } else{
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { 
          firstname: shippingData.firstName, 
          lastname: shippingData.lastName, 
          email: shippingData.email
        },
        shipping: { 
          name: "Primary", 
          street: shippingData.address, 
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: {shipping_method: shippingData.shippingOption},
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id
          },
        },
      }

      onCaptureCheckout(checkoutToken.id, orderData);

      addStep();
    }
  }

  return (
    <Container>
        {/* <Review checkoutToken={checkoutToken} /> */}
        <Divider />
        <PaymentTitle>Payment Method:</PaymentTitle>

        {/* Stripe Elements */}
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {/* Callback */}
            {({ elements, stripe }) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br />
                <br />
                <BtnCon>
                  <Button variant="outlined" onClick={backStep}>back</Button>
                  <Button type="submit" disabled={!stripe} variant="contained">
                    pay { checkoutToken.live.subtotal.formatted_with_symbol}
                  </Button>
                </BtnCon>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
    </Container>
  )
}

export default PaymentForm