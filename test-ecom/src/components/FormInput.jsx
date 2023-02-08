import React from 'react'
import styled from "styled-components"
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from '@mui/material';

const Container = styled.div`

`

const FormInput = ({ name, label }) => {

  const { control } = useFormContext();


  return (
    <Container>
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
    </Container>
  )
}

export default FormInput