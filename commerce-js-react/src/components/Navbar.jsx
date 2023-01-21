import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";
import { Link } from "react-router-dom"

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div` 
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0"})}
`

const Left = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;

`

const Center = styled.div`
  flex: 1;
  text-align: center;

`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center", flex: 1})}



`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "13px", marginLeft: "5px"})}

`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    font-weight: bold;
    ${mobile({display: "none"})}

`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 10px;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}

`

const Logo = styled.h1`
    ${mobile({fontSize: "23px", marginLeft: "10px"})}

`

const Navbar = ({ totalItems }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input placeholder='Search...'/>
            <SearchIcon style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{textDecoration: "none", color: "black"}}>
              NOTINO.
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={totalItems} color="success">
              <Link to="/cart">
                <ShoppingCartOutlinedIcon color="action" />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar