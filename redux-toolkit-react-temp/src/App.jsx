import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import MovieDetail from './components/MovieDetail'

function App() {
  

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
