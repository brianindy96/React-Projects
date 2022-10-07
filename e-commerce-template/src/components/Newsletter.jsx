import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Component = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
`

const Description = styled.p`
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-radius: 8px;
`

const Input = styled.input`
    border: none;
    flex: 8;
    outline: none;
    padding-left: 10px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #73d9d9;
    color: white;
`

const Newsletter = () => {
  return (
    <Component>
        <Title>Newsletter</Title>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, corrupti.
        </Description>
        <InputContainer>
            <Input placeholder="Your Email..." />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
        
    </Component>
  )
}

export default Newsletter