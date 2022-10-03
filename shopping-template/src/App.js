import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Main className="main" />
        <Cart className="cart" />
      </div>
    </div>
  );
}

export default App;
