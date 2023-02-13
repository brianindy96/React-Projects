import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #313641;
    color: white;
`

const Intro = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4rem 6rem;
    min-height: 60vh;
`

const Header = styled.h1`
    font-size: 7rem;

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