import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Stepper from '@mui/material/Stepper';
import { Typography, Paper } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import commerce from '../lib/commerce';

const steps = [
    'Address Forms',
    'Payment Method',
];

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #f3f3f3;
`


const Wrapper = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

const CheckOut = ({ cart }) => {

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const Form = () => activeStep === 0 ? 
        <AddressForm /> : <PaymentForm />

    // CheckOutTokenId

    const generateCheckoutToken = async () => {
        if(cart.line_items.length){
            const token = await commerce.checkout.generateToken(cart.id, {  type: "cart" });

            setCheckoutToken(token);
        } else{
            console.log("token was not generated")
        }
    }


    useEffect(() => {
        generateCheckoutToken();

        console.log(checkoutToken);
        
    }, [])
    
    

    

  return (
    <Container>
        <Wrapper>
            <Paper sx={{ padding: "20px", width: "720px"}}>
                <Typography variant="h4" align="center" gutterBottom>Checkout</Typography>
                <Stepper activeStep={activeStep} style={{marginBottom: "20px"}}>
                    {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <Form />
            </Paper>
        </Wrapper>
    </Container>
  )
}

export default CheckOut