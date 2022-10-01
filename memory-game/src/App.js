import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

// Step-by-Step


// 1. Shuffling Cards function
// 2. Creating a card grid
// 3. Creating a card component
// 4. Making Card Choices
// 5. Comparing Card Choices
// 6. Matching Cards
// 7. Flipping Cards
// 8. Flipping Animation
// 9. Disabling Card Selections
// 10. automatically start game on page is loaded
// 11. set choices value to null every time start new game


const cardImgs = [
  {"src" : "/img/berlin.jpg"},
  {"src" : "/img/london.jpg"},
  {"src" : "/img/osaka.jpg"},
  {"src" : "/img/newyork.jpg"},
  {"src" : "/img/paris.jpg"},
  {"src" : "/img/rome.jpg"},
]

function App() {

  // States

  const [cards, setCards] = useState([]);

    // Choices states
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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
    .map((card)=> ({...card, id: Math.random().toFixed(3)}))

    setCards(shuffledCards);
  }

  // 4. Making Card Choices
  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

    console.log(choiceOne);
    console.log(choiceTwo);
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button 
      className='newGameBtn'
      onClick={shuffleCards}
      >New Game</button>

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
