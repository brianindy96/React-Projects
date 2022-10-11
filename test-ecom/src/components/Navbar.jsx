import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';


const Container = styled.div`
    height: 10vh;
`

const Wrapper = styled.div`
    background-color: #252525;
    color: white;
    padding: 0px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoCon = styled.div`
`

const CartCon = styled.div`
    
`
const Logo = styled.h1`
    
`
const Navbar = ({totalItems}) => {
  return (
    <Container>
        <Wrapper>
            <LogoCon>
                <Logo>
                    Logo.
                </Logo>
            </LogoCon>
            <CartCon>
                <IconButton style={{color: "white"}}>
                    <Badge badgeContent={totalItems} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
            </CartCon>
        </Wrapper>
    </Container>
  )
}

export default Navbar