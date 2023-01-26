import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
`

const FormInput = styled.input`
    margin: 10px;
`

const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 100%;
    justify-content: space-around;
`

const AddressForm = () => {
  return (
    <Container>
        <FormContainer action="#">
            <FormInput required name="firstName" label="First Name" />
            <FormInput required name="lastName" label="Last Name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP/Postal Code" />
        </FormContainer>
    </Container>
  )
}

export default AddressForm