import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Stepper from '@mui/material/Stepper';
import { Typography, Paper, Button } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import commerce from '../lib/commerce';
import { Link } from 'react-router-dom';

const steps = [
    'Address Forms',
    'Payment Method',
];

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #f3f3f3;
    
`


const Wrapper = styled.div`
    min-height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`



const CheckOut = ({ cart, order, onCaptureCheckout, error }) => {

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    
    const Form = () => activeStep === 0 ? 
        <AddressForm 
        next={next} 
        checkoutToken={checkoutToken}
        /> 
        : 
        <PaymentForm 
        cart={cart}
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        error={error}
        />

    // Confirmation

    const Confirmation = () => order.customer ? (
            <>
                <h2>Confirmation</h2>
                <p>Thank you for your purchase: {order.customer.firstName}</p>
                <Link to="/">
                    <Button variant="outlined">Back to home</Button>
                </Link>
            </>
            
        ) : (
            <>
                <div className='circle'></div>
            </>
        );

    // Next Btn

    const nextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const backStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    // data comes from AddressForm, then passed into ShippingData
    // passes the shippingData to PaymentForm
    const next = (data) => {
        setShippingData(data);
        console.log(data);

        nextStep();
    }

    



    useEffect(() => {
        const generateToken = async () => {
          try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
            // console.log(token);
    
            setCheckoutToken(token);
            
    
          } catch(error){
            if (activeStep !== steps.length) navigate('/');
          }
        }
    
        generateToken();

      
      }, [cart])
    
    

    

  return (
    <Container>
        <Wrapper>
            <Paper sx={{ padding: "20px", width: "720px", margin: "20px 0px"}}>
                <Typography variant="h4" align="center" gutterBottom>Checkout</Typography>
                <Stepper activeStep={activeStep} style={{marginBottom: "20px"}}>
                    {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form cart={cart} checkoutToken={checkoutToken} /> }
            </Paper>
        </Wrapper>
    </Container>
  )
}

export default CheckOut