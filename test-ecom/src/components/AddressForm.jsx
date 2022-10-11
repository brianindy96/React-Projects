import React from 'react'
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
    
`
const Title = styled.h2`
    
`

const Form = styled.form`
    
`
const AddressForm = () => {
    const methods = useForm();
  return (
    <Container>
        <Title>Shipping Address</Title>
        <FormProvider {...methods}>
            <Form>

            </Form>
        </FormProvider>
    </Container>
  )
}

export default AddressForm