import React from 'react'
import styled from 'styled-components'
import DescDivider from './DescDivider'

const Container = styled.div`
    border-bottom: 1px solid black;
    min-height: 60vh;
    width: 100%;
    background-color: #fff;

    height: 100%;
`

const TitleCon = styled.div`
    min-height: 60vh;
    background-color: #313641;
    color: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 30px;
    font-family: "Poppins", sans-serif;

`
const Title = styled.h1`
    font-size: 5vw;
    font-weight: 600;
`


const City = () => {
  return (
    <Container>
        <TitleCon>
            <Title>Explore the best parts of Thailand</Title>
        </TitleCon>
        <DescDivider name="chiangmai" explore="Explore"title="Chiang Mai" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum commodi itaque accusamus minima nihil dignissimos sint nobis ipsa, amet id minus perspiciatis, architecto error et rem! Sunt blanditiis corporis velit quae fugiat eum debitis minus, dicta, neque libero deleniti." image="/img/cm.jpg" />
        <DescDivider name="bangkok" reverse explore="Explore"title="Bangkok" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum commodi itaque accusamus minima nihil dignissimos sint nobis ipsa, amet id minus perspiciatis, architecto error et rem! Sunt blanditiis corporis velit quae fugiat eum debitis minus, dicta, neque libero deleniti." image="/img/bangkok2.jpg" />
        <DescDivider name="krabi" explore="Explore"title="Krabi" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum commodi itaque accusamus minima nihil dignissimos sint nobis ipsa, amet id minus perspiciatis, architecto error et rem! Sunt blanditiis corporis velit quae fugiat eum debitis minus, dicta, neque libero deleniti." image="/img/krabi.jpg" />
        <DescDivider name="ayutthhaya" reverse explore="Explore"title="Ayutthaya" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum commodi itaque accusamus minima nihil dignissimos sint nobis ipsa, amet id minus perspiciatis, architecto error et rem! Sunt blanditiis corporis velit quae fugiat eum debitis minus, dicta, neque libero deleniti." image="/img/au.jpg" />
    </Container>
  )
}

export default City