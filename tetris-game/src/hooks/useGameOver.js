import React from 'react';
import { useState, useCallBack } from 'react'

export const useGameOver = () => {
  const [gameOver] = useState(true);
  const [setGameOver] = useState(true);
  
  // useCallBack, because we want it to get executed only when we want it.
  const resetGameOver = useCallBack(() => {
    setGameOver(false);
  }, []);

    return [gameOver, setGameOver, resetGameOver]
}

