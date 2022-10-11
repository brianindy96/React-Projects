import React from 'react';
import CartItem from './CartItem';
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

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
  text-align: center;
  flex: 2;
  margin: 0px 20px;
`

const Right = styled.div`
  flex: 1;
`

const CartFooter = styled.div`
  margin-top: 10px;
  display: flex;
`

const EmptyMessage = styled.p`
    font-size: 1.3rem;
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
      <ProductCon>
        <Left>
          { renderEmptyMessage() }
          { renderItems() }
        </Left>
        <Right>
          { renderTotal() }
          <CartFooter>
            <Button style={{padding: "2px 5px", margin: "0 10px"}} variant="contained" color="error" onClick={handleEmptyCart}>Empty cart</Button>
            <Button color="success" variant="contained" as={Link} to ="/checkout" style={{textDecoration: "none"}}>Checkout</Button> 
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
