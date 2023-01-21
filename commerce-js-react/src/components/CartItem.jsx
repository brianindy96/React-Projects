import React from 'react'
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`
    display: flex;
    padding: 20px;
    height: 150px
`

const ItemImg = styled.img`
    width: 100px;
    object-fit: contain;
`

const ItemName = styled.h3`
    
`

const ItemPrice = styled.span`
    
`

const ProductId = styled.span`
    
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
`

const ProductQty = styled.span`
    margin: 0 10px;
    
`

const ProductInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`
const QtyContainer = styled.div`
    
`
const RemoveButton = styled.button`
    
`
const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <Container>
            <ItemImg src={item.image.url} />
            <ProductInfo>
                <ItemName>Product: {item.name}</ItemName>
                <ItemPrice>Price: {item.price.formatted_with_symbol}</ItemPrice>
                <ProductId>Product ID: {item.product_id}</ProductId>
            </ProductInfo>
            <QtyContainer>
                <AmountContainer>
                    <AddIcon onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} />
                    <ProductQty>{item.quantity}</ProductQty>
                    <RemoveIcon onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} />
                </AmountContainer>  
                <RemoveButton onClick={() => onRemoveFromCart(item.id)}>Remove</RemoveButton>
            </QtyContainer>

    </Container>
  )
}

export default CartItem