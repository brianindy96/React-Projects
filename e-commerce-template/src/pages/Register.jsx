import React from 'react'
import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("/img/shirtrack.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 50%;
    padding: 20px;
    background-color: #ffc4af;
    border-radius: 10px;

    ${mobile({width: "70%"})}
`

const Title = styled.h1`
    font-size: 1.4rem;
    font-weight: 500;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 30px 0 0;
    padding: 5px;
`

const Agreement = styled.p`
    margin-top: 20px;
    font-size: 12px;
`

const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 3px;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input required placeholder="first-name" />
                <Input required placeholder="last name" />
                <Input required placeholder="username" />
                <Input required placeholder="email" />
                <Input required placeholder="password" />
                <Input required placeholder="confirm password" />
                <Agreement>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, neque dolorem? Nisi nam, asperiores aliquid dignissimos necessitatibus perferendis dolore pariatur.
                </Agreement>
                <Button>Submit</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register