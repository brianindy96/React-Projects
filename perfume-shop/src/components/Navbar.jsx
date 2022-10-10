import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    height: 10vh;
`

const Wrapper = styled.div`
    background-color: black;
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
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <LogoCon>
                <Logo>
                    Logo.
                </Logo>
            </LogoCon>
            <CartCon>
                cart
            </CartCon>
        </Wrapper>
    </Container>
  )
}

export default Navbar