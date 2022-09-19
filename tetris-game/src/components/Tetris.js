import React from 'react'
import Board from './Board';
import { useBoard } from '../hooks/useBoard';

// Tetris Container for Gameplay
const Tetris = ({ rows, columns, setGameOver }) => {
    const [board, setBoard] = useBoard({ rows, columns });
    return (
    <Board board={board} />
    
  )
}

export default Tetris