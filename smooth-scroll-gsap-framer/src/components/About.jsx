import React from 'react'
import styled from "styled-components"
import SectionHeader from './SectionHeader'

const Container = styled.section`
    margin-top: 50px;
`

const Desc = styled.p`
    font-size: 70px;
    line-height: 1.12;
`
const About = () => {
  return (
    <Container>
      <SectionHeader title="about" />
      <Desc>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </Desc>
    </Container>
  )
}

export default About