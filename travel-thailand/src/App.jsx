import './App.css'
import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Cities from './pages/Cities'

const Container = styled.div`
  min-height: 100vh;
  background-color: #313641;
  color: white;
`


function App() {

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
