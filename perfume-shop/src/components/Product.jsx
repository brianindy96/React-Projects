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
const ProductImg = styled.div`
    width: 100%;
`

const ProductName = styled.h1`
    margin-top: 10px;
    margin-bottom: 0;
`

const ProductInfo = styled.div`
    
`
const ProductDesc = styled.p`
    font-size: 0.8rem;
    color: grey;
`

const ProductPrice = styled.p`
    font-size: 1.3rem;

`
const Image = styled.img`
    width: 100%;
    object-fit: contain;
    height: 250px;
`

const AddToCartCon = styled.div`
    
`


const Product = ({ product }) => {
    console.log(product);
  return (
    <Container>
        <ProductImg>
            <Image src={product.image.url} />
        </ProductImg>
        <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductDesc dangerouslySetInnerHTML={{ __html: product.description}} />
            <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
        </ProductInfo>
        <AddToCartCon>
            
        </AddToCartCon>
        
    </Container>
  )
}

export default Product