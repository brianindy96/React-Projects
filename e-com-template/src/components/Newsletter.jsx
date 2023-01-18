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
    font-size: 70px;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    border: 1px solid lightgray;
    width: 50%;
    height: 40px;
    background-color: white;

`

const Input = styled.input`
    padding: 5px;
    flex: 8;
    border: none;
    outline: none;
    padding-left: 20px;
`

const Button = styled.button`
    padding: 10px;
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: teal;
    color: white;

`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, est.</Description>
        <InputContainer>
            <Input placeholder='Your email here....' />
            <Button>
                <SendOutlinedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter