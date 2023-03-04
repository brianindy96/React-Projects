import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import styled from 'styled-components'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { xs, sm, md, lg, xl} from "./responsive"
import { motion } from 'framer-motion'
const Container = styled.div`
  overflow: hidden;
  min-height: 150vh;

  
`

const SectionTitle = styled(motion.h1)`
    background-color: #303030;
    font-size: 4rem;
    color: grey;
    padding-left: 5.5rem;
    padding-bottom: 1rem;

    ${xs({fontSize: "1.8rem", textAlign: "center", paddingBottom: "0", paddingLeft: "0", padding: "0.5rem"})};
    ${sm({fontSize: "2rem", textAlign: "center", paddingBottom: "0", paddingLeft: "0", padding: "0.5rem"})};
    ${md({fontSize: "4rem", textAlign: "left", paddingBottom: "1rem", paddingLeft: "19.5rem", marginBottom: "2rem"})};
    /* ${xl({fontSize: "4rem", paddingBottom: "0", paddingLeft: "5.5rem", padding: "1rem", textAlign: "left"})}; */
`

const sectionVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition:{
        duration: 0.5,
        ease: 'easeIn',
      }
    }
}

const SectionDivider = styled.div`
    background-color: #303030;
    padding-left: 5.5rem;
    padding-bottom: 1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;

    ${xs({ textAlign: "center", paddingBottom: "0", paddingLeft: "0", padding: "0.5rem"})};
    ${sm({ textAlign: "center", paddingBottom: "0", paddingLeft: "0", padding: "0.5rem"})};
    ${md({ textAlign: "left", paddingBottom: "0", marginBottom: "2rem"})};
`
function App() {

  return (
    <Container>
        <Nav />
        <Home />
        <SectionDivider>
          <SectionTitle
          variants={sectionVariants}
          whileInView="show"
          initial="hidden"
          viewport={{once: false, amount: 0.25}}
          >Projects</SectionTitle>
        </SectionDivider>
        <Projects />
        <SectionDivider>
          <SectionTitle
            variants={sectionVariants}
            whileInView="show"
            initial="hidden"
            >About
            </SectionTitle>
        </SectionDivider>
        <About /> 
        {/* <Contact /> */}
        {/* <Footer /> */}
    </Container>
  )
}

export default App
