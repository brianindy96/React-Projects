import React from 'react'
import styled from 'styled-components'
import {mobile, tablet} from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("/img/login.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: #fefdf1;
    border-radius: 10px;

    ${mobile({width: "70%", textAlign: "center"})}
    ${tablet({width: "50%", textAlign: "center"})}

`

const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 300;
`
const Form = styled.form`
    flex-direction: column;
    display: flex;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    

    ${mobile({width: "100%"})}
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

    ${mobile({fontSize: "10px"})}

`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <Form>
                <Input required placeholder="username" />
                <Input required placeholder="password" />
                <Button>LOG IN</Button>
                <Link >DO YOU NOT REMEMBER THE PASSWORD?</Link>
                <Link >Create a new account HERE</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login