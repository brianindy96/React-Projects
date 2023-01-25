import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid black;
    height: 400px;
    padding: 20px;
    border-radius: 10px;
`

const Product = ({ product }) => {
  return (
    <Card>
        {product.name}
        {product.desc}
    </Card>
  )
}

export default Product