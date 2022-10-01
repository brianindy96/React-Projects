import React from 'react'
import './Card.css'

// 3. Creating a Card Component
const Card = ({ card }) => {
  return (
    <div className="card">
        <div>
            <img className='front' src="/img/background.jpg" alt="" />
            <img className='back' src={card.src} alt="back img of card" />
        </div>
    </div>
  )
}

export default Card