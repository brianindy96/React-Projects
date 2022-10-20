import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {

  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount)
  const total = amounts.reduce((a, c) => a += c, 0).toFixed(2);
  
  // console.log(amounts);
  // => array of transactions.amounts

  // console.log(total);
  // => total sum of those amounts
  return (
    <>
      <h4>Your Balance:</h4> 
      <h1> €{total}</h1> 
    </>
  )
}

export default Balance