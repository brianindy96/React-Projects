import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    padding: 100px 0;
`

const HeaderList = styled.ul`
    position: absolute;
    left: 0;
    top: 100px;

    letter-spacing: 1px;
    font-family: "Syncopate", sans-serif;
    color: #626262;
    text-transform: uppercase;
    list-style: none;
`

const HeaderListItem = styled.li`
    margin: 10px 0;
    text-decoration: none;
`

const Title = styled.h1`
    margin-bottom: 50px;
    font-size: 20vw;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-family: "Bai Jamjuree", sans-serif;
`



const Header = () => {
  return (
    <Container>
        <HeaderList>
            <HeaderListItem>Intro</HeaderListItem>
            <HeaderListItem>About</HeaderListItem>
            <HeaderListItem>Featured</HeaderListItem>
        </HeaderList>
        <Title>Art Objects</Title>
    </Container>
  )
}

export default Header