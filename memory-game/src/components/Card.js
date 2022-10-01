import React from 'react'
import './Card.css'

// 3. Creating a Card Component
const Card = ({ card, handleChoice, flipped, disabled }) => {

    const handleClick = () =>{
        // if disabled is false, only then will we be able to handleChoices again
        if(!disabled){
            handleChoice(card);
        }
    }

  return (
    <div className="card">
        {/* class name will be flipped if flipped is correct,  */}
        <div className={flipped ? "flipped" : ""}>
            <img 
            className='back' 
            src="/img/background.jpg" 
            alt="back img of the card"
            onClick={handleClick} />
            <img className='front' src={card.src} alt="front img of card" />
        </div>
    </div>
  )
}

export default Card