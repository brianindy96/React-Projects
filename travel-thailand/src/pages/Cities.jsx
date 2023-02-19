import React, { useState } from 'react'
import styled from 'styled-components'
import City from '../components/City'
import Navbar from '../components/Navbar'
import useLocoScroll from '../hooks/useLocoScroll'

const Container = styled.div`
    height: 500vh;
    
`
const Cities = ({ cities }) => {

  const [preLoader, setPreloader] = useState(false);

  useLocoScroll(!preLoader);

  return (
    <Container id="main-container" data-scroll-container>
        <Navbar />
        <City cities={cities} />
    </Container>
  )
}

export default Cities