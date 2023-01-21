import { useState } from "react";
import styled from "styled-components"
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from "@mui/material"

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

  return (
    <Container>
      <Wrapper>
        <Paper style={{width: "50%", padding: "20px"}}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={0}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Wrapper>
    </Container>
  )
}

export default Checkout