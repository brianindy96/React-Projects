import React from 'react'
import { Button} from '@mui/material'
import { Elements, CardElement, ElementsConsumer } from "@stripe/react-stripe-js"
import { loadStrip } from "@stripe/stripe-js"
import styled from "styled-components";
import Review from './Review';

const Container = styled.div`
  
`
const PaymentForm = ({ checkoutToken }) => {
  return (
    <Container>
        <Review checkoutToken={checkoutToken} />
    </Container>
  )
}

export default PaymentForm