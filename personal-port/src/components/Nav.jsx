import React from 'react'
import styled from "styled-components"
import { xs, sm, md, lg, xl} from "../responsive"

const Container = styled.div`
    min-height: 5vh;
    padding: 0.8rem 0;
`

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;


    ${xs({padding: "0 1.2rem"})};
    ${sm({padding: "0 1.2rem"})};
`

// Left Nav

const Left = styled.div`
    
`

const Logo = styled.h1`
    margin: 0px;
    transition: 0.2s ease;

    ${xs({fontSize: "1.4rem"})};

`

// Right Nav

const Right = styled.div`
    
`
const NavLink = styled.a`
    text-decoration: none;
    margin: 0 20px;
    font-size: 1.2rem;
    color: white;

    transition: 0.2s ease;

    ${xs({margin: "0 0.4rem", fontSize: "1rem"})};

    
`
const Nav = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>BRIAN.</Logo>
            </Left>
            <Right>
                <NavLink href="#project">Projects</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Nav