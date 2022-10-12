import React from 'react'
import styled from "styled-components"
import { Divider, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Container = styled.div`
    
`

const Title = styled.h2`
    
`

const OrderRef = styled.h3`
    
`

const Confirmation = () => order.customer ? (
    
)
  return (
    <Container>
        <Title>Thank you for your purchase, Brian Garton</Title> 
        <Divider />
        <OrderRef>Order ref: ref</OrderRef>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </Container>
  )


export default Confirmation