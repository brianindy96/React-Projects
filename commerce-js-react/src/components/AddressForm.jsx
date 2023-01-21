import { useState } from 'react'
import styled from "styled-components"
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from "@mui/material"
import { useForm, FormProvider } from "react-hook-form"
import FormInput from './FormInput'

const Container = styled.div`
    
`

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingDivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();


  return (
    <Container>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit="">
                <Grid container spacing={3} style={{padding: "20px", display: "flex", justifyContent: "center", gridTemplateColumns: "1fr 1fr", gridGap: "20px"}}>
                    <FormInput required name="firstName" label="First Name" />
                    <FormInput required name="lastName" label="Last Name" />
                    <FormInput required name="address1" label="Address" />
                    <FormInput required name="email" label="Email" />
                    <FormInput required name="city" label="City" />
                    <FormInput required name="zip" label="ZIP/Postal Code" />
                    <Grid item xs={12} sm={6} style={{width: "100%"}}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value="" fullWidth onChange="">
                            <MenuItem key={""} value="">
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value="" fullWidth onChange="">
                            <MenuItem key={""} value="">
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value="" fullWidth onChange="">
                            <MenuItem key={""} value="">
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    </Container>
  )
}

export default AddressForm