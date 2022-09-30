import React from 'react'
import "./Card.css";

const Card = ({ card, handleChoice, flipped }) => {

    const handleClick = () =>{
        handleChoice(card)
    }
  return (
    <div className="card">
        <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.src} alt="Front of Card Img" />
            <img 
            className="back" 
            onClick={handleClick}
            src="img/nasa-Yj1M5riCKk4-unsplash.jpg" 
            alt="card back" />
        </div>
    </div>
  )
}

export default Card