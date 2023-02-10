import './App.css'
import styled from "styled-components"
import Navbar from './components/Navbar'
import Input from './components/Input'
import Humid from './components/TemperatureDetails'
import Weather from './components/Weather'
import Wind from './components/Wind'

const Container = styled.div`
  max-width: 1560px;
  min-height: 100vh; 
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

// const Overlay = styled.div`
//   position: fixed; /* Sit on top of the page content */ /* Hidden by default */
//   width: 100%; /* Full width (cover the whole page) */
//   height: 100%; /* Full height (cover the whole page) */
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0,0,0,0.5); /* Black background with opacity */
//   z-index: -1; /* Specify a stack order in case you're using a different order for other elements */
//   cursor: pointer; /* Add a pointer on hover */
// `

const Wrapper = styled.div`
    min-height: 80vh;
    width: 100%;
    background-color: #d8d8d8;
    opacity: 1;
    border-radius: 10px;
    z-index: 1;
`

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

function App() {
  return (
    <>
      {/* <Overlay outside></Overlay> */}
      <Container>
        <Wrapper> 
          <Navbar />
          <Input />
          <Info>
            <Humid />
            <Weather />
            <Wind />
          </Info>
        </Wrapper>
      </Container>
    </>
  )
}

export default App
