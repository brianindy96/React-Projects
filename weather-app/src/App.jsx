import './App.css'
import styled from "styled-components"
import Navbar from './components/Navbar'
import Input from './components/Input'
import Humid from './components/TemperatureDetails'
import Weather from './components/Weather'
import Wind from './components/Wind'

// const Overlay = styled.div`
//   position: fixed; /* Sit on top of the page content */ /* Hidden by default */
//   width: 100%; /* Full width (cover the whole page) */
//   height: 100%; /* Full height (cover the whole page) */
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0,0,0,0.5); /* Black background with opacity */
//   z-index: -2; /* Specify a stack order in case you're using a different order for other elements */
//   cursor: pointer; /* Add a pointer on hover */
// `

const Wrapper = styled.div`
    min-height: 80vh;
    max-width: 1280px;
    background-color: rgba(255,255,255, 0.2);
    border: solid 2px transparent;
    background-clip: padding-box;
    box-shadow: 10px 10px 10px rgba(46,54,68,0.03);
    z-index: 2;
    margin: 5em auto;
    border-radius: 3em;
    backdrop-filter: blur(40px);
    background-clip: padding-box;
    color: black;
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1); 
`

const Info = styled.div`
  width: 100%;
  z-index: 3;
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
        <Wrapper> 
          <Navbar />
          <Input />
          <Info>
            <Humid />
            <Weather />
            <Wind />
          </Info>
        </Wrapper>
    </>
  )
}

export default App
