import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

// Step-by-Step


// 1. Shuffling Cards function
// 2. Creating a card grid
// 3. Creating a card component
// 4. Making Card Choices
// 4.5. Reset Turns
// 5. Comparing Card Choices
// 6. Matching Cards
// 7. Flipping Cards
// 8. Flipping Animation
// 9. Disabling Card Selections
// 10. automatically start game on page is loaded
// 11. set choices value to null every time start new game


const cardImgs = [
  {"src" : "/img/berlin.jpg", matched:false},
  {"src" : "/img/london.jpg", matched: false},
  {"src" : "/img/osaka.jpg" , matched: false},
  {"src" : "/img/newyork.jpg" , matched: false},
  {"src" : "/img/paris.jpg" , matched: false},
  {"src" : "/img/rome.jpg" , matched: false},
]

function App() {

  // States

  const [cards, setCards] = useState([]);

    // Choices states
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Turns states

  const [turns, setTurns] = useState(0);

  // 1. Shuffling Cards function
    // 1.1 Bring all the card Objects into array
    // 1.2 Scramble it by sorting with Math.random()
    // 1.3 assigns a new id to each object

  const shuffleCards = () =>{
    // 1.1 Bring all the card Objects into array
    const shuffledCards = [...cardImgs, ...cardImgs]
    // 1.2 Scramble it by sorting with Math.random()
    .sort(() => Math.random()-0.5)
    // 1.3 assigns a new id to each object
    .map((card)=> ({...card, id: Math.random()}))

    setCards(shuffledCards);
  }

  // 4. Making Card Choices
  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //4.5 Reset Turns
  const resetTurns = () =>{
    setChoiceOne(null);
    setChoiceTwo(null);
    // If turn = 0; 0 +1 = turn 1 ==> if turn = 1; 1+1= turn 2
    setTurns(prevTurns => prevTurns + 1);
  }

  // 5. Compare two cards
  useEffect(()=>{
    // if we have two Choices value, then start comparison
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log("it's a match");
        resetTurns();
      } else{
        console.log("not a match");
        resetTurns();
      }
    }
  },[choiceOne, choiceTwo])
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button 
      className='newGameBtn'
      onClick={shuffleCards}
      >New Game</button>
      <p>Turns: {turns}</p>

      {/* 2. Creating a card grid */}
      <div className="cards-grid">
        {cards.map((card)=>(
          // 3. Creating a Card Component
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
