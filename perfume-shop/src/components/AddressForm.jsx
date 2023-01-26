import React from 'react'
import styled from 'styled-components'
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'

const Container = styled.div`
    
`


const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    justify-content: space-around;
`

const AddressForm = () => {

    const methods = useForm();


  return (
    <Container>
        <FormProvider {...methods}>
        <FormContainer>
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP/Postal Code" />
        </FormContainer>
        </FormProvider>
        
    </Container>
  )
}

export default AddressForm