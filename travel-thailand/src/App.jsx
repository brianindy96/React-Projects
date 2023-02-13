import './App.css'
import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'
import Navbar from './components/Navbar'
import ChiangMai from "./pages/ChiangMai"
import Bangkok from "./pages/Bangkok"
import Krabi from "./pages/Krabi"
import Ayutthaya from "./pages/Ayutthaya"



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
          <Route path="/cities/chiangmai" element={<ChiangMai />} />
          <Route path="/cities/bangkok" element={<Bangkok />} />
          <Route path="/cities/krabi" element={<Krabi />} />
          <Route path="/cities/ayuthhaya" element={<Ayutthaya />} />
        </Routes>
    </Container>
  )
}

export default App
