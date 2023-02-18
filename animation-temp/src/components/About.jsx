import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SectionHeader from './SectionHeader'
import  { motion, useAnimationControls } from "framer-motion"
import { useInView } from "framer-motion"

const Section = styled.section`
  
`

const Headline = styled(motion.p)`
  font-size: 70px;
  line-height: 1.12; 
`

const containerVariants = {
  initial: {
    x: -100,
    opacity: 0,
    transition: {
      ease: "0.3s ease",
      duration: 1,
    },
  animate: {
    x: -0,
    opacity: 1,
  }
  }
}

const About = () => {
  // based on the reference, if ref is in view, then inView === true;
  // if reference section is not in view, then inView === false;
  const ref = useRef(null)
  const isInView = useInView(ref);

  const animation = useAnimationControls();

  useEffect(() => {
    if(isInView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        }
      });
    }
    if(!isInView){
      animation.start({x: -100})
    }
    console.log("Element is in view: ", isInView)
  }, [isInView]);


  return (
    <Section 
    className="about-section"
    data-scroll-section	
    
    >
      <SectionHeader title="About"/>
      <Headline animate={animation}
                initial={animation}
                ref={ref} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus recusandae tempora enim adipisci, ipsam commodi omnis laborum reiciendis quis et officiis, itaque culpa odit eligendi hic veniam dolorum ut numquam error. Deserunt velit voluptatum quas quis accusamus reiciendis officiis. 
      </Headline>
    </Section>
  )
}

export default About