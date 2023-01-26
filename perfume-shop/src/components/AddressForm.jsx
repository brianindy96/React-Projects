import React from 'react'
import styled from 'styled-components'
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'
import { Button } from '@mui/material'
const Container = styled.div`
    
`


const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
`

const Inputs = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`



const AddressForm = () => {

    const methods = useForm();

    const handleSubmit = (event, data) =>{
        event.preventDefault();

        console.log(data);
    }


  return (
    <Container>
        <FormProvider onSubmit={(data) => handleSubmit(data)} {...methods}>
        <FormContainer>
            <Inputs>
                <FormInput required name="firstName" label="First Name" />
                <FormInput required name="lastName" label="Last Name" />
                <FormInput required name="address1" label="Address" />
                <FormInput required name="email" label="Email" />
                <FormInput required name="city" label="City" />
                <FormInput required name="zip" label="ZIP/Postal Code" />
            </Inputs>
            <Button style={{height: "40px", flex: "1", margin: "10px 20px"}} variant="contained">Continue</Button>
        </FormContainer>
        </FormProvider>
        
    </Container>
  )
}

export default AddressForm