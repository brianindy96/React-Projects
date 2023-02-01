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

const EmptyMsg = styled.p`
  
`
const CartSummary = ({ cart }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <EmptyMsg>You have no items in your shopping cart, start adding some!</EmptyMsg>
    )
    };

    const renderItems = () => (
      cart.line_items.map((lineItem) => (
        <CartItem
          item={lineItem}
          key={lineItem.id}
        />
      ))
    );

    const renderTotal = () => (
      <div className="cart__total">
        <p className="cart__total-title">Subtotal:</p>
        <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
      </div>
    );

  return (
    <Container>
      <Wrapper>
        <Content>
          <CartContainer>
          <Title>Your Shopping Cart</Title>
          {renderItems()}  
          </CartContainer>
          <SummaryContainer>
            <Title>Summary</Title>
            <SubDetails>
              <SubTotal>Subtotal</SubTotal>
              <SubTotalPrice>$1,350.00</SubTotalPrice>
            </SubDetails>
            <Hr style={{marginTop: "10px", marginBottom: "0"}}/>
            <BtnContainer>
              <Link to="/checkout">
                <Button style={{height: "40px", flex: "1", margin: "5px"}} variant="contained">CHECK OUT</Button>
              </Link>
              <Button style={{height: "40px", padding: "0", flex: "1"}} variant="outlined">CONTINUE SHOPPING</Button>
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