import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Main />
        <Cart />
      </div>
    </div>
  );
}

export default App;
