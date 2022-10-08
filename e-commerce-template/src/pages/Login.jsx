import React from 'react'
import styled from 'styled-components'

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
`

const Title = styled.h1`
    font-size: 1.2rem;
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
    width: 40%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 3px;
`

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
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