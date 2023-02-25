import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    min-height: 5vh;
    margin-top: 1.2rem;
    border-bottom: 1px black solid;
`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// Left Nav

const Left = styled.div`
    
`

const Logo = styled.h1`
    margin: 0px;
`

// Right Nav

const Right = styled.div`
    
`
const NavLink = styled.a`
    text-decoration: none;
    margin: 0 20px;
    font-size: 1.2rem;
`
const Nav = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>Brian</Logo>
            </Left>
            <Right>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#project">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Nav