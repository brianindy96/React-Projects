import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from "./components/data"

function App() {
  // Extract the products arrays and properties from data
  const { products } = data;
  
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Main products={products} className="main" />
        <Cart products={products} className="cart" />
      </div>
    </div>
  );
}

export default App;
