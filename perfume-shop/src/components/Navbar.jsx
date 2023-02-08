import React from 'react'
import styled from "styled-components"
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import { styled as style } from '@mui/material/styles';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { mobileL, tablet } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`

`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1580px;
    margin: 0 auto;
    min-height: 10vh;
    padding: 20px;
    display: flex;
    align-items: center;

`

const Left = styled.div`
    flex: 1;
    ${tablet({flex: "2"})}
    ${mobileL({flex: "2"})}


`

const Center = styled.div`
    flex: 1;
    ${tablet({display: "none"})}

`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Logo = styled.h1`
    color: black;
    font-family: "Syncopate", sans-serif;
    font-size: 2rem;
    margin: 0 2rem;
    ${tablet({marginLeft: "1rem", fontSize: "1.7rem"})}
    ${mobileL({margin: "0 5px", fontSize: "1.3rem"})}
    text-transform: uppercase;


`

const Cart = styled.div`
    
`

const StyledBadge = style(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
 
const AccountSpan = styled.span`
    ${mobileL({display: "none"})}

`

const Account = styled.div`
    display: flex;
    color: black;
    margin-right: 10px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    padding: 3px;
    ${mobileL({display: "none"})}
    ${tablet({display: "none"})}

`

const Search = styled.input`
    padding: 1px 4px;
    outline: none;
    width: 15rem;
    margin-right: 10px;
    border: none;
`
const Navbar = ({ cart }) => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to="/" style={{textDecoration: "none", color: "white"}}>
                    <Logo>la fragilité.</Logo>
                </Link>
            </Left>
            <Center>
                
            </Center>   
            <Right>
                {/* <SearchContainer>
                    <Search placeholder='Search here..'/>
                    <SearchOutlinedIcon style={{color: "black", cursor: "pointer"}} />
                </SearchContainer>
                <Account>
                    <PermIdentityOutlinedIcon style={{margin: "0 5px"}} />
                    <AccountSpan>Account</AccountSpan>
                </Account> */}
                <Cart>
                    <Link to="/cart" style={{textDecoration: "none", color: "white"}}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={cart.total_items} color="primary">
                            <ShoppingCartOutlinedIcon style={{color: "black"}} />
                        </StyledBadge>
                    </IconButton> 
                    </Link>  
                </Cart>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar