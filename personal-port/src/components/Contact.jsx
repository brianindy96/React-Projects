import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
    min-height: 40vh;
    background-color: #e8e8e8;
`

const Wrapper = styled.div`
    background-color: #e8e8e8;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding-top: 5rem;
`

const Title = styled.h1`
    font-size: 6rem;
    background: transparent;
    color: black;

`

const Desc = styled.a`
    font-size: 3rem;
    background: transparent;
    color: #555555;
    text-decoration: none;

`


const Logos = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;
    background-color: #e8e8e8;
    flex-direction: column;

`

const LogoCon = styled.div`
    display: flex;
    background: transparent;
    background-color: #e8e8e8;
    color: black;
    font-size: 1.2rem;
    margin-left: 0.3rem;
    margin-bottom: 0.3rem;
`


const Contact = () => {
  return (
    <Container id='contact'>
        <Wrapper>
            <Title>Get to know me</Title>
            <Desc href="#">gartonb@gmail.com</Desc>
        </Wrapper>
    </Container>
  )
}

export default Contact