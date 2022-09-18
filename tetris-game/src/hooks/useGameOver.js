import React from 'react'
import { useState, useCallBack } from 'react'

const useGameOver = () => {
  const [gameOver, setGameOver] = useState(true);

  const resetGameOver = useCallBack(() => {
    setGameOver(false);
  }, []);

    return [gameOver, setGameOver, resetGameOver]
}

export default useGameOver