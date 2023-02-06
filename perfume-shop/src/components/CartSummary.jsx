import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import PropTypes from "prop-types";


const Container = styled.div`
  min-height: 90vh;
`

const Wrapper = styled.div`
  max-width: 1560px;
  padding: 20px;
  margin: 0 auto;
`

const Content = styled.div`
  display: flex;
`

const Title = styled.h2`
  
`

const CartContainer = styled.div`
   flex: 3;
`
const SummaryContainer = styled.div`
flex: 1;
margin-left: 40px;
padding: 8px;
`


const SubTotal = styled.span`

`

const SubTotalPrice = styled.span`

`

const SubDetails = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-between;
`

const BtnContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
align-items: center;
`

// Empty Messages

const EmptyContainer = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Back = styled.button`
  margin-top: 20px;
  padding: 5px;
`
const EmptyMsg = styled.p`
  text-align: center;
`
const CartSummary = ({ cart, onUpdateCartQty, onRemoveFromCart }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <EmptyContainer>
        <EmptyMsg>You have no items in your shopping cart, start adding some!</EmptyMsg>
        <Link to="/">
          <Button style={{marginTop: "20px", }}variant="outlined">Start Shopping</Button>
        </Link>
      </EmptyContainer>
    )
    };

    const renderItems = () => (
      cart.line_items.map((lineItem) => (
        <CartItem
          item={lineItem}
          key={lineItem.id}
          onRemoveFromCart={onRemoveFromCart}
          onUpdateCartQty={onUpdateCartQty}
        />
      ))
    );

    const renderTotal = () => (
      <SubDetails>
        <SubTotal>Subtotal</SubTotal>
        <SubTotalPrice>{cart.subtotal.formatted_with_symbol}</SubTotalPrice>
      </SubDetails>
    );

  return (
    <Container>
      <Wrapper>
        <Content>
          <CartContainer>
          <Title>Your Shopping Cart</Title>
          {renderItems()}  
          {renderEmptyMessage()}
          </CartContainer>
          <SummaryContainer>
            <Title>Summary</Title>
            {renderTotal()}
            <BtnContainer>
              <Link to="/checkout">
                <Button style={{height: "40px", flex: "1", margin: "5px"}} variant="contained">CHECK OUT</Button>
              </Link>
              <Link to="/">
                <Button style={{height: "40px", flex: "1"}} variant="outlined">CONTINUE SHOPPING</Button>
              </Link>
            </BtnContainer>
          </SummaryContainer>
        </Content>
        
      </Wrapper>
    </Container>
  )
}

CartSummary.propTypes = {
  cart: PropTypes.object,
  onEmptyCart: () => {},
};

export default CartSummary