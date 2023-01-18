import React from 'react'
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Container = styled.div`
    display: flex;
`

// Left
const Left = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;

`

const Logo = styled.h1`
    font-size: 40px;
`

const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=> props.color};

    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
`

// Center

const Center = styled.div`
    flex: 1;
`

// Right
const Right = styled.div`
    flex: 1;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>NOTINO.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius numquam a voluptatibus ut et quaerat iste, accusamus sed dolorem?
            </Desc>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="#E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="#55ACEE">
                    <TwitterIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            Center
        </Center>
        <Right>
            Right
        </Right>
    </Container>
  )
}

export default Footer