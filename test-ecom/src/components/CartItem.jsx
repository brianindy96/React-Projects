// Cart.jsx

import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  padding: 30px 40px;
  margin-bottom: 20px;
`

const ItemImg = styled.img`
  width: 150px;
  
`

const ItemDetails = styled.div`
  text-align: center;
  margin: 0 20px;
`
const ItemName = styled.h4`
  margin: 0;
  margin-top: 20px;
`

const QtyCon = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Qty = styled.p`
  
`

const ItemPrice = styled.div`
  
`

const ItemRemove = styled.button`
  
`

const Plus = styled.button`
  padding: 3px;
  margin: 0 8px;
  border-radius: 3px;
  cursor: pointer;
`
const Minus = styled.button`
  padding: 3px;
  cursor: pointer;
  margin: 0 8px;
  border-radius: 3px;
`
const CartItem = ({ item }) => {

  return (
    <Container>
      <ItemImg src={item.image.url} alt={item.name} />
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
        <QtyCon>
          <Minus>-</Minus>
          <Qty>{item.quantity}</Qty>
          <Plus>+</Plus>
        </QtyCon>
        <ItemPrice>{item.line_total.formatted_with_symbol}</ItemPrice>
      </ItemDetails>
      <ItemRemove
        type="button"
      >
        Remove
      </ItemRemove>
    </Container>
  );
};

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;
