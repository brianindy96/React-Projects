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
              <FormInput required name="firstName" label="First Name" />
            </Form>
        </FormProvider>
    </Container>
  )
}

export default AddressForm