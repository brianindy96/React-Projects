import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const cardImgs = [
  { 'src':  "/img/bird.png" },
  { 'src': "/img/cat.png" },
  { 'src': "/img/dog.png" },
  { 'src': "/img/bird.png" },
  { 'src': "/img/turtle.png" },
  { 'src': "/img/dolphine.png" },
]

function App() {


  // initally the state "cards" is an empty array
  //once we execute the shuffleCards function, the state is then changed to the shuffledCards array = 12 random ordered objects with an ID in it.

  const [cards, setCards] = useState([]);

  // Turns state
  const [turns, setTurns] = useState(0);

  // shuffle cards
  // this function is going to do 3 things
  // 1. duplicate the cards to make 12 objects in a new array
  // 2. assigned a random order to the array (shuffles it)
  // 3. goes through every card, and assigns an id to it

  const shuffleCards = () =>{
    // now we have two pairs of the cardImgs (12 Objects)
    const shuffledCards = [...cardImgs, ...cardImgs]
    // shuffles the array 
    // Math.random() returns a number between 0 and 1 
    // subtracting it by 0.5 will return a number that is either + or -
    // sort() goes through the array and puts everything in random Order each time
      .sort(() => Math.random() -0.5)
    // goes through every card, leaves every properties as it is, but adds an id to each individual card
      .map((card) => ({...card, id: Math.random() }));

      setCards(shuffledCards);
      // Every time we click new Game, cards will be shuffled and turns will be back to 0 
      setTurns(0);
  }
  
  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card">
        {cards.map((card)=>(
          <Card card={card}/>
        ))}
      </div>
    </div>
  );
}

export default App;
