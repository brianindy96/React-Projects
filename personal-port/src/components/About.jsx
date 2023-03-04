import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { xs, sm, md, lg, xl } from "../responsive"
import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion"

const Container = styled.div`
    ${xs({padding: "1rem 1.5rem 3rem 1.5rem"})};

`

const Wrapper = styled.div`
    max-width: 1280px;
    min-height: 97vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AboutTitle = styled.h1`
    font-size: 4rem;
    
    ${xs({fontSize: "3rem", textAlign: "center"})};
`

const Desc = styled.p`
    font-size: 1.3rem;
    text-align: center;
    color: #9e9e9e;
    margin-top: 20px;
    line-height: 2.5rem;

    ${xs({fontSize: "1rem", textAlign: "center"})};

`


const Marquee = styled.div`
    
    display: flex;
    width: 1280px;
    user-select: none;
    /* border: 1px solid red; */
    padding-top: 10px;
    overflow: hidden;

    mask-image: linear-gradient(
        to right,
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 10%,
        hsl(0 0% 0% / 1) 90%,
        hsl(0 0% 0% / 0),
    )
`

const scrollX = keyframes`
    from{
        left: translateX(0);
    }
    to{
        transform: translateX(-100%);
    }
`

const MarqueeGroup = styled.div`
    margin-top: 2rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    animation: ${scrollX} 20s linear infinite;
`

const ImageGroup = styled.div`
    display: flex;
    border-left: 1px solid black;
    border-right: 1px solid black;

    place-items: center;
    width: 200px;
    background-color: #494949;
`   

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    background-color: #494949;
    border-radius: 10%;
    aspect-ratio: 16/9;
    padding: 1rem 2rem;
`

const ListGroups = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    flex-wrap: wrap;
`

const List = styled.ul`
    display: flex;
    width: 33%;
    flex-direction: column;
    text-align: center;
    margin: 0;
    padding: 1rem 3rem;
    place-items: center;
    width: 100%;

    @media screen and (min-width: 768px) {
    width: calc(33.33% - 2rem);
    margin: 0 1rem;
  }
`

const ListItem = styled.li`
    font-size: 1.2rem;
    margin-bottom: 1.5rem;

    ${xs({fontSize: "1.1rem", textAlign: "center", marginBottom: "0.9rem"})};

`

 
const About = () => {

    const logos = [
        "/img/html.png",
        "/img/css.png",
        "/img/js.png",
        "/img/react.png",
        "/img/tailwind.png",
        "/img/redux.png",
        "/img/python.png",
        "/img/mysql.png",
        "/img/node.png",
        "/img/express.png",
        "/img/webpack.png",
        "/img/firebase.png",
        "/img/vsc.png",
        "/img/three.png",

    ];


  return (
    <Container id="about">
        <Wrapper>
                <AboutTitle>About Me</AboutTitle>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi quam commodi quos nisi iure neque totam beatae quaerat sunt. Neque, blanditiis obcaecati? Praesentium tempora animi nisi cumque numquam cum omnis obcaecati? At expedita rerum unde ducimus praesentium ullam aliquid.</Desc>
                <ListGroups>
                    <List>
                        <ListItem>HTML</ListItem>
                        <ListItem>CSS</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Redux</ListItem>
                    </List>
                    <List>
                        <ListItem>Webpack</ListItem>
                        <ListItem>Three.js</ListItem>
                        <ListItem>MySQL</ListItem>
                        <ListItem>Node.js</ListItem>
                    </List>
                    <List>
                        <ListItem>Tailwind.css</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Firebase</ListItem>
                        <ListItem>Visual Studio Code</ListItem>
                    </List> 
                </ListGroups>
                <Marquee>
                        <MarqueeGroup>
                            {logos.map((logo, index) => (
                                <ImageGroup key={index}>
                                    <Image src={logo} alt={`Logo #${index}`} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup>
                            {logos.map((logo, index) => (
                                <ImageGroup key={index}>
                                    <Image src={logo} alt={`Logo #${index}`} />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                </Wrapper>
    </Container>
  )
}

export default About