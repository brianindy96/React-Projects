import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    position: relative;
`

const ListItems = styled.ul`
    position: absolute;
    left: 0;
    top: 100px;

    letter-spacing: 1px;
    font-family: "Syncopate", sans-serif;
    color: #626262;
    text-transform: uppercase;
`

const ListItem = styled.li`
    margin: 10px 0;
    list-style: none;
    font-weight: 600;
`

const Title = styled.h1`
    font-size: 20vw;
    text-transform: uppercase;
    text-align: center;
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 600;
`
const Header = () => {
  return (
    <Section className='header-container'>
        <ListItems className='header-menu'>
            <ListItem>Intro</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Featured</ListItem>
        </ListItems>
        <Title id="header-text">Art Objects</Title>
    </Section>
  )
}

export default Header