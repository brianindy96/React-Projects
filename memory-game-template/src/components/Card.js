import React from 'react'
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
        <div>
            <img className="front" src={card.src} alt="Front of Card Img" />
            <img className="back" src="img/nasa-Yj1M5riCKk4-unsplash.jpg" alt="card back" />
        </div>
    </div>
  )
}

export default Card