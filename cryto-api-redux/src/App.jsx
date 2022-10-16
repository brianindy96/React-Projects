import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Exchanges, HomePage, Cryptocurrencies, CryptoDetails, News } from './components';
import { Layout, Typography, Space } from "antd";

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
