import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    padding: 20px;

`

const FormControls = styled(FormControl)`
    width: 500px;
    margin-bottom: 30px;
    
`
const List = () => {

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
  return (
    <Container >
        <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
        <FormControls >
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
        </FormControls>
        <FormControls >
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>3 Stars</MenuItem>
                <MenuItem value={4}>4 Stars</MenuItem>
                <MenuItem value={5}>5 Stars</MenuItem>

            </Select>
        </FormControls>
    </Container>
  )
}

export default List