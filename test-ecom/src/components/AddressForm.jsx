import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import FormInput from './FormInput';
import commerce from "../lib/commerce.js"

import { Select, SelectChangeEvent, MenuItem, InputLabel} from "@mui/material";

const Container = styled.div`

`
const Title = styled.h2`
    
`

const Form = styled.form`

`

const BasicDetails = styled.div`
    width: 100%;
    display: grid;
    margin-left: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 450px));
    grid-gap: 25px;
`

const SelectCon = styled.div`
  
`




const AddressForm = ({ checkoutToken }) => {
    // gives us all the methods from react-hook-form to use
    const methods = useForm();
    

    // States for the Select Options
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    // const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    // const [shippingSubdivision, setShippingSubdivision] = useState('')
    // const [shippingOptions, setShippingOptions] = useState([])
    // const [shippingOption, setShippingOption] = useState('')
    
    const fetchShippingCountries = async(checkoutTokenId) => {
      const countries = await commerce.services.localeListShippingCountries(checkoutTokenId);

      // after we receive checkoutToken, we receive countries list as OBJECTS
      console.log(countries);
      // {CN, TH, JP, LA, SG}

      console.log(Object.values(countries.countries));
      // ["CN", "TH", "JP", "LA", "SG"]
      setShippingCountries(Object.values(countries.countries));

      
    }

    const countries = Object.entries(shippingCountries).map(([code,name]) => (
      { id: code, label: name}
    ));


    useEffect(() => {
      fetchShippingCountries(checkoutToken.id);
    }, [])

    // console.log(shippingCountry);
    // console.log(shippingCountries);
  return (
    <Container>
        <Title>Shipping Address</Title>
        {/* spreads all the method from react-hook-form */}
        <FormProvider {...methods}>
            <Form >
              <BasicDetails>
                <FormInput required name="firstName" label="First Name" />         
                <FormInput required name="lastName" label="Last Name"/>          
                <FormInput required name="address" label="Address" />          
                <FormInput required name="email" label="Email" />           
                <FormInput required name="city" label="City" />
                <FormInput required name="zip" label="ZIP/Postal Code" />
              </BasicDetails>
              <SelectCon>
                <InputLabel>Shipping Country</InputLabel>
                <Select value={shippingCountry} fullWidth onChange={(e)=> setShippingCountry(e.target.value)}>
                  {countries.map((country)=>(
                    <MenuItem style={{textAlign: "center"}} key={country.id} value={country.code}>
                      {country.label}
                    </MenuItem>
                  ))};
                 
                </Select>
              </SelectCon>
              {/* <SelectCon>
                <InputLabel>Shipping Subdivision</InputLabel>
                <Select value='' fullWidth onChange=''>
                  <MenuItem key='' value=''>
                    Select Me
                  </MenuItem>
                </Select>
              </SelectCon>
              <SelectCon>
                <InputLabel>Shipping City</InputLabel>
                <Select value='' fullWidth onChange=''>
                  <MenuItem key='' value=''>
                    Select Me
                  </MenuItem>
                </Select>
              </SelectCon> */}
            </Form>
        </FormProvider>
    </Container>
  )
}

export default AddressForm