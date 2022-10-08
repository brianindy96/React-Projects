import React from 'react'
import styled from "styled-components"

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
`

const Title = styled.h1`
`
const Form = styled.form`
    
`

const Input = styled.input`
    
`

const Agreement = styled.p`
    
`

const Button = styled.button`
    
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder="first-name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
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