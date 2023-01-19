import React from 'react'
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ), url("/img/login.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 25%;
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
`
const Form = styled.form`
    width: 70%;
    display: flex;
    flex-direction: column;
    ${mobile({width: "85%"})}


`
const Input = styled.input`
    flex: 1;
    margin: 10px 0;
    min-width: 40%;
    padding: 10px;
    
`

const Button = styled.button`
    margin: 5px 0;
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    padding: 15px;
    font-weight: 600;
    ${mobile({width: "100%"})}

`

const Link = styled.a`
    margin: 10px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOG IN</Button>
                <Link>DO YOU NOT REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login