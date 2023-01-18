import React from 'react'
import styled from "styled-components";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
`

const Description = styled.p`
    margin: 10px;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
    border: 1px solid black;
`

const Input = styled.input`
    padding: 5px;
    border: none;
    outline: none;
`

const Button = styled.button`
    
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, est.</Description>
        <InputContainer>
            <Input placeholder='Your email here....' />
            <Button></Button>
            <SendOutlinedIcon />
        </InputContainer>
    </Container>
  )
}

export default Newsletter