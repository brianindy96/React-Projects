import './App.css'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'
import Navbar from './components/Navbar'

const Container = styled.div`
  min-height: 100vh;
`


function App() {

  return (
    <Container>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
    </Container>
  )
}

export default App
