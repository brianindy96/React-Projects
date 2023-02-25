import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
`
function App() {

  return (
    <Container>
        <Nav />
        <Home />
        <About />
    </Container>
  )
}

export default App
