import React from 'react'
import styled from "styled-components"
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCart';
import { styled as style } from '@mui/material/styles';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { mobileL, tablet } from "../responsive";

const Container = styled.div`
    max-width: 100vw;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: 10vh;
    padding: 20px;
    display: flex;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
`

const Center = styled.div`
    flex: 1;
    
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Logo = styled.h1`
    font-family: "Syncopate", sans-serif;
    font-size: 2rem;
    margin: 0 2rem;
    ${tablet({marginLeft: "1rem"})}
    ${mobileL({marginLeft: "0"})}


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
    color: #606060;
    margin-right: 10px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #606060;
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
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>NOTINO.</Logo>
            </Left>
            <Center>
                
            </Center>   
            <Right>
                <SearchContainer>
                    <Search placeholder='Search here..'/>
                    <SearchOutlinedIcon style={{color: "#8f8f8f", cursor: "pointer"}} />
                </SearchContainer>
                <Account>
                    <PermIdentityOutlinedIcon style={{margin: "0 5px"}} />
                    <AccountSpan>Account</AccountSpan>
                </Account>
                <Cart>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={4} color="secondary">
                            <ShoppingCartOutlinedIcon />
                        </StyledBadge>
                    </IconButton>   
                </Cart>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar