import { useContext } from 'react'
// import GlobalContext from GlobalState.jsx
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {

  // returns the Object
  // const context = useContext(GlobalContext);

  // returns array
  const { transactions } = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul className="list">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="minus">
                {transaction.text} <span>€{transaction.amount.toFixed(2)}</span><button className="delete-btn">x</button>
            </li>
            ))}
        </ul>
    </>
  )
}

export default TransactionList