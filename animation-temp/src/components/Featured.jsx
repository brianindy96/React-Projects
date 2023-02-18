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
  clip-path: inset(100% 0% 0% 0%);
  object-fit: cover;
  transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);

  &.is-reveal{
    clip-path: inset(0% 0% 0% 0%);
  }

`

const LilyImage = styled.img`
    width: 100%;
    height: 125vh;
    clip-path: inset(100% 0% 0% 0%);
    object-fit: cover;
    transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);

    &.is-reveal{
    clip-path: inset(0% 0% 0% 0%);
  }
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
    <Section 
    className='featured-section'
    data-scroll-section	
    >
      <FeaturedRow className="featured-row-layout">
        <Green>green</Green>
        <GreenImage src="https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100" data-scroll />
      </FeaturedRow>
      <FeaturedColumn className='featured-column-layout'>
        <Lily>lily</Lily>
        <LilyImage src="https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=100" data-scroll />
      </FeaturedColumn>
    </Section>
  )
}

export default Featured