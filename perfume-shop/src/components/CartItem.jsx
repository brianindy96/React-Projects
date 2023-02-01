import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

const Item = styled.div`
margin: 20px 0;
display: flex;

`

const ProductName = styled.h1`
font-size: 1.4rem;
`

const ImgContainer = styled.div`
    width: 250px;
    height: 200px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const Size = styled.p`

`

const Details = styled.div`
flex: 1;
margin-left: 3rem;
`

const AmountContainer = styled.div`
text-align: center;
`

const Price = styled.h3`
    letter-spacing: 1px;
`


const QtyContainer = styled.div`
display: flex;
align-items: center;
`

const Qty = styled.span`
margin: 5px 5px;
`
const Hr = styled.hr`
  background-color: #f3f3f3;
  height: 2px;
  border: none;
`

const CartItem = ({ item }) => {
  return (
    <>
        <Item>
        <ImgContainer>
            <Img src={item.image.url} alt={item.name}/>
        </ImgContainer>
        <Details>
            <ProductName>{item.name}</ProductName>
            <Size>Size: <strong>100 ml</strong></Size>
        </Details>
        <AmountContainer>
            <Price>{item.line_total.formatted_with_symbol}</Price>
            <QtyContainer>
                <IconButton>
                    <RemoveIcon />
                </IconButton>
                    <Qty>{item.quantity}</Qty>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </QtyContainer>
        </AmountContainer>
    </Item>
    <Hr />
    </>
  )
}

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem