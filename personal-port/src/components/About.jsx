import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { xs, sm, md, lg, xl } from "../responsive"
import { motion } from 'framer-motion'
import { textVariant, marqueeVariant } from "../utils/motion"


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

const AboutTitle = styled(motion.h1)`
    font-size: 4rem;
    
    ${xs({fontSize: "3rem", textAlign: "center"})};
`

const Desc = styled(motion.p)`
    font-size: 1.3rem;
    text-align: center;
    color: #9e9e9e;
    margin-top: 20px;
    line-height: 2.5rem;

    ${xs({fontSize: "1rem", textAlign: "center"})};

`


const Marquee = styled(motion.div)`
    
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

const MarqueeGroup = styled(motion.div)`
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

const List = styled(motion.ul)`
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
                <AboutTitle
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                >About Me</AboutTitle>
                <Desc
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                >Hello! My name is Brian Richard Garton and I'm a frontend developer specializing in Javascript and React. As a developer, I strive to create websites that not only look great but also provide a seamless user experience. I enjoy taking on new challenges and using my problem-solving skills to find innovative solutions to complex web development issues. <br /><br/>I'm constantly exploring new technologies and techniques to improve my skills as a frontend developer. I have experience in a range of web development projects, from responsive landing pages to complex web applications.</Desc>
                <ListGroups>
                    <List
                    variants={textVariant(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.25}}
                    >
                        <ListItem>HTML</ListItem>
                        <ListItem>CSS</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Redux</ListItem>
                    </List>
                    <List
                    variants={textVariant(0.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.25}}
                    >
                        <ListItem>Webpack</ListItem>
                        <ListItem>Three.js</ListItem>
                        <ListItem>MySQL</ListItem>
                        <ListItem>Node.js</ListItem>
                    </List>
                    <List
                    variants={textVariant(0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.25}}
                    >
                        <ListItem>Tailwind.css</ListItem>
                        <ListItem>Python</ListItem>
                        <ListItem>Firebase</ListItem>
                        <ListItem>Visual Studio Code</ListItem>
                    </List> 
                </ListGroups>
                <Marquee
                variants={marqueeVariant}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                >
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