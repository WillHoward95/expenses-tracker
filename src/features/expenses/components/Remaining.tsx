import { selectBudget, selectTotalExpenses } from "../expensesSlice"
import { useSelector } from "react-redux"

const Remaining = () => {
  const budget = useSelector(selectBudget)
  const expenses = useSelector(selectTotalExpenses)

  return (
    <div className="totalsItem remainingTotal">
      <p>Remaining: £{budget - expenses}</p>
    </div>
  )
}

export default Remaining
