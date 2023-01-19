import React from 'react'
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}

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
    padding: 20px;
    ${mobile({display: "none"})}

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

// Right
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff9f9"})}

`

const ContactItem = styled.p`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
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
            <Title>Quick Links:</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon style={{marginRight: "10px"}} />
                Heinrich-Mussmann-Strasse 20, 35923
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight: "10px"}} />
                +12 234 34234
            </ContactItem>
            <ContactItem>
                <MailIcon style={{marginRight: "10px"}} />
                contact@notino.dev
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer