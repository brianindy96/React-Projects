import { useContext } from 'react'
// import GlobalContext from GlobalState.jsx
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

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
              <Transaction key={transaction.id} transaction={transaction} amount={transaction.amount} />
            ))}
        </ul>
    </>
  )
}

export default TransactionList