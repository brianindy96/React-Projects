import React from 'react'
import styled from 'styled-components'
import DescDivider from './DescDivider'

const Container = styled.div`
    border-bottom: 1px solid black;
    height: 60vh;
    width: 100%;
    background-color: #fff;

    height: 100%;
`

const TitleCon = styled.div`
    height: 80vh;
    display: flex;
    background-color: #f0eff1;
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



const City = ({ cities }) => {
  return (
    <Container
    data-scroll-section  
    >
        <TitleCon data-scroll>
            <Title>Explore the best parts of Thailand</Title>
        </TitleCon>
        {cities.map((city)=>(
            <DescDivider id={city.id} reverse={city.reverse} key={city.id} image={city.image} name={city.name} title={city.title} explore={city.explore} para1={city.para1}/>
        ))}
        {/* <DescDivider name="bangkok" reverse explore="Explore"title="Bangkok" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum commodi itaque accusamus minima nihil dignissimos sint nobis ipsa, amet id minus perspiciatis, architecto error et rem! Sunt blanditiis corporis velit quae fugiat eum debitis minus, dicta, neque libero deleniti." image="/img/bangkok2.jpg" />
        <DescDivider name="krabi" explore="Explore"title="Krabi" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum commodi itaque accusamus minima nihil dignissimos sint nobis ipsa, amet id minus perspiciatis, architecto error et rem! Sunt blanditiis corporis velit quae fugiat eum debitis minus, dicta, neque libero deleniti." image="/img/krabi.jpg" />
        <DescDivider name="ayutthhaya" reverse explore="Explore"title="Ayutthaya" para1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum commodi itaque accusamus minima nihil dignissimos sint nobis ipsa, amet id minus perspiciatis, architecto error et rem! Sunt blanditiis corporis velit quae fugiat eum debitis minus, dicta, neque libero deleniti." image="/img/au.jpg" /> */}
    </Container>
  )
}

export default City