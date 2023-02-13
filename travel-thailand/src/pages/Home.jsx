import React from 'react'
import styled from 'styled-components'
import { Parallax } from "react-parallax"
import Title from '../components/Title'
import LargeDivider from '../components/LargeDivider'
import TextDivider from '../components/TextDivider'

const Container = styled.div`

`

const Home = () => {
  return (
    <Container>
        <Title />
        <LargeDivider 
        image="/img/rice.jpg" 
        />
        <TextDivider 
        title="Hello World" 
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut."
        />
    </Container>
  )
}

export default Home