import { useState } from "react";
import styled from "styled-components"
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from "@mui/material"
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";

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

const Checkout = () => {

  const [activeStep, setActiveStep] = useState(0);

  //Confirmation

  const Confirmation = () => (
    <div>
      Confirmation
    </div>
  )


  // Form component
  const Form = () => activeStep === 0
  ? <AddressForm />
  : <PaymentForm />

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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </Wrapper>
    </Container>
  )
}

export default Checkout