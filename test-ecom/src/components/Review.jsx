import React from 'react'
import styled from "styled-components"
import { List, ListItem, ListItemText, Divider } from "@mui/material"

const Container = styled.div`
    
`

const Title = styled.h3`
    margin-left: 20px;
`

const Total = styled.p`
    
`

const Subtotal = styled.p`
    
`
const Review = ({ checkoutToken, backStep }) => {
  return (
    <Container>
        <Title>Order Summary: </Title>
        <Divider />
        <List>
            {checkoutToken.live.line_items.map((product) => (
                <ListItem key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                    <Total>{product.line_total.formatted_with_symbol}</Total>
                </ListItem>
            ))}
            <ListItem >
                <ListItemText primary="Total:" />
                <Subtotal>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </Subtotal>
            </ListItem>
        </List>
    </Container>
  )
}

export default Review