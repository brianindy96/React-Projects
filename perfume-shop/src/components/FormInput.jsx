import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

const FormInput = ({ name, label}) => {

  const { control } = useForm();

  return (
    <Grid item xs={12} sm={6} style={{width: "300px"}}>
        <Controller
            control={control}
            fullWidth
            name={name}
            label={label}
            render= {({field}) => (
              <TextField
              style={{padding: "0 5px", margin: "10px", width: "100%"}} 
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