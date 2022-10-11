import React, { useState } from 'react'
import styled from "styled-components";
import { Stepper, Step, StepLabel } from "@mui/material";
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';

const Container = styled.div`
    min-height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 50%;
    box-shadow: 5px 9px 24px -12px rgba(66, 68, 90, 1);

`
const steps = [
    'Shipping Address',
    'Payment Details',
  ];

const Checkout = () => {

    const [activeStep, setActiveStep] = useState(0);

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />
  return (
    <Container>
        <Wrapper>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Wrapper>
    </Container>
  )
}

export default Checkout