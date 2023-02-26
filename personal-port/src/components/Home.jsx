import { Canvas  } from '@react-three/fiber'
import styled from 'styled-components'
import { Float, OrbitControls  } from '@react-three/drei'
import { Carrot } from './CarrotCake'

const Container = styled.div`

`

const Wrapper = styled.div`
    min-height: 95vh;
    display: flex;
    width: 100vw;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    padding-top: 12rem;
    flex-direction: column;
    color: white;

`

const Right = styled.div`
    flex: 3;
    width: 50vw;
`

const Title = styled.h1`
    font-size: ${props => props.gray ? "2rem" : "7rem"};
    margin: 0;
    padding-left: ${props => props.gray ? "9rem" : "0"};
    margin-top: ${props => props.gray ? "2rem" : "0"};
    color: ${props => props.gray ? "#a8a8a8" : "white"};
    font-family: "Gloock", sans-serif;
    letter-spacing: 1.3rem;
`

const Projects = styled.h1`
    font-size: 4rem;
    color: #e0e0e0;
    padding-left: 5.5rem;
    padding-bottom: 1rem;
`
const Home = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>&nbsp;&nbsp;Brian</Title>
                <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Richard</Title>
                <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Garton</Title>
                <Title gray>Frontend Developer</Title>
            </Left>
            <Right>
                <Canvas style={{height: "90vh", width: "100%"}}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    {/* <OrbitControls /> */}
                    <Float speed={1.4} rotationIntensity={2} floatIntensity={2.3}>
                        <Carrot />
                    </Float>
                </Canvas>
            </Right>
        </Wrapper>
        <Projects >Projects</Projects>
    </Container>
  )
}

export default Home