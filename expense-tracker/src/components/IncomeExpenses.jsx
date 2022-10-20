import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => transaction.amount)
    // console.log(amounts);
    const plus = amounts.filter((amount) => amount > 0);
    // console.log(plus);
    const minus = amounts.filter((amount) => amount < 0);
    // console.log(minus);
    const incomeTotal = plus.reduce((a, c) => a += c, 0).toFixed(2);
    const expenseTotal = minus.reduce((a, c) => a += c, 0).toFixed(2);
    // console.log(incomeTotal);
    // console.log(expenseTotal)
    return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">
                €{incomeTotal}
            </p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p className="money minus">
                -€{Math.abs(expenseTotal).toFixed(2)}
            </p>
        </div>
    </div>
  )
}

export default IncomeExpenses