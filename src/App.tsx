import Totals from "./features/expenses/components/Totals"
import AddExpense from "./features/expenses/components/AddExpense"
import ExpenseList from "./features/expenses/components/ExpenseList"
import "./App.css"

function App() {
  return (
    <div className="appContainer">
      <h1>Budget Planner App</h1>
      <Totals />
      <AddExpense />
      <ExpenseList />
    </div>
  )
}

export default App
