import React from 'react'
import CartItem from './CartItem'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

const Container = styled.div`
    padding: 20px;
`



const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex: 3;
`


const CartContent = styled.div`
    display: flex;
`

const CartHeading = styled.h2`
    
`

// Summary
const Summary = styled.div`
    flex: 1;
    border: 1px solid #bbbbbb;
    padding: 20px;
    margin: 0 20px;
    border-radius: 10px;
`
const CartFooter = styled.div`
`

const EmptyBtn = styled.button`
    
`

const CheckOutBtn = styled.button`
    
`
const EmptyCartMSG = styled.p`
    
`

const Cart = ({ cart }) => {

    const handleEmptyCart = () => {
        onEmptyCart();
    }

    const renderEmptyMessage = () => {
        if (cart.total_unique_items > 0) {
            return;
        } return (
        <EmptyCartMSG>
            You have no items in your shopping cart, start adding some!
        </EmptyCartMSG>
        )
    }

    const renderTotal = () => (
        <div className="cart__total">
        <p className="cart__total-title">Subtotal:</p>
        <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
        </div>
    );

  return (
    <Container>
        <CartHeading>Your Shopping Cart</CartHeading>
        <CartContent>
            {renderEmptyMessage()}
            <CardContainer>
                {cart.line_items.map((lineItem) => (
                <CartItem
                    item={lineItem}
                    key={lineItem.id}
                />
                ))}
            </CardContainer>
            <Summary>
                {renderTotal()}
                <CartFooter>
                    <EmptyBtn>Empty Cart</EmptyBtn>
                    <CheckOutBtn>Checkout</CheckOutBtn>
                </CartFooter>
            </Summary>
        </CartContent>
        
    </Container>
  )
}

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};

export default Cart