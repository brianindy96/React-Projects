import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material';

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
const Navbar = () => {
  return (
    <Container >
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Search />
                    <Input placeholder="Search Here.."/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>
                    SPREE.
                </Logo>
            </Center>
            <Right >
                Right
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar