import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    
`

const Wrapper = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    padding: 0 auto;
    width: 100%;
`

// Left

const AboutTitle = styled.h1`
    font-size: 4rem;
`

const Desc = styled.p`
    font-size: 1.5rem;
    color: #9e9e9e;
    margin-top: 20px;
    line-height: 2.5rem;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
`

const GridCon = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    width: 100%;
    grid-gap: 25px;
`

const LogoCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const Logo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 5px
`

 
const About = () => {
  return (
    <Container id="about">
        <Wrapper>
            <Left>
                <AboutTitle>About Me</AboutTitle>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quasi quam commodi quos nisi iure neque totam beatae quaerat sunt. Neque, blanditiis obcaecati? Praesentium tempora animi nisi cumque numquam cum omnis obcaecati? At expedita rerum unde ducimus praesentium ullam aliquid.</Desc>
            </Left>
            <Right>
                <GridCon>
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
                    
                    
                    
                    
                    
                    
                    
                    
                    
                   
                    
                    
                   
                </GridCon>  
            </Right>
        </Wrapper>
    </Container>
  )
}

export default About