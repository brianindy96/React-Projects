import React from 'react'
import styled from "styled-components"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CardContainer = styled.div`
    width: 250px;
    border: 1px solid lightgrey;
    min-height: 350px;
    margin: 10px;
    border-radius: 25px;
    padding: 10px;
    background-color: #f8f8f8;
    box-shadow: 8px 8px 17px -20px rgba(66, 68, 90, 1);
`

const CardTitle = styled.h2`
    font-size: 36px;
`

const ProductImg = styled.img`
    width: 150px;
`

const ProductDesc = styled.p`
    font-style: italic;
`

const ProductPrice = styled.p`
    font-size: 20px;
    font-weight: 600;
`

const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 5px;
`

const Product = ({ product }) => {
  return (
        <CardContainer>
            <CardTitle>{product.name}</CardTitle>
            <ProductImg src={product.img} alt="Product image here"/>
            <ProductDesc>{product.description}</ProductDesc>
            <ProductPrice>$ {product.price}</ProductPrice>
            <Icon>
                <AddShoppingCartIcon />
            </Icon>
        </CardContainer>
  )
}

export default Product