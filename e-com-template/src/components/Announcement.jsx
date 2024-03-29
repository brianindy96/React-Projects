import React from 'react'
import styled from "styled-components"
import {mobile} from "../responsive";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({textAlign: "center", height: "40px"})}
` 

const Announcement = () => {
  return (
    <Container>
        Super Free Deal! Sign up for ours news letter and get a free Car!
    </Container>
  )
}

export default Announcement