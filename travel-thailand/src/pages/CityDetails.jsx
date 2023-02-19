import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import CityLanding from '../components/CityLanding'
import DescDivider from '../components/DescDivider'
import LargeDivider from '../components/LargeDivider'
import Navbar from '../components/Navbar'
import SmallDivider from '../components/SmallDivider'
import TextDivider from '../components/TextDivider'
import useLocoScroll from '../hooks/useLocoScroll'

const Container = styled.div`
    background-color: #fff;
`

const CityDetails = ({ cities }) => {

  const { cityId } = useParams();

  // const thisCity = cities.find((city) => city.id === cityId);

  const thisCity = cities.find((city) => city.id == cityId);

  console.log(thisCity);
  const { img7, img6, img1, img2, img3, img4, img5, title, desc, name, para1, image, id} = thisCity

  const [preLoader, setPreloader] = useState(true);

  useLocoScroll(!preLoader);

  return (
    <Container id="main-container" data-scroll-container>
        <Navbar />
        <CityLanding title={title} image={image}/>
        <LargeDivider image={img3} />
        <TextDivider title={title} desc={para1} />
        <DescDivider para1={para1} image={img1} />
        <SmallDivider image={img7} />
        <LargeDivider image={img5} />
        <TextDivider  desc={para1} title={title} />
        <DescDivider image={img4} para1={para1} para2={para1} />
        <DescDivider image={img2} para1={para1} para2={para1} reverse="reverse" />
        <SmallDivider image={img6} />
    </Container>
  )
}

export default CityDetails