import { selectTotalExpenses } from "../expensesSlice"
import { useSelector } from "react-redux"

const ExpensesTotal = () => {
  const totalExpenses = useSelector(selectTotalExpenses)
  console.log(totalExpenses)

  return (
    <div className="totalsItem expenseTotal">
      <p>Total Expenses: £{totalExpenses}</p>
    </div>
  )
}

export default ExpensesTotal
