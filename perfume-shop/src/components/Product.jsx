import React from 'react'
import styled from 'styled-components'
import Rating from "@mui/material/Rating"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import PropTypes from "prop-types";


const Card = styled.div`
    width: 350px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

`

const ImgContainer = styled.div`
    flex: 1;
    height: 60%;
    background-color: #f0f0f0;
    border-radius: 2%;
`

const Img = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 10px

`

const Rate = styled.div`
    
`

const AddCartContainer = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
`

const Product = ({ product }) => {
  return (
    <Card>
        <ImgContainer>
            <Img src={product.image?.url}/>
        </ImgContainer>
        <InfoContainer>
            <h5>{product.name}</h5>
            <p>{product.price.formatted_with_symbol}</p>
            <p style={{fontSize: "10px", fontStyle: "italic"}}>{product.desc}</p>
            <AddCartContainer>
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