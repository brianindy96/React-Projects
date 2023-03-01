import { Canvas  } from '@react-three/fiber'
import styled from 'styled-components'
import { Float  } from '@react-three/drei'
import { Carrot } from './CarrotCake'
import { xs, sm, md, lg, xl} from "../responsive"


const Container = styled.div`
    width: 100%;
    height: 100%
`

const Wrapper = styled.div`
    /* min-height: 95vh; */
    display: flex;
    width: 100vw;

    ${xs({marginTop: "3rem"})};
    ${sm({marginTop: "2rem"})};
    ${md({flexDirection: "column"})};

    ${lg({flexDirection: "column"})};
    ${xl({flexDirection: "row"})};

`

const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    padding-top: 9rem;
    flex-direction: column;
    color: white;

    ${xs({display: "none"})};
    ${sm({display: "none"})};
    ${md({display: "none"})};
    ${xl({display: "inline-block", flex: "2", paddingRight: "2rem"})};

`

const TitleHide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    justify-content: center;

    ${xl({display: "none"})};



`

const Right = styled.div`
    flex: 3;
    width: 50vw;
    

    ${xs({display: "none"})};
    ${sm({display: "none"})};
    ${md({display: "inline-block", width: "100%", paddingLeft: "2rem"})};
    ${lg({display: "inline-block", width: "100%", paddingLeft: "2rem"})};
    ${xl({display: "inline-block", width: "100%", paddingLeft: "0", marginRight: "5rem"})};



`

const Title = styled.h1`
    font-size: ${props => props.gray ? "2rem" : "7rem"};
    margin: 0;
    padding-left: ${props => props.gray ? "9rem" : "0"};
    margin-top: ${props => props.gray ? "2rem" : "0"};
    color: ${props => props.gray ? "#a8a8a8" : "white"};
    font-family: "Gloock", sans-serif;
    letter-spacing: 1.3rem;

    ${xs({letterSpacing: "0", fontSize: props => props.gray ? "2rem" : "3rem", textAlign: "center", paddingLeft: "0", lineHeight: "3rem"})};
    ${sm({letterSpacing: "0", textAlign: "center", paddingLeft: "0", fontSize: props => props.gray ? "2rem" : "7rem"})};
    ${lg({paddingLeft: props => props.gray ? "9rem" : "inherit", letterSpacing: "1.3rem", fontSize: props => props.gray ? "2rem" : "8rem", paddingRight: "2rem"})};
`





const Home = () => {
  return (
    <Container>
        <Wrapper>
            <TitleHide>
                <Title>Brian</Title>
                <Title>Richard</Title>
                <Title>Garton</Title>
                <Title gray>Frontend Developer</Title>
            </TitleHide>
            <Left>
                <Title>Brian</Title>
                <Title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Richard</Title>
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
    </Container>
  )
}

export default Home