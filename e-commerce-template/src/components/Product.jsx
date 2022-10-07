import React from 'react'
import styled from 'styled-components/'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
`

const Circle = styled.div`
    border-radius: 50%;
`

const Image = styled.img`
    height: 80%;
    object-fit: contain;
`
const Info = styled.div`
    
`
const Icon = styled.div`
    display: flex;
`

const Product = ({ product }) => {
  return (
    <Container>
        <Circle />
        <Image src={product.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>    
            <Icon>
                <SearchOutlinedIcon />
            </Icon>    
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>    
        </Info>
    </Container>
  )
}

export default Product