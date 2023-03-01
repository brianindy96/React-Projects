import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import styled from 'styled-components'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const Container = styled.div`
  overflow: hidden;
`

const SectionTitle = styled.h1`
    background-color: #303030;
    font-size: 4rem;
    color: grey;
    padding-left: 5.5rem;
    padding-bottom: 1rem;
    margin-top: 1.5rem;
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
        <Contact />
        <Footer />
    </Container>
  )
}

export default App
