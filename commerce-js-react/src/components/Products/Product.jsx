import React from 'react'
import styled from "styled-components"

const CardContainer = styled.div`
    width: 250px;
    /* height: 500px; */ */
`

const CardTitle = styled.h2`
    
`

const ProductImg = styled.img`
    
`

const ProductDesc = styled.p`
    
`

const ProductPrice = styled.p`
    
`

const Product = ({ product }) => {
  return (
        <CardContainer>
            <CardTitle>{product.name}</CardTitle>
            <ProductImg src={product.img} alt="Product image here"/>
            <ProductDesc>{product.description}</ProductDesc>
            <ProductPrice>$ {product.price}</ProductPrice>
        </CardContainer>
  )
}

export default Product