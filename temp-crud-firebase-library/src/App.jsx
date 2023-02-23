import './App.css'
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from './components/AddBook';
import BookLists from './components/BookLists';

function App() {
  

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookLists />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
