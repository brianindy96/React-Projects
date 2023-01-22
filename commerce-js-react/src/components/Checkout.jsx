import { useState, useEffect  } from "react";
import styled from "styled-components"
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from "@mui/material"
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import commerce from "../lib/commerce"
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`

const steps = [
  'Shipping address',
  'Payment details',
];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {

  const navigate = useNavigate();

  // States
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  //Confirmation

  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, firstName lastName!</Typography>
        <Divider />
        <Typography variant="subtitle2">Order ref: ref</Typography>
      </div>
      <br />
      <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </>
  ) : (
    <div>
      <CircularProgress />
    </div>
  ));

  if(error){
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br />

    </>
  }


  // Form component
  const Form = () => activeStep === 0
  ? <AddressForm checkoutToken={checkoutToken} next={next} />
  : <PaymentForm nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep}/>


  // useEffect
  
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

        // console.log(token);

        setCheckoutToken(token);
        

      } catch(error){
        navigate.pushState('/');
      }
    }

    generateToken();
  
  }, [cart])

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

  const next = (data) => {
    setShippingData(data);

    nextStep();
    console.log(activeStep);
  }




  return (
    <Container>
      <Wrapper>
        <Paper style={{width: "50%", padding: "20px"}}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} style={{marginBottom: "20px"}}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Only renders form if checkoutToken exists */}
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </Wrapper>
    </Container>
  )
}

export default Checkout