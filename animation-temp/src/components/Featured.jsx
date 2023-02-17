import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 3fr;
    min-height: 100vh;
    align-items: center;
`

const Green = styled.h6`
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;
`

const Lily = styled.h6`
    transform: translateX(100%) rotate(-90deg);
    transform-origin: left bottom;
    justify-self: self-end;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;
`

const GreenImage = styled.img`
  width: 100%;
  // height: 100%;
  clip-path: inset(0% 0% 0% 0%);

  object-fit: cover;
`

const LilyImage = styled.img`
    width: 100%;
    height: 125vh;
    object-fit: cover;
    clip-path: inset(0% 0% 0% 0%);

`

const FeaturedRow = styled.div`
  display: grid;
  gap: 10px;
  grid-template-rows: repeat(2, auto);
`

const FeaturedColumn = styled.div`
  display: grid;
  gap: 10px;

  grid-template-columns: 100px auto;
  align-items: flex-end;
`
const Featured = () => {
  return (
    <Section className='featured-section'>
      <FeaturedRow className="featured-row-layout">
        <Green>green</Green>
        <GreenImage src="/img/green.jpg" />
      </FeaturedRow>
      <FeaturedColumn className='featured-column-layout'>
        <Lily>lily</Lily>
        <LilyImage src="/img/lily.jpg" />
      </FeaturedColumn>
    </Section>
  )
}

export default Featured