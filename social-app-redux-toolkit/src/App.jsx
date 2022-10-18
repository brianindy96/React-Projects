import './App.css'
import { Update, Navbar, Rightbar, Leftbar } from "./components/index";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    height: 100vh;
`
function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Leftbar />
        <Update />
        <Rightbar />
      </Container>
    </>
  )
}

export default App
