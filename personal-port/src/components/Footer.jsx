import React from 'react'
import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import { xs, sm, md, lg, xl } from '../responsive';

const Container = styled.div`
    min-height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 3rem;
`

const Wrapper = styled.div`
    max-width: 1280px;
    border-top: 1px solid #606060;
    padding-top: 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    ${xs({flexDirection: "column-reverse"})};
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  ${xs({marginTop: "2rem"})};
  ${sm({marginLeft: "2rem"})};
  ${md({marginLeft: "2rem"})};

`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.div`
  
`

const Desc = styled.p`
  
`

const SocialContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`

const SocialIcon = styled.div`
  margin-right: 1rem;
`

const Title = styled.h3`
  font-size: 1.7rem;
`

const ContactItem = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 1.2rem;
`

const Text = styled.p`
    font-size: 1.1rem;
`
const Footer = () => {
  return (
    <Container id="footer">
      <Wrapper>
      <Left>
            <div>
              <Text>© Copyright 2023, Brian Garton</Text>
            </div>
        </Left>
        <Center>
            
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <PhoneIcon style={{marginRight: "10px"}} />
                +66 93 187 5279
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight: "10px"}} />
                gartonb@gmail.com
            </ContactItem>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                  <a href="#">
                    <LinkedIn style={{height: "28px", width: "28px"}} />
                  </a>
                </SocialIcon>
                <SocialIcon color="#E4405F">
                  <a href="#">
                    <GitHub style={{height: "28px", width: "28px"}} />
                  </a>
                </SocialIcon>
            </SocialContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Footer