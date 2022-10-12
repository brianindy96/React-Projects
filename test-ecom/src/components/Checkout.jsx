import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Stepper, Step, StepLabel, Divider, Button, CircularProgress } from "@mui/material";
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';
import commerce from "../lib/commerce"
import { Link, useNavigate } from 'react-router-dom';

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

// --------------CONFIRMATION STYLES -----------------------

const Summary = styled.div`
    
`

const SumTitle = styled.h2`
    font-weight: 400;

`

const OrderRef = styled.h3`
    font-weight: 400;
`
const CircleCon = styled.div`
    
`

const ErrorMessage = styled.h3``

const steps = [
    'Shipping Address',
    'Payment Details',
];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    //
    const navigate = useNavigate();
    // fetch checkoutTokenId
    useEffect(() => {
      const generateToken = async () => {
        try{
            const token = await commerce.checkout.generateToken(cart.id,{ type: 'cart' });

            // console.log(token);

            setCheckoutToken(token);
        } catch (error){
            navigate.pushState('/');
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
    
    // -------------------- CONFIRMATION------------------------

    let Confirmation = () => order.customer ? (
        <>
            <Summary>
                <SumTitle>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</SumTitle>
                <Divider />
                <OrderRef>Order Ref: {order.customer_reference}</OrderRef>
            </Summary>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    ) : (
        <>
            <CircleCon>
                <CircularProgress />
            </CircleCon>
        </>
    );

    // FROM APP.js
    if(error){
        <>
            <ErrorMessage>Error: {error}</ErrorMessage>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
        </>
    }

    // -----------------------FORM-----------------------

    const Form = () => activeStep === 0 ? 
    <AddressForm checkoutToken={checkoutToken} next={next} /> 
    // sends shippingData from AddressForm to Paymentform
    : <PaymentForm onCaptureCheckout={onCaptureCheckout} addStep={addStep} backStep={backStep} shippingData={shippingData} checkoutToken={checkoutToken} />

    // HOW REACT FLOW
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