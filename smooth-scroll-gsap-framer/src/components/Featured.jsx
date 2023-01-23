import React from 'react'
import styled from "styled-components"

const Container = styled.section`
    display: grid;
    /* height: 100vh; */
    grid-template-columns: 1fr 3fr;
    align-items: center;
`

const FeaturedRowLayout = styled.div`
    display: grid;
    gap: 10px;
    grid-template-rows: repeat(2,auto);
`

const FeaturedColumnLayout = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 100px auto;
    align-items: flex-end;

`

const GreenName = styled.h6`
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;

    margin-bottom: 0;

    
`

const LilyName = styled.h6`
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;

    transform: translateX(100%) rotate(-90deg);
    transform-origin: left bottom;
    justify-self: self-end;

`

const GreenImg = styled.img`
    clip-path: inset(0% 0% 0% 0%);
    width: 100%;
    object-fit: cover;
`

const LilyImg = styled.img`
    clip-path: inset(0% 0% 0% 0%);
    width: 100%;
    height: 125vh;
    object-fit: cover;
`

const Featured = () => {
  return (
    <Container>
        <FeaturedRowLayout>
            <GreenName name="green">green</GreenName>
            <GreenImg src="https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100" />
        </FeaturedRowLayout>
        <FeaturedColumnLayout>
            <LilyName name="lily">lily</LilyName>
            <LilyImg src="https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=100"/>
        </FeaturedColumnLayout>
    </Container>
  )
}

export default Featured