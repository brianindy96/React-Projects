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

const stripePromise = loadStripe('...');

const PaymentForm = ({ checkoutToken, backStep }) => {
  return (
    <Container>
        <Review checkoutToken={checkoutToken} />
        <Divider />
        <PaymentTitle>Payment Method:</PaymentTitle>

        {/* Stripe Elements */}
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {/* Callback */}
            {({ elements, stripe }) => (
              <form>
                <CardElement />
                <br />
                <br />
                <BtnCon>
                  <Button variant="outlined" onClick={backStep}>back</Button>
                  <Button variant="contained">
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