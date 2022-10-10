import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    box-shadow: 5px 9px 24px -12px rgba(66, 68, 90, 1);
`

const ProductName = styled.h1`
    
`
const ProductDesc = styled.p`

`

const ProductImg = styled.div`
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    object-fit: contain;
    height: 250px;
`
const Product = ({ product }) => {
  return (
    <Container>
        <ProductImg>
            <Image src={product.image} />
        </ProductImg>
        <ProductName>{product.name}</ProductName>
        <ProductDesc>{product.description}</ProductDesc>
    </Container>
  )
}

export default Product