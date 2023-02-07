import React from 'react'
import styled from "styled-components"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';
import { mobileL, tablet } from '../responsive';
import { useParams } from 'react-router-dom';
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
    
`

const ProductDesc = styled.p`
    font-size: 14px;
    width: 80%;
    font-style: italic;
    line-height: 1.2rem;
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
    
`

const Subtitle = styled.h3`
    
`

const SizeContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const Size = styled.div`
    background-color: #ededed;
    padding: 1px 3px;
    width: 70px;
    text-align: center;
    margin-right: 20px;
    cursor: pointer;
`

const QtyContainer = styled.div`
    display: flex;
    margin-top: 10px;
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
const ProductInfo = ({ product, price }) => {

    
  return (
    <Container>
        <Left>
            <ImgContainer>
                <Img src={product.image?.url} alt='Img'/>
            </ImgContainer>
        </Left>
        <Right>
            <ProductName>{product.name}</ProductName>
            <ProductDesc dangerouslySetInnerHTML={{__html: product.description}} />
            <Hr />
            <Cost></Cost>
            <Hr />
            <Subtitle>Choose Size:</Subtitle>
            <SizeContainer>
                <Size>30mL</Size>
                <Size>50mL</Size>
                <Size>100mL</Size>
            </SizeContainer>
            <Hr/>
            <Subtitle>Quantity: </Subtitle>
            <QtyContainer>
                <IconButton>
                    <RemoveIcon />
                </IconButton>
                <Amount>2</Amount>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </QtyContainer>
            <Button color="primary" variant="contained" style={{padding: "5px 20px"}}>ADD TO CART</Button>
            <Hr />
            <Delievery>
                <LocalShippingIcon />
                <SubSubTitle>Free Delievery</SubSubTitle>
            </Delievery>
            <Details><u>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, libero!</u></Details>
            <Hr />
            <Delievery>
                <ShoppingBagIcon />
                <SubSubTitle>Return Delievery</SubSubTitle>
            </Delievery>
            <Details>Lorem ipsum dolor, sit amet <u>consecteturadipisicing elit</u> . Rerum, doloremque!</Details>
        </Right>
    </Container>
  )
}

ProductInfo.propTypes = {
    product: PropTypes.object,
};



export default ProductInfo