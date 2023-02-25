import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import { Float, OrbitControls  } from '@react-three/drei'
import { Carrot } from './CarrotCake'

const Container = styled.div`
    background-color: #141414;
`

const Wrapper = styled.div`
    min-height: 95vh;
    display: flex;
    width: 100vw;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    padding-left: 5rem;
    padding-top: 5rem;
    flex-direction: column;
    color: white;

`

const Right = styled.div`
    flex: 1;
`

const Title = styled.h1`
    font-size: 8rem;
    color: ${props => props.gray ? "#a8a8a8" : "white"};
`
const Home = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>Brian</Title>
                <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Garton</Title>
                <Title gray>Frontend</Title>
                <Title gray>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developer</Title>
            </Left>
            <Right>
                <Canvas style={{height: "90vh"}}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    {/* <OrbitControls /> */}
                    <Float speed={1.4} rotationIntensity={2} floatIntensity={2.3}>
                        <Carrot />
                    </Float>
                </Canvas>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Home