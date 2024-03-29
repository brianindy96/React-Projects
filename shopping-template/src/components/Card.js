import React from 'react'
import "./Card.css";

const Card = ({ product, onAdd }) => {


  return (
    <div className="card">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.size}</p>
        <div className="image-box">
            <img src={product.image} alt={product.name}></img>
        </div>
        <button onClick={() => onAdd(product)} className="addBtn">Add to Cart</button>
    </div>
  )
}

export default Card