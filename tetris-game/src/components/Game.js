import React from 'react'
import Menu from './Menu'

const Game = ({ rows, columns}) => {

  const startBtn = ()=>{
    console.log("start");
  }
  return (
    <div className="Game">
        <Menu onClick={startBtn} />
    </div>
  )
}

export default Game