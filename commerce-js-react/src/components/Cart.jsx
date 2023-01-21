import React from 'react'
import CartItem from './CartItem'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
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

const ReturnHome = styled.button`
    padding: 2px 10px;

`

const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Cart = ({ cart, handleEmptyCart, handleUpdateCartQty, handleRemoveFromCart }) => {


    const renderEmptyMessage = () => {
        if (cart.total_unique_items > 0) {
            return;
        } return (
        <EmptyContainer>
            <EmptyCartMSG style={{marginBottom: "10px"}}>
                You have no items in your shopping cart, start adding some!
            </EmptyCartMSG>
            <Link to="/">
                    <ReturnHome>GO SHOPPING</ReturnHome>
            </Link>
        </EmptyContainer>
            
        )
    };

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
                    onUpdateCartQty={handleUpdateCartQty}
                    onRemoveFromCart={handleRemoveFromCart}
                />
                ))}
            </CardContainer>
            <Summary>
                {renderTotal()}
                <CartFooter>
                    <EmptyBtn onClick={handleEmptyCart}>Empty Cart</EmptyBtn>
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