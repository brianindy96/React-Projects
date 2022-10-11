import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Link, useLocation } from "react-router-dom"

const Container = styled.div`
    height: 8vh;
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
    text-decoration: none;
    color: white;
`
const Navbar = ({totalItems}) => {

    const location = useLocation();

  return (
    <Container>
        <Wrapper>
            <LogoCon>
                <Link to="/" style={{textDecoration: "none"}}>
                    <Logo>
                        Logo.
                    </Logo>
                </Link>
            </LogoCon>
            {/* Only if we are on the home route, we will show the cart icon */}
            {location.pathname === "/" && (
                <CartCon>
                <Link to="/cart" style={{textDecoration: "none"}}>
                    <IconButton style={{color: "white"}}>
                        <Badge badgeContent={totalItems} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton>
                </Link>
            </CartCon>)
            }
        </Wrapper>
    </Container>
  )
}

export default Navbar