import { useState, useEffect } from 'react'
import styled from "styled-components"
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from "@mui/material"
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'
import commerce from '../lib/commerce'
import { Link } from 'react-router-dom'

const Container = styled.div`

`

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}));
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))

    // console.log(shippingOptions);

    const methods = useForm();

    // Fetch Shipping Countries

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

        // Objects
        // console.log(countries);
        setShippingCountries(countries);
        // Arrays
        // console.log(Object.keys(countries));
        setShippingCountry(Object.keys(countries)[0]);

    }

    // Fetch Subdivisions

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);

        // console.log(subdivisions);

        setShippingSubdivision(Object.keys(subdivisions)[0]);

        // console.log(Object.keys(subdivisions)[0])
    }

    // Fetch Shipping Options

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
    
        // console.log(options)
        setShippingOptions(options);

        // console.log(options[0].id);
        setShippingOption(options[0].id);
    }

    // UseEffect
    useEffect(() => {
      fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if(shippingCountry) fetchSubdivisions(shippingCountry);
        
        // whenever our shipping country changes, recall useEffect
    }, [shippingCountry])

    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])
    
    

  return (
    <Container>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data)=> next({ ...data, shippingCountry, shippingSubdivision, shippingOption}))}>
                <Grid container spacing={3} style={{padding: "20px", display: "flex", justifyContent: "center", gridTemplateColumns: "1fr 1fr", gridGap: "20px"}}>
                    <FormInput required name="firstName" label="First Name" />
                    <FormInput required name="lastName" label="Last Name" />
                    <FormInput required name="address1" label="Address" />
                    <FormInput required name="email" label="Email" />
                    <FormInput required name="city" label="City" />
                    <FormInput required name="zip" label="ZIP/Postal Code" />
                    <Grid item xs={12} sm={6} style={{width: "100%"}}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                            {countries.map((country) => (
                                <MenuItem style={{textAlign: "center"}} key={country.id} value={country.id}>
                                    {country.label}
                              </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                            {subdivisions.map((subdivision) => (
                                <MenuItem style={{textAlign: "center"}} key={subdivision.id} value={subdivision.id}>
                                    {subdivision.label}
                              </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                           {options.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                           ))} 
                        </Select>
                    </Grid>
                </Grid>
                <br></br>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                <Button type="submit" variant="contained" color="primary">Next</Button>

                </div>
            </form>
            
        </FormProvider>
    </Container>
  )
}

export default AddressForm