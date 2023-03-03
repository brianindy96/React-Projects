import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import styled from 'styled-components'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { xs, sm, md, lg, xl} from "./responsive"

const Container = styled.div`
  overflow: hidden;

  
`

const SectionTitle = styled.h1`
    background-color: #303030;
    font-size: 4rem;
    color: grey;
    padding-left: 5.5rem;
    padding-bottom: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    ${xs({fontSize: "1.5rem", textAlign: "center", paddingBottom: "0", paddingLeft: "0", padding: "0.5rem"})};
    ${sm({fontSize: "2rem", textAlign: "center", paddingBottom: "0", paddingLeft: "0", padding: "0.5rem"})};
    ${md({fontSize: "4rem", textAlign: "left", paddingBottom: "1rem", paddingLeft: "19.5rem", marginBottom: "2rem"})};
    /* ${xl({fontSize: "4rem", paddingBottom: "0", paddingLeft: "5.5rem", padding: "1rem", textAlign: "left"})}; */


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
        {/* <Contact /> */}
        <Footer />
    </Container>
  )
}

export default App
