import React from 'react'
import styled from 'styled-components'
import Facebook from '@mui/icons-material/Facebook';
import { Instagram, Twitter } from '@mui/icons-material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive";

const Container = styled.div`
    min-height: 10vh;
    display: flex;
    background-color: #252525;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    ${mobile({flexDirection: "column", justifyContent: "flex-start"})}


`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Logo = styled.h1`
    margin: 0;

    ${mobile({fontSize: "1.5rem"})}

`

const Desc = styled.p`
        ${mobile({fontSize: "0.8rem"})}

`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    margin-left: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    /* within the div */
    display: flex;
    justify-content: center;
    align-items: center;
    /* If you want the brand's color, set this */
    /* background-color: ${props => props.color}; */
`

// ----------------CENTER---------------
const Center = styled.div`
    flex: 1;

    ${mobile({display: "none"})}
`
const Title = styled.h3`
    /* margin-bottom: 30px; */
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    /* width is 50% of the parent component List.ul */
    width: 50%;
    margin-bottom: 20px;
`
// -----------------RIGHT----------------------

const Right = styled.div`
    flex: 1;

    ${mobile({fontSize: "1.5rem", width: "100%", marginTop: "10px"})}


`

const TitleRight = styled.h1`
    
    
    ${mobile({fontSize: "1.5rem"})}

`

const ContactItem = styled.p`


    ${mobile({fontSize: "0.8rem"})}

`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ODOR.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis incidunt praesentium iste cupiditate unde amet alias ex eveniet ipsa!
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
                <SocialIcon>
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Premium Membership</ListItem>
            </List>
        </Center>
        <Right>
            <TitleRight> Contact Us</TitleRight>
            <ContactItem><ApartmentIcon style={{marginRight: "5px"}}/>
                349 Hollywood Boulevard, South London 92394
            </ContactItem>
            <ContactItem><LocalPhoneIcon style={{marginRight: "5px"}}/>
                +34 203 204243
            </ContactItem>
            <ContactItem><EmailIcon style={{marginRight: "5px"}}/>
                contact@odor.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer