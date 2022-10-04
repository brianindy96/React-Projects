import React from 'react'
import Card from './Card';
import "./Main.css";

const Main = ({ products }) => {
  return (
    <div className="main">
      <h2>Products</h2>
      <div className="product-container">
        {products.map((product) =>(
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Main