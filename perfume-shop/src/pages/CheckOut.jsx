import React from 'react'
import styled from 'styled-components'
import Stepper from '@mui/material/Stepper';
import { Typography, Paper } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddressForm from '../components/AddressForm';

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

const CheckOut = () => {
  return (
    <Container>
        <Wrapper>
            <Paper sx={{ padding: "20px", width: "720px"}}>
                <Typography variant="h4" align="center" gutterBottom>Checkout</Typography>
                <Stepper activeStep={0} style={{marginBottom: "20px"}}>
                    {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                {/* <AddressForm or PaymentForm */}
                <AddressForm />
            </Paper>
        </Wrapper>
    </Container>
  )
}

export default CheckOut