import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Stepper, Step, StepLabel } from "@mui/material";
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';
import commerce from "../lib/commerce"

const Container = styled.div`
    min-height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Wrapper = styled.div`
    margin-top: 30px;
    padding: 20px;
    width: 50%;
    box-shadow: 5px 9px 24px -12px rgba(66, 68, 90, 1);
    margin-bottom: 30px;

`
const steps = [
    'Shipping Address',
    'Payment Details',
  ];

const Checkout = ({ cart }) => {

    const [activeStep, setActiveStep] = useState(1);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({})

    // fetch checkoutTokenId
    useEffect(() => {
      const generateToken = async () => {
        try{
            const token = await commerce.checkout.generateToken(cart.id,{ type: 'cart' });

            // console.log(token);

            setCheckoutToken(token);
        } catch (error){

        }
      };

      generateToken();
    //   the token has to be recreated, everytime the cart updates
    }, [cart]);

    const addStep = () => setActiveStep((prevStep) => prevStep + 1);
    const backStep = () => setActiveStep((prevStep) => prevStep - 1);

    const next = (data) => {
        setShippingData(data);

        addStep();
    };
    

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0 ? 
    <AddressForm checkoutToken={checkoutToken} next={next} /> 
    // sends shippingData from AddressForm to Paymentform
    : <PaymentForm backStep={backStep} shippingData={shippingData} checkoutToken={checkoutToken} />

    // React Flow
    // RENDER JSX => Useeffect 
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
            {/* IF WE HAVE THE CHECKOUT TOKEN THEN RUNS THE FORM component */}
            {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Wrapper>
    </Container>
  )
}

export default Checkout