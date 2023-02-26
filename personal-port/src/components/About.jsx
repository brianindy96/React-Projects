import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    background-color: #d6d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    padding: 0 auto;
    width: 100%;
`

const Right = styled.div`
    flex: 1;
`
const About = () => {
  return (
    <Container id="about">
        <Left>
            <h1>About</h1>
            <h3 style={{color: "grey"}}>About me</h3>
        </Left>
        <Right>
            Right   
        </Right>
    </Container>
  )
}

export default About