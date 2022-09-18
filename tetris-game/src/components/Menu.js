import React from 'react'
import "./Menu.css"

const Menu = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
        Start Game
    </button>
  )
}

export default Menu