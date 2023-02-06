import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'
import { Button, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import commerce from '../lib/commerce'
import { Link } from 'react-router-dom'

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

const BtnContainer = styled.div`
    display: flex;
    align-items: center;
`



const AddressForm = ({ cart, checkoutToken, next }) => {

    const methods = useForm();

    // States of Shipping Choices
    // shipping countries
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));

    // shipping city
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');

    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}));

    // shipping options
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))


    // Fetch Shipping Countries

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);

        setShippingCountry(Object.keys(countries)[0])
    }

    // Fetch Subdivisions

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);

        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    // Fetch Options

    const fetchShippingOptions = async(checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
    
        setShippingOptions(options);

        setShippingOption(options[0].id);
    }

    // useEffect
    useEffect(() => {
      fetchShippingCountries(checkoutToken.id)

    }, [])

    useEffect(() => {
        // if there is shippingCountries then fetch subdivisions
        if(shippingCountry) fetchSubdivisions(shippingCountry)

    }, [shippingCountry])

    useEffect(() => {
        // if there is shippingCountries then fetch subdivisions
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)

    }, [shippingSubdivision])
    

        
  return (
    <Container>
        <FormProvider {...methods}>
            {/* Submits the form, takes the data through next() */}
        <FormContainer onSubmit={methods.handleSubmit((data)=> next({ ...data, shippingCountry, shippingSubdivision, shippingOption}))}>
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
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                            {countries.map((country)=>(
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>   
                            ))}
                            </Select>
                    </SelectItem>
                    <SelectItem>
                        <InputLabel>Shipping City</InputLabel>
                        <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                            {subdivisions.map((subdivision)=>(
                                <MenuItem key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                                </MenuItem>   
                            ))}
                            </Select>
                    </SelectItem>
                    <SelectItem>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                            {options.map((option)=>(
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>   
                            ))}
                        </Select>
                    </SelectItem>
                </SelectContainer>
            </Inputs>
            <BtnContainer>
            <Link to="/cart">
                <Button style={{height: "40px", flex: "1", margin: "20px", marginTop: "20px"}} variant="outlined">Back to Cart</Button>
            </Link>
            <Button type="submit" style={{height: "40px", flex: "1", margin: "20px", marginTop: "20px"}} variant="contained">Next</Button>
            </BtnContainer>
        </FormContainer>
        </FormProvider>
        
    </Container>
  )
}

export default AddressForm