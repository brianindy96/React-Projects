import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const Section = styled.section`
  background-color: #333;
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`

`

const List = styled.ul`
  display: flex;
  margin: 0 10px;
  list-style: none;
`

const ListItem = styled.li`
    text-decoration: none;
    color: white;
`

const Links = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 0 20px;
    font-size: 1.3rem;
`
const Header = () => {
  return (
    <Section>
      <Container>
        <List>
          <ListItem><Links to="/">Home</Links></ListItem>
          <ListItem><Links to="/about">About</Links></ListItem>
          <ListItem><Links to="/contact">Contact</Links></ListItem>
        </List>
      </Container>
    </Section>
  )
}

export default Header