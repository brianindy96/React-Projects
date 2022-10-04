import React from 'react'
import "./Card.css";

const Card = ({ product }) => {
  return (
    <div className="card">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.size}</p>
        <div className="image-box">
            <img src={product.image} alt="product images"></img>
        </div>
    </div>
  )
}

export default Card