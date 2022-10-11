import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

const Container = styled.div`
    max-height: 600px;
    border: 1px solid lightgrey;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 8px;
    position: relative;
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
    position: absolute;
    bottom: 0;
    padding-right: 20px;
    padding-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`


const Product = ({ product, onAddToCart}) => {

    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }   

  return (
    <Container>
        <ProductImg>
            <Image src={product.image?.url} />
        </ProductImg>
        <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductDesc dangerouslySetInnerHTML={{ __html: product.description}} />
            <ProductPrice>{product.price.formatted_with_symbol}</ProductPrice>
        </ProductInfo>
        <AddToCartCon>
            <IconButton onClick={handleAddToCart}>
                <AddShoppingCartIcon style={{padding: "0", margin: "0", height: "30px", width: "30px"}} />
            </IconButton>
        </AddToCartCon>
        
    </Container>
  )
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product
