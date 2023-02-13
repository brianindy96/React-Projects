import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #313641;
    color: #e0e0e0;
`

const Intro = styled.section`
    display: flex;
    flex-direction: column;
    padding: 6rem 6rem;
    min-height: 60vh;
    align-items: center;
`

const Header = styled.h1`
    font-size: 10vw;

`
const Desc = styled.p`
    font-size: 2rem;
`

const Title = () => {
  return (
    <Container>
        <Intro>
            <Header>Visit Thailand</Header>
            <Desc>Before Thailand visits you..</Desc>
        </Intro>
    </Container>
  )
}

export default Title