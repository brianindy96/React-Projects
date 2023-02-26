import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import styled from 'styled-components'
import Projects from './components/Projects'

const Container = styled.div`
  overflow: hidden;
`

const SectionTitle = styled.h1`
    background-color: #303030;
    font-size: 4rem;
    color: grey;
    padding-left: 5.5rem;
    padding-bottom: 1rem;
`
function App() {

  return (
    <Container>
        <Nav />
        <Home />
        <SectionTitle>Projects</SectionTitle>
        <Projects />
        <SectionTitle>About</SectionTitle>
        <About />
        <SectionTitle>Contact</SectionTitle>
    </Container>
  )
}

export default App
