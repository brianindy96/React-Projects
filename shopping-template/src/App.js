import './App.css';
import  { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from "./components/data"

function App() {
  // Extract the products arrays and properties from data
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map((x)=>
        x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
      }
    };
  
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Main onAdd={onAdd} products={products} className="main" />
        <Cart products={products} cartItems={cartItems} className="cart" />
      </div>
    </div>
  );
}

export default App;
