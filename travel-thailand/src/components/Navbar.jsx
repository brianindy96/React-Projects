import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #313641;
    color: white;
`

const Navs = styled.ul`
    display: flex;
    list-style: none;
`

const NavItem = styled.li`
    margin: 0 3rem;
    font-size: 1.7rem;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover{
        transform: scale(1.1);
    }
`

const Links = styled(Link)`
    color: white;
    text-decoration: none;
`
const Navbar = () => {
  return (
    <Container>
        <Navs>
            <NavItem>
                <Links to="/">Home</Links>
            </NavItem>
            <NavItem>
                <Links to="/cities">Cities</Links>
            </NavItem>
        </Navs>
    </Container>
  )
}

export default Navbar