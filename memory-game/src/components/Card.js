import React from 'react'
import './Card.css'

// 3. Creating a Card Component
const Card = ({ card, handleChoice }) => {

    const handleClick = () =>{
        handleChoice(card);
    }
    
  return (
    <div className="card">
        <div>
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