import './App.css'
import { Update, Navbar, Rightbar, Leftbar } from "./components/index";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
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
