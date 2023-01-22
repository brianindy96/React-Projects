import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    font-size: 24px;
    letter-spacing: 1px;
    font-family: 'Syncopate', sans-serif;
`


const Navbar = () => {
  return (
    <Container>
        <div>menu</div>
        <div>Flirty Flowers</div>
        <div>cart</div>
    </Container>
  )
}

export default Navbar