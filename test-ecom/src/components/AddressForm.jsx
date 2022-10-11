import React from 'react'
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import FormInput from './FormInput';

const Container = styled.div`
    
`
const Title = styled.h2`
    
`

const Form = styled.form`

`

const FormDiv = styled.div`
    width: 100%;
    display: grid;
    margin-left: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 450px));
    grid-gap: 25px;
`
const AddressForm = () => {
    // gives us all the methods from react-hook-form to use
    const methods = useForm();

    const onSubmit = (data) =>{
      console.log(data)
    }

  return (
    <Container>
        <Title>Shipping Address</Title>
        {/* spreads all the method from react-hook-form */}
        <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
              <FormDiv>
                <FormInput required name="firstName" label="First Name" />         
                <FormInput required name="lastName" label="Last Name"/>          
                <FormInput required name="address" label="Address" />          
                <FormInput required name="email" label="Email" />           
                <FormInput required name="city" label="City" />
                <FormInput required name="zip" label="ZIP/Postal Code" />
              </FormDiv>
            </Form>
        </FormProvider>
    </Container>
  )
}

export default AddressForm