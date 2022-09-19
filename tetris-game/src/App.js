import './App.css';
import Game from './components/Game';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Game rows={20} columns={10}/>
    </div>
  );
}

export default App;
