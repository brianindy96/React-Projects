import React from 'react'
import styled from 'styled-components'
import { Parallax } from "react-parallax"

const Container = styled.div`

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

const ParallaxContainer = styled.div`
    height: 60vh;
`

const Desc = styled.p`
    font-size: 2rem;
`

const SubContainer = styled.div`
    height: 40vh;
`
const Home = () => {
  return (
    <Container>
        <Intro>
            <Header>Visit Thailand</Header>
            <Desc>Before Thailand visits you..</Desc>
        </Intro>
        <Parallax strength={600} bgImage='/img/beach.jpg'>
            <ParallaxContainer>
                Hello
            </ParallaxContainer>
        </Parallax>
        <SubContainer>

        </SubContainer>
    </Container>
  )
}

export default Home