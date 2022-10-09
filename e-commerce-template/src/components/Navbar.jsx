import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";

const Container = styled.div`
    color: #fff;
    background-color: #252525;
`;

const Wrapper = styled.div`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({justifyContent: "flex-start"})}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 20px;

    ${mobile({flex: "0.5", marginLeft: "5px"})}

`
const Center = styled.div`
    flex: 1;

    ${mobile({flex: "0.5"})}

`
const Right = styled.div`
    flex: 1;
    display: flex;
    margin-right: 25px;
    align-items: center;
    justify-content: flex-end;

    ${mobile({flex: "2"})}

`

const Input = styled.input`
    border: none;

    ${mobile({width: "50px"})}

`

const Language = styled.span`
    cursor: pointer;
    
    ${mobile({display: "none"})}
`

const SearchContainer = styled.div`
    margin-left: 25px;
    padding: 5px;
    display: flex;
    border-radius: 8px;

    ${mobile({marginLeft: "10px"})}

`
// Center

const Logo = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Helvetica', sans-serif;
    text-align: center;

    ${mobile({fontSize: "1.3rem", marginLeft: "15px"})}

`

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    font-size: 0.9rem;

    ${mobile({fontSize: "0.7rem", marginLeft: "15px", fontWeight: "bold"})}

`

const Navbar = () => {
  return (
    <Container >
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Search style={{
                        color: "grey", 
                        backgroundColor: "white",
                        fontSize: "1rem", 
                        cursor:"pointer",
                        padding: "5px",
                        }} />
                    <Input placeholder='Search'/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    ODOR.
                </Logo>
            </Center>
            <Right >
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar