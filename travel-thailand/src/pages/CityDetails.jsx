import React from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import CityLanding from '../components/CityLanding'
import LargeDivider from '../components/LargeDivider'
import TextDivider from '../components/TextDivider'

const Container = styled.div`
    min-height: 80vh;
    background-color: #fff;
`

const CityDetails = ({ cities }) => {

  const { cityId } = useParams();

  // const thisCity = cities.find((city) => city.id === cityId);

  const thisCity = cities.find((city) => city.id == cityId);

  const { title, desc, name, para1, image, id} = thisCity

  return (
    <Container>
        <CityLanding title={title} image={image}/>
        <LargeDivider image={image} />
        <TextDivider name={name} para1={para1}  desc={desc} />
    </Container>
  )
}

export default CityDetails