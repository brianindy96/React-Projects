import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Stepper from '@mui/material/Stepper';
import { Typography, Paper, Button, CircularProgress } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import commerce from '../lib/commerce';
import { Link, useNavigate } from 'react-router-dom';
import { mobileL, tablet } from '../responsive';
const steps = [
    'Address Forms',
    'Payment Method',
];

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #f3f3f3;
    display: flex;

`


const Wrapper = styled.div`
    min-height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

`

const Hr = styled.hr`
    background-color: lightgrey;
    border: none;
    height: 1px;
`

const DisplayScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`




const CheckOut = ({ cart, order, onCaptureCheckout, error }) => {

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false);

    
    const Form = () => activeStep === 0 ? 
        <AddressForm 
        next={next} 
        checkoutToken={checkoutToken}
        /> 
        : 
        <PaymentForm 
        timeout={timeout}
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
                <Typography variant="h6" style={{margin: "10px 0px"}} >Thank you for your purchase: <strong> {order.customer.firstname} {order.customer.lastname}</strong> </Typography>
                <Hr />
                <Typography style={{margin: "10px 0px"}}><strong>Order Ref: </strong> {order.customer_reference}</Typography>
                <Link to="/">
                    <Button variant="outlined">Back to home</Button>
                </Link>
            </>
        ) : isFinished ? (
            <>
                <div>
                   <Typography variant="h6" style={{margin: "20px 0px"}}  gutterBottom>Thank you for your purchase!</Typography>
                   <Hr />
               </div>
               <br />
               <Button component={Link} to="/" style={{margin: "20px 0px", padding: "5px"}} variant="outlined" type="button">Back to Home</Button>
            </> 
        ): (
             <div style={{textAlign: "center"}}>
               <CircularProgress />
             </div>
           );

        if(error){
             <>
               <Typography variant="h5">Error: {error}</Typography>
               <br />
         
             </>
        }

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

    // setTimeout
    const timeout = () => {
        setTimeout(() => {
        setIsFinished(true);
        }, 3000);
    }

    const [loading, setLoading] = useState(false)    

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
        
        setLoading(true);
        generateToken();
        setTimeout(() => {
            setLoading(false);
        }, 6000);
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
                    {loading === true && (
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <CircularProgress />
                    </div>
                    )}
                    {activeStep === steps.length ? 
                    <Confirmation order={order} /> 
                    : (checkoutToken && !loading) && 
                    <Form cart={cart} checkoutToken={checkoutToken} /> }
            </Paper>
        </Wrapper>
    </Container>
  )
}

export default CheckOut