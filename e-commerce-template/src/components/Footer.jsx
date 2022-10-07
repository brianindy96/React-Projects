import React from 'react'
import styled from 'styled-components'
import Facebook from '@mui/icons-material/Facebook';
import { Instagram, Twitter } from '@mui/icons-material';

const Container = styled.div`
    min-height: 10vh;
    display: flex;
    background-color: #252525;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Logo = styled.h1`
    margin: 0;
`

const Desc = styled.p`
    
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
            Right
        </Right>
    </Container>
  )
}

export default Footer