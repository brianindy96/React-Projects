import React from 'react'
import styled from 'styled-components'
import Rating from "@mui/material/Rating"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import SingleProduct from '../pages/SingleProduct';


const Card = styled.div`
    color: black;
    width: 350px;
    height: 370px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid #f0f0f0;
    padding: 10px 20px;
    box-shadow: 8px 8px 24px -28px rgba(66, 68, 90, 1);
`

const ProductBrand = styled.h5`
    color: grey;
    letter-spacing: 1px;
    font-style: italic;
`

const ProductName = styled.h4`
    
`

const ImgContainer = styled.div`
    flex: 1;
    height: 60%;
    background-color: #ffffff;
    border-radius: 2%;
`

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 10px;

`

const Rate = styled.div`
    
`

const AddCartContainer = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
`

const Product = ({ product, onAddToCart }) => {

    const handleAddToCart = () => {

    onAddToCart(product.id, 1);
    }



  

    
  return (
    <Card>
        <ImgContainer>
            <Link element={<SingleProduct product={product} />} to={`/product/${product.id}`}>
                <Img src={product.image?.url}/>
            </Link>
        </ImgContainer>
        <InfoContainer>
            <ProductBrand>{product.seo.title}</ProductBrand>
            <ProductName>{product.name}</ProductName>
            <p>{product.price.formatted_with_symbol}</p>
            <p style={{fontSize: "10px", fontStyle: "italic"}}>{product.desc}</p>
            <AddCartContainer onClick={handleAddToCart}>
                <IconButton color='primary'>
                    <AddShoppingCartOutlinedIcon />
                </IconButton>
            </AddCartContainer>
        </InfoContainer>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product