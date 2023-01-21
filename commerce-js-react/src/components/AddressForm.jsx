import React from 'react'
import styled from "styled-components"
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from "@mui/material"
import { useForm, FormProvider } from "react-hook-form"


const Container = styled.div`
    
`

const AddressForm = () => {

    const methods = useForm();


  return (
    <Container>
        <Typography variant="h6" gutterBottom>Shipping Address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={""}>
                <Grid container spacing={3}>

                </Grid>
            </form>
        </FormProvider>
    </Container>
  )
}

export default AddressForm