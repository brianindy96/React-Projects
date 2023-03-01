import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const Container = styled.div`
    height: 100vh;
    
`

const Wrapper = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const AboutTitle = styled.h1`
    font-size: 4rem;
`

const Desc = styled.p`
    font-size: 1.3rem;
    color: #9e9e9e;
    margin-top: 20px;
    line-height: 2.5rem;
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
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    animation: ${scrollX} 20s linear infinite;
`

const ImageGroup = styled.div`
    display: flex;
    border: 1px solid white;
    place-items: center;
    width: 200px;
`   

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 10%;
    aspect-ratio: 16/9;
    padding: 1rem 2rem;
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
                    <Marquee>
                        <MarqueeGroup>
                            <>
                            {logos.map((logo, index) => (
                                <ImageGroup key={index}>
                                    <Image src={logo} alt={`Logo #${index}`} />
                                </ImageGroup>
                            ))}
                            </>
                        </MarqueeGroup>
                        <MarqueeGroup>
                            <>
                            {logos.map((logo, index) => (
                                <ImageGroup key={index}>
                                    <Image src={logo} alt={`Logo #${index}`} />
                                </ImageGroup>
                            ))}
                            </>
                        </MarqueeGroup>
                    </Marquee>
                {/* <GridCon>
                    <LogoCon>
                        <Logo src="/img/html.png" alt="Logo" />
                        <p>HTML</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/css.png" alt="Logo" />
                        <p>CSS</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/js.png" alt="Logo" />
                        <p>Javascript</p>
                    </LogoCon>
                    
                    
                    <LogoCon>
                        <Logo src="/img/react.png" alt="Logo" />
                        <p>React</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/tailwind.png" alt="Logo" />
                        <p>Tailwind</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/redux.png" alt="Logo" />
                        <p>Redux</p>
                    </LogoCon>

                    <LogoCon>
                        <Logo src="/img/python.png" alt="Logo" />
                        <p>Python</p>
                    </LogoCon>
                    
                    <LogoCon>
                        <Logo src="/img/mysql.png" alt="Logo" />
                        <p>MYSQL</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/express.png" alt="Logo" />
                        <p>Express.js</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/node.png" alt="Logo" />
                        <p>Node.js</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/three.png" alt="Logo" />
                        <p>Three.js</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/vsc.png" alt="Logo"  />
                        <p>VS Code</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/vite.png" alt="Logo" />
                        <p>VITE</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/webpack.png" alt="Logo" />
                        <p>webpack</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/firebase.png" alt="Logo" />
                        <p>Firebase</p>
                    </LogoCon>
                    <LogoCon>
                        <Logo src="/img/npmpng.png" alt="Logo" />
                        <p>npm</p>
                    </LogoCon>
                </GridCon>   */}
                </Wrapper>
    </Container>
  )
}

export default About