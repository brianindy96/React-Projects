import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import LargeDivider from '../components/LargeDivider'
import TextDivider from '../components/TextDivider'
import DescDivider from '../components/DescDivider'
import SmallDivider from '../components/SmallDivider'
import Navbar from '../components/Navbar'
import useLocoScroll from '../hooks/useLocoScroll'

const Container = styled.div`
  
`

const Home = () => {

  const [preLoader, setPreloader] = useState(false);

  useLocoScroll(!preLoader);
  
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 3000)
  }, [])
  
  
  return (
    <>
    {preLoader ? (
      <>
        <h1>Loading</h1>
      </> 
    ) : (
      <Container id="main-container" data-scroll-container>
        <Navbar />
        <Title title="Hello Thailand" desc="Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello" />
        <LargeDivider
        image="/img/rice.jpg" 
        />
        <TextDivider 
        title="Hello World" 
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut."
        />
        <SmallDivider bg="#faf2d8" image="/img/buddah.jpg" />
        <LargeDivider 
        image="/img/krabi.jpg" 
        />
        <TextDivider 
        title="Hello World" 
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut."
        />
        <DescDivider image="/img/beach.jpg" title="Hello World" para2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut." para3="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut."/>
        <DescDivider reverse image="/img/lantern.jpg" title="Hello World" para2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut." para3="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut."/>
        <DescDivider image="/img/monkey.jpg" title="Hello World" para2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut." para3="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut."/>
        <TextDivider 
        title="Hello World" 
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quo qui similique libero fugit esse aspernatur iusto. Tempore omnis, et quasi doloribus ea enim tempora quia officia eveniet porro natus incidunt ab mollitia, aspernatur molestias! Odit eaque amet beatae aut."
        />
        <LargeDivider image="/img/monk.jpg"/>
        <SmallDivider image="/img/temple.jpg" />
    </Container>
    )}
    </>
  )
}

export default Home