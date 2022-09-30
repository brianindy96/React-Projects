import './App.css';

const cardImgs = [
  { "src": "../public/img/bird.png" },
  { "src": "../public/img/cat.png" },
  { "src": "../public/img/dog.png" },
  { "src": "../public/img/bird.png" },
  { "src": "../public/img/turtle.png" },
  { "src": "../public/img/dolphine.png" },
]

function App() {

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
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
