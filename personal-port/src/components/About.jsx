import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    
`

const Wrapper = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
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
        <Wrapper>
            <Left>
                <h1>About</h1>
                <h3 style={{color: "grey"}}>About me</h3>
            </Left>
            <Right>
                Right   
            </Right>
        </Wrapper>
    </Container>
  )
}

export default About