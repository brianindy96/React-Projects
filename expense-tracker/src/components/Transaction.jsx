import React from 'react'

const Transaction = ({ transaction, amount }) => {
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text} <span>€{transaction.amount.toFixed(2)}</span><button className="delete-btn">x</button>
    </li>
  )
}

export default Transaction