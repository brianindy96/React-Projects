import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 10vh;
    color: #fff;
    background-color: #252525;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    margin-right: 25px;
    align-items: center;
    justify-content: flex-end;
`

const Input = styled.input`
    border: none;
`

const Language = styled.span`
    cursor: pointer;
`

const SearchContainer = styled.div`
    margin-left: 25px;
    padding: 5px;
    border: 1px solid lightgrey;
    display: flex;
    border-radius: 8px;
`
// Center

const Logo = styled.h1`
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Helvetica', sans-serif;
    text-align: center;
`

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
    font-size: 0.9rem;
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
                        color: "gray", 
                        fontSize: "1rem", 
                        cursor:"pointer",
                        }} />
                    <Input placeholder="Search Here.."/>
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