import React from 'react'
import styled from "styled-components"
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from '@mui/material';

const FormInput = ({ name, label }) => {

  const { control } = useFormContext();

  return (
    <Grid>
        <Controller 
          control={control}
          name={name}
          label={label}
          required
          defaultValue=""
          render= {({field}) => (
            <TextField
            style={{padding: "0", margin: "0", width: "100%"}} 
            {...field}
            label={label}
            required
            name={name} 
            />
          )}
        />
    </Grid>
  )
}

export default FormInput