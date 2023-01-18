import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
    z-index: -3;
`

const Circle = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
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
    
`

const Info =styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
`

const Icon = styled.div`
    
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