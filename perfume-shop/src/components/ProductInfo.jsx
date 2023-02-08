import React, { useState } from 'react'
import styled from "styled-components"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';
import { mobileL, tablet } from '../responsive';
import { Link, useParams } from 'react-router-dom';
import Product from './Product';
import PropTypes from 'prop-types';

const Container = styled.div`
  min-height: 80vh;
  width: 100%;
  padding: 20px;
  display: flex;
  ${tablet({flexDirection: "column"})}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Position relative to BackBtn */
    position: relative;
`

const Right = styled.div`
    flex: 1;
    padding-top: 25px;
    ${tablet({margin: "0 auto", padding: "5px 70px"})}
    ${mobileL({margin: "0 auto", padding: "5px 30px"})}


`

const ImgContainer = styled.div`
    width: 500px;
    height: 500px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

const ProductName = styled.h1`
    ${mobileL({width: "100%", textAlign: "center"})}

`

const ProductDesc = styled.p`
    font-size: 16px;
    width: 80%;
    font-style: italic;
    line-height: 1.4rem;
    ${mobileL({width: "100%", textAlign: "center"})}

`

const Hr = styled.hr`
    background-color: #e1e1e1;
    border: none;
    height: 1px;
    width: 90%;
    margin-top: 30px;
    margin-bottom: 10px;
`

const Cost = styled.h2`
    ${mobileL({width: "100%", textAlign: "center", fontSize: "2rem"})}

`

const Subtitle = styled.h3`
    
`

const SizeContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const Size = styled.div`
    background-color:  #ededed;
    padding: 1px 3px;
    width: 70px;
    text-align: center;
    margin-right: 20px;
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"} ;
    border: ${props => props.disabled ? "" : "1px solid #787878;"};
    color: ${props => props.disabled ? "#858585" : "black"};
    
    &:hover{
        background-color: ${props => props.disabled ? "#7c7a7a" : "#ededed"}
    }
`

const QtyContainer = styled.div`
    display: flex;
    margin-top: 10px;

    ${mobileL({ width: "100%", justifyContent: "center", textAlign: "center"})}

`

const Amount = styled.span`
    margin: 10px 20px;
    font-size: 1.2rem;
`

const SubSubTitle = styled.span`
    margin-left: 10px;
`

const Details = styled.p`
    font-size: 12px;
`

const Delievery = styled.div`
    display: flex;
    margin-top: 20px;
`

const AddToCartBtn = styled(Button)`
    ${mobileL({width: "100%", textAlign: "center"})}
`

const BackBtn = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    color: lightgrey;
    text-decoration: none;
`

const ProductInfo = ({ product, onAddToCart }) => {

    // Quantity state
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        onAddToCart(product.id, qty)
    }
    
  return (
    <Container>
        {/* Product came, but can't access price */}
        {(product) ? (
            <>
            <Left>
            <BackBtn><Link style={{textDecoration: "none", color: "grey"}} to="/">← Back to Products</Link></BackBtn>
            <ImgContainer>
                <Img src={product.image?.url} alt='Img'/>
            </ImgContainer>
            </Left>
            <Right>
                <ProductName>{product.name}</ProductName>
                <ProductDesc dangerouslySetInnerHTML={{__html: product.description}} />
                <Hr />
                <Cost>{product.price?.formatted_with_symbol}</Cost>
                <Hr />
                <Subtitle>Choose Size:</Subtitle>
                <SizeContainer>
                    <Size disabled>30mL</Size>
                    <Size disabled>50mL</Size>
                    <Size >100mL</Size>
                </SizeContainer>
                <Hr/>
                {/* Quantity */}
                {/* handleAddToCart */}
                {/* on handleAddTocart, the quantity is dependant to the quantity shown in UI */}
                {/* the quantity on UI is incremented or decremented by user  */}
                <Subtitle>Quantity: </Subtitle>
                <QtyContainer>
                    <IconButton onClick={() => qty != 1 && setQty(prev => prev - 1)}>
                        <RemoveIcon />
                    </IconButton>
                    <Amount>{qty}</Amount>
                    <IconButton onClick={() => setQty(prev => prev + 1)}>
                        <AddIcon />
                    </IconButton>
                </QtyContainer>
                <AddToCartBtn 
                color="primary" 
                variant="contained" 
                style={{padding: "5px 20px"}}
                onClick={handleAddToCart}
                >ADD TO CART</AddToCartBtn>
                <Hr />
                <Delievery>
                    <LocalShippingIcon />
                    <SubSubTitle>Free Delievery</SubSubTitle>
                </Delievery>
                <Details><u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Free shipping for 500 EUR and domestic!</u></Details>
                <Hr />
                <Delievery>
                    <ShoppingBagIcon />
                    <SubSubTitle>Return Delievery</SubSubTitle>
                </Delievery>
                <Details>Lorem ipsum dolor, sit amet <u>consecteturadipisicing elit</u> . Rerum, doloremque!</Details>
            </Right>
            </>
        ) : (
            <>
                <p>No product</p>
            </>
        )}
    </Container>
  )
}

ProductInfo.propTypes = {
    product: PropTypes.object,
};



export default ProductInfo