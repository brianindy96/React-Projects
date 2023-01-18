import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info =styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    opacity: 0;
    transition: 0.3s ease ;
    cursor: pointer;
`

const Container = styled.div`
    padding: 20px;
    display: flex;
    min-width: 280px;
    height: 350px;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
    margin-bottom: 20px;

    
    &:hover ${Info}{
        opacity: 1;
    }
`

const Circle = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    bottom: 0;
    margin: auto;
    background-color: white;
    height: 250px;
    width: 250px;
    opacity: 0.7;
    border-radius: 50%;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    /* Icon hover effects */
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`


const ProductItem = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
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

export default ProductItem