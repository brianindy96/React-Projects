import React from 'react'
import styled from 'styled-components/'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    cursor: pointer;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    height: 200px;
    width: 200px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;;
`

const Image = styled.img`
    height: 80%;
    object-fit: contain;
    z-index: 2;
`

const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    margin-left: 25px;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
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