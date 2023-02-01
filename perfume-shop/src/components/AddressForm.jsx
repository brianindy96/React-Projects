import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import commerce from '../lib/commerce'

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

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    text-align: center;
`

const SelectItem = styled.div`
    margin-top: 20px;
`

const Hr = styled.hr`
    background-color: #f3f3f3;
    height: 2px;
    border: none;
`



const AddressForm = () => {

    const methods = useForm();

    const handleSubmit = (event, data) =>{
        event.preventDefault();

        console.log(data);
    }

    // States of Shipping Choices
    // shipping countries
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');

    // shipping city
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');

    // shipping options
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');


    // Fetch Shipping Countries

    const fetchShippingCountries = async (checkoutTokenId) => {
        const response = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(response);
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
                <SelectContainer>
                    <SelectItem>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={""} fullWidth onChange>
                            <MenuItem key={""} value={""}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </SelectItem>
                    <SelectItem>
                        <InputLabel>Shipping City</InputLabel>
                        <Select value={""} fullWidth onChange>
                            <MenuItem key={""} value={""}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </SelectItem>
                    <SelectItem>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={""} fullWidth onChange>
                            <MenuItem key={""} value={""}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </SelectItem>
                </SelectContainer>
            </Inputs>
            <Button style={{height: "40px", flex: "1", margin: "20px", marginTop: "20px"}} variant="contained">Continue</Button>
        </FormContainer>
        </FormProvider>
        
    </Container>
  )
}

export default AddressForm