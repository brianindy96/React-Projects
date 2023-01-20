import './App.css'
import Products from './components/Products'
import styled from 'styled-components'
import Navbar from './components/Navbar'

const Container = styled.div`
  
`
function App() {
  return (
    <Container>
      <Navbar />
      <Products />
    </Container>
  )
}

export default App
