import './App.css';
import { useEffect, useState } from 'react';
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

  // State for Choice 1 and Choice 2

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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

  // handling Card Choice
  const handleChoice = (card) =>{
    // if choiceOne does not have a value, then setChoiceTwo(card)
    // if it has a value, setChoiceOne(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  // reset Turns
  const resetTurns = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurn => prevTurn + 1 );
  }

  // compare 2 cards
  // this function only runs when choiceOne or choiceTwo is update
  useEffect(() =>{
    // if we have two of the values from handleChoice
    // only want to run the function when we have both choices handled
    if(choiceOne && choiceTwo){
      // use the properties of the state(here:src) to check if same
      if(choiceOne.src === choiceTwo.src){
        console.log("Those cards match");
        resetTurns()
      } else{
        console.log("Those cards don't match! :(");
        resetTurns();
      }
    }
    // dependencies: when 
  }, [choiceOne, choiceTwo])

  
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>

      <div className="card">
        {cards.map((card)=>(
          <Card 
          key={card.id} 
          card={card}
          handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
