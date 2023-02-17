import React from 'react'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'

const Section = styled.section`
  
`

const Headline = styled.p`
  font-size: 70px;
  line-height: 1.12;
`
const About = () => {
  return (
    <Section 
    className='about-section'
    data-scroll-section	
    >
      <SectionHeader title="About"/>
      <Headline>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus recusandae tempora enim adipisci, ipsam commodi omnis laborum reiciendis quis et officiis, itaque culpa odit eligendi hic veniam dolorum ut numquam error. Deserunt velit voluptatum quas quis accusamus reiciendis officiis. 
      </Headline>
    </Section>
  )
}

export default About