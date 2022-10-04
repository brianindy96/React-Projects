import React from 'react'

const Card = ({ product }) => {
  return (
    <div className="card">
        <h3>{product.id}</h3>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.size}</p>
        <p>{product.image}</p>
    </div>
  )
}

export default Card