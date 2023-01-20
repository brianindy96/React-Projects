import React from 'react'
import styled from "styled-components"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CardContainer = styled.div`
    width: 250px;
    border: 1px solid lightgrey;
    min-height: 300px;
    margin: 10px;
    border-radius: 25px;
    padding: 10px;
    background-color: white;
    box-shadow: 8px 8px 17px -20px rgba(66, 68, 90, 1);
`

const CardTitle = styled.h2`
    font-size: 36px;
    margin-bottom: 10px;
`

const ProductImg = styled.img`
    width: 100%;
    height: 150px;
    object-fit: contain;
`

const ProductDesc = styled.p`
    font-style: italic;
    margin-top: 10px;
`

const ProductPrice = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
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