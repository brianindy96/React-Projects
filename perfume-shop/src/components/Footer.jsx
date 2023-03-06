import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobileL, tablet } from "../responsive"

const Container = styled.section`
    background-color: black;
    min-height: 30vh;
    color: white;
    width: 100%;
`

const Wrapper = styled.div`
    max-width: 1580px;
    margin: 0 auto;
    display: flex;
    padding: 20px 0;
    ${tablet({flexDirection: "column"})};
    padding: 30px;

`

const Title = styled.h1`
    font-size: 1.2rem;
    margin: 10px 0;
`



const Center = styled.div`
    margin: 0 40px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    ${tablet({display: "none"})};

`

// Left

const Left = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    margin: 10px 0;
    font-size: 2rem;
    text-transform: uppercase;
`

const Desc = styled.p`
    margin-bottom: 20px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    margin: 0 10px;
    cursor: pointer;
`

// Center

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    list-style: none;
    cursor: pointer;
`
// Right

const Right = styled.div`
    margin-top: 5px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${tablet({marginTop: "30px"})};

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Logo>la fragilité.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eius numquam a voluptatibus ut et quaerat iste, accusamus sed dolorem?
            </Desc>
            <SocialContainer>
                <SocialIcon color="#3B5999" style={{marginLeft: "0"}}>
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
            <Title>Quick Links:</Title>
            <List>
                <ListItem>Cart</ListItem>
                <ListItem>For Him</ListItem>
                <ListItem>For Her</ListItem>
                <ListItem>Niche Perfume</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Membership</ListItem>
            </List>
            </Center>
            <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon style={{marginRight: "10px"}} />
                38/2 Muang Chiang Mai, 35923
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight: "10px"}} />
                +823 234 34234
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight: "10px"}} />
                contact@fragilite.dev
            </ContactItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Footer