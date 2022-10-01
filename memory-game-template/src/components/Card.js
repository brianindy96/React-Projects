import React from 'react'
import "./Card.css";

const Card = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () =>{
      // if disabled is false, only then will we be able to handleChoices again
        if(!disabled){
          handleChoice(card)
        }
    }
  return (
    <div className="card">
        <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.src} alt="Front of Card Img" />
            <img 
            className="back" 
            onClick={handleClick}
            src="img/nasa.jpg" 
            alt="card back" />
        </div>
    </div>
  )
}

export default Card