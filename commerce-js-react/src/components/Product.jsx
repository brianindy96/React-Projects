import React from 'react'
import styled from "styled-components"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { stripHtml } from 'string-strip-html';
import { PropTypes } from 'prop-types';

const CardContainer = styled.div`
    width: 350px;
    border: 1px solid lightgrey;
    min-height: 350px;
    margin: 10px;
    border-radius: 25px;
    padding: 10px;
    background-color: white;
    box-shadow: 8px 8px 17px -20px rgba(66, 68, 90, 1);
`
const ProductInfo = styled.div`
    
`
const CardTitle = styled.h2`
    font-size: 24px;
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
    height: 108px;
    width: 90%;
    margin: 0 auto;
    overflow: scroll;
`

const ProductPrice = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
`

const Icon = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 5px;
`

const Product = ({ product }) => {

    const { result } = stripHtml(product.description);

  return (
        <CardContainer>
            <ProductInfo>
                <CardTitle>{product.name}</CardTitle>
                <ProductImg src={product.image.url} alt="Product image here"/>
                <ProductDesc>{result}</ProductDesc>
                <ProductPrice>$ {product.price.formatted_with_symbol}</ProductPrice>
            </ProductInfo>
            
            <Icon>
                <AddShoppingCartIcon style={{cursor: "pointer", color: "blue"}} />
            </Icon>
        </CardContainer>
  )
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product