import React from 'react'
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ), url("/img/shirtrack.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content :center;
    align-items: center;
    ${mobile({width: "80%"})}


`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({marginBottom: "0px"})}

`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    ${mobile({width: "85%"})}


`

const Input = styled.input`
    flex: 1;
    margin: 20px 10px 0 0;
    min-width: 40%;
    padding: 10px;
`

const Agreement = styled.p`
    margin: 20px 5px;
    font-size: 12px;
`

const Button = styled.button`
    margin: 0 5px;
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    padding: 15px;
    font-weight: 600;
    ${mobile({width: "100%"})}

`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>By creating an account, I consent to the Lorem ipsum, dolor sit amet consectetur adipisicing elit. <b>PRIVACY POLICY</b>Neque, quod?</Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register