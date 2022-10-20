import React from 'react'

const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? "-" : "+";

    return (
        <li className={sign < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign + " "}€{Math.abs(transaction.amount.toFixed(2))}</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction