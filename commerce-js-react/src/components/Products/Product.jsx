import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    
`

const CardContainer = styled.div`
    
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
    <Container>
        <CardContainer>
            <CardTitle>{product.name}</CardTitle>
            <ProductImg src={product.img} alt="Product image here"/>
            <ProductDesc>{product.description}</ProductDesc>
            <ProductPrice>$ {product.price}</ProductPrice>
        </CardContainer>
    </Container>
  )
}

export default Product