import React from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import { mobileL, tablet } from "../responsive";

const Item = styled.div`
margin: 20px 0;
display: flex;

${mobileL({flexDirection: "column", width: "100%"})}


`

const ProductName = styled.h1`
    font-size: 1.4rem;

    ${mobileL({fontSize: "1.2rem"})}
`

const ImgContainer = styled.div`
    width: 250px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobileL({width: "100%", minHeight: "150px"})}


`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;

    ${mobileL({width: "80%"})}

`

const Size = styled.p`

`

const Details = styled.div`
flex: 1;
margin-left: 3rem;

${mobileL({textAlign: "center", marginLeft: "0", marginBottom: "10px"})}

`

const AmountContainer = styled.div`
    text-align: center;

    ${mobileL({width: "100%"})}
    ${tablet({marginLeft: "20px", marginTop: "3px"})}

`

const Price = styled.h3`
    letter-spacing: 1px;
`


const QtyContainer = styled.div`
display: flex;
align-items: center;

${mobileL({justifyContent: "center"})}

`

const Qty = styled.span`
margin: 5px 5px;
`
const Hr = styled.hr`
  background-color: #f3f3f3;
  height: 2px;
  border: none;
`

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    const handleUpdateCartQty = (lineItemId, quantity) => {
        onUpdateCartQty(lineItemId, quantity);
    }

    const handleRemoveFromCart = () => {
        onRemoveFromCart(item.id);
      }



  return (
    <>
        <Item id="item">
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
                    <IconButton onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}>
                        <RemoveIcon />
                    </IconButton>
                        <Qty>{item.quantity}</Qty>
                    <IconButton onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
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