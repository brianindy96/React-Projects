import React from 'react'
import styled from "styled-components"
import { List, ListItem, ListItemText } from "@mui/material"

const Container = styled.div`
    
`

const Title = styled.h3`
    
`

const Total = styled.p`
    
`

const Subtotal = styled.p`
    
`
const Review = ({ checkoutToken }) => {
  return (
    <Container>
        <Title>Order Summary: </Title>
        <hr style={{color: "lightgray"}}></hr>
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