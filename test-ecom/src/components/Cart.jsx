import React, { Component } from 'react';
import CartItem from './CartItem';
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
`

const Title = styled.h1`
  margin-left: 20px;
`

const ProductCon = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 2;
  margin: 0px 20px;
`

const Right = styled.div`
  flex: 1;
`

const CartFooter = styled.div`
  
`

const EmptyBtn = styled.button`
  margin: 10px;
`

const CheckoutBtn = styled.button`
  
`

const EmptyMessage = styled.p`
  
`

const TotalContainer = styled.div`
  border: 1px solid lightgrey;
  margin-right: 40px;
  padding: 20px;
`

const TotalTitle = styled.p`
  
`

const TotalPrice = styled.p`
  
`

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <EmptyMessage>
        You have no items in your shopping cart,
        <Link to="/">start adding some here!</Link> 
      </EmptyMessage>
    );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        key={lineItem.id}
        onUpdateCartQty={onUpdateCartQty}
        onRemoveFromCart={onRemoveFromCart}
      />
    ))
  );

  const renderTotal = () => (
    <TotalContainer>
      <TotalTitle>Subtotal:</TotalTitle>
      <TotalPrice>{cart.subtotal.formatted_with_symbol}</TotalPrice>
    </TotalContainer>
  );

  return (
    <Container>
      <Title>Your Shopping Cart</Title>
      {/* { renderEmptyMessage() } */}
      <ProductCon>
        <Left>
          { renderItems() }
        </Left>
        <Right>
          { renderTotal() }
          <CartFooter>
            <EmptyBtn onClick={handleEmptyCart}>Empty cart</EmptyBtn>
            <CheckoutBtn>Checkout</CheckoutBtn> 
          </CartFooter>
        </Right>
        
        
      </ProductCon>
      
      
      
    </Container>
  );
};

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};

export default Cart;
