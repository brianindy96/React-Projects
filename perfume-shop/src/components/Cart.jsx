import React from 'react'
import styled from "styled-components"
import CartItem from './CartItem'

const Container = styled.div`
    
`

// const EmptyCart = styled.div`

// `

const FilledCart = styled.div`
    
`

const Title = styled.h3`
    
`
const Cart = ({ cart }) => {
    return (
    <Container>
            <Title>Your Shopping Cart:</Title>
            <FilledCart>
                {cart.line_items.map((lineItem) =>(
                    <CartItem key={lineItem.id} lineItem={lineItem} />
                ))}
            </FilledCart>
    </Container>
  )
}

export default Cart