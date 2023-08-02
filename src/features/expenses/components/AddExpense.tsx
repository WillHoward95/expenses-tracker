import { useSelector, useDispatch } from "react-redux"
import {
  selectExpenseTitle,
  setExpenseTitle,
  setExpenseAmount,
  selectExpenseAmount,
  setNewExpense,
  selectExpensesArray,
} from "../expensesSlice"

const AddExpense = () => {
  const dispatch = useDispatch()

  const expenseTitle = useSelector(selectExpenseTitle)
  const expenseAmount = useSelector(selectExpenseAmount)
  const expensesArray = useSelector(selectExpensesArray)

  return (
    <>
      <h2 className="addExpenseTitle">Add an expense</h2>
      <div className="addExpense">
        <div className="addExpenseTitles">
          <h4>Title:</h4>
          <input
            className="expenseInput"
            type="text"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              dispatch(setExpenseTitle(target.value))
            }}
          />
        </div>
        <div className="addExpenseTitles">
          <h4>Amount:</h4>
          <input
            className="expenseInput"
            type="number"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              dispatch(setExpenseAmount(Number(target.value)))
            }}
          />
        </div>
      </div>
      <button
        className="addExpenseButton button"
        onClick={(e) => {
          if (expenseTitle) {
            if (expenseAmount > 0) {
              dispatch(
                setNewExpense({ title: expenseTitle, amount: expenseAmount }),
              )
            }
          }
        }}
      >
        Add Expense
      </button>
      <h3 className="expensesListTitle">Expenses:</h3>
    </>
  )
}

export default AddExpense
