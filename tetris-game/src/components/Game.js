import React from 'react'
import Menu from './Menu'
import Tetris from "../components/Tetris"

import { useGameOver } from "../hooks/useGameOver"

const Game = ({ rows, columns}) => {
  // setting the State of the game
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = ()=>{
    resetGameOver();
    console.log(`Start gameOver is ${gameOver}`);
  };
  
  return (
    <div className="Game">
        {gameOver ? (
        <Menu onClick={start} />
        ) : (
          <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
        )}
    </div>
  )
};

export default Game