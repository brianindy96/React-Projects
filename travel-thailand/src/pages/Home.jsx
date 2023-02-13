import React from 'react'
import styled from 'styled-components'
import { Parallax } from "react-parallax"
import Title from '../components/Title'
import LargeDivider from '../components/LargeDivider'

const Container = styled.div`

`

const Home = () => {
  return (
    <Container>
        <Title />
        <LargeDivider image="/img/rice.jpg" />
    </Container>
  )
}

export default Home