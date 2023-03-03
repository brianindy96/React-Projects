import { Canvas  } from '@react-three/fiber'
import styled from 'styled-components'
import { Float  } from '@react-three/drei'
import { Carrot } from './CarrotCake'
import { xs, sm, md, lg, xl} from "../responsive"


const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    
`

const Wrapper = styled.div`
    /* min-height: 95vh; */
    display: flex;
    width: 100vw;

    ${xs({marginTop: "3rem"})};
    ${sm({marginTop: "2rem"})};
    ${md({flexDirection: "column", minHeight: "95vh"})};

    ${lg({flexDirection: "column"})};
    ${xl({flexDirection: "row"})};

`

const Left = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top: 7rem;
    width: 50%;
    flex-direction: column;
    color: white;
    z-index: 1000;

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
    width: 50%;

    ${xs({display: "none"})};
    ${sm({display: "none"})};
    ${md({display: "inline-block", width: "100%", margin: "0 2rem"})};
    ${lg({display: "inline-block", width: "100%", padding: ""})};
    ${xl({display: "inline-block", width: "100%", paddingLeft: "0", marginRight: "5rem"})};

`

const Canva = styled(Canvas)`
    height: 83vh; 
    width: 100%;
    z-index: 1;
    position: absolute;
    left: 500px;
    top: 0;

    ${md({position: "absolute", left: "0", top: "0", height: "10vh", width: "100%"})};
    ${lg({position: "absolute", left: "0", top: "0", width: "80%"})};

`

const TitleCon = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 100000;
    ${lg({paddingLeft: "10rem", letterSpacing: "1.3rem", fontSize: props => props.gray ? "2rem" : "8rem", paddingRight: "0", textAlign: "left"})};

`

const Title = styled.span`
    font-size: ${props => props.gray ? "3rem" : "7rem"};
    margin: 0;
    padding-left: ${props => props.gray ? "11rem" : "0"};
    margin-top: ${props => props.gray ? "2rem" : "0"};
    color: ${props => props.gray ? "#a8a8a8" : "white"};
    font-family: "Gloock", sans-serif;
    letter-spacing: 1.3rem;

    ${xs({letterSpacing: "0", fontSize: props => props.gray ? "2rem" : "4rem", textAlign: "center", paddingLeft: "0", lineHeight: "6rem"})};
    ${sm({letterSpacing: "0", textAlign: "center", paddingLeft: "0", fontSize: props => props.gray ? "2rem" : "6rem"})};
    ${lg({paddingLeft: props => props.gray ? "1.5rem" : "0", letterSpacing: "1.3rem", fontSize: props => props.gray ? "2.5rem" : "8rem", paddingRight: "0", textAlign: "left"})};
`

const SubTitle = styled.span`
    font-size: ${props => props.gray ? "2rem" : "7rem"};
    margin: 0;
    padding-left: ${props => props.gray ? "9rem" : "0"};
    margin-top: ${props => props.gray ? "2rem" : "0"};
    color: ${props => props.gray ? "#a8a8a8" : "white"};
    font-family: "Gloock", sans-serif;
    letter-spacing: 1.3rem;

    ${lg({paddingLeft: props => props.indent, letterSpacing: "1.3rem", fontSize: props => props.gray ? "2rem" : "8rem", paddingRight: "0"})};

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
                <TitleCon>
                    <Title>Brian</Title>
                    <SubTitle indent="11rem">Richard</SubTitle>
                    <SubTitle indent="26rem">Garton</SubTitle>
                    <Title gray>Frontend Developer</Title>
                </TitleCon>
            </Left>
            <Right>
                <Canva style={{}}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    {/* <OrbitControls /> */}
                    <Float speed={1.4} rotationIntensity={2} floatIntensity={2.3}>
                        <Carrot />
                    </Float>
                </Canva>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Home