import BudgetTotal from "./BudgetTotal"
import ExpensesTotal from "./ExpensesTotal"
import Remaining from "./Remaining"

const Totals = () => {
  return (
    <div className="totalsContainer">
      <BudgetTotal />
      <ExpensesTotal />
      <Remaining />
    </div>
  )
}

export default Totals
