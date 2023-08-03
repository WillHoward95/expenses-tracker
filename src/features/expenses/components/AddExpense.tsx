import { useSelector, useDispatch } from "react-redux"
import {
  selectExpenseTitle,
  setExpenseTitle,
  setExpenseAmount,
  selectExpenseAmount,
  setNewExpense,
  selectExpensesArray,
  selectKey,
} from "../expensesSlice"
import Joi from "joi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddExpense = () => {
  const dispatch = useDispatch()

  const expenseTitle = useSelector(selectExpenseTitle)
  const expenseAmount = useSelector(selectExpenseAmount)
  const key = useSelector(selectKey)

  const inputSchema = Joi.object({
    amount: Joi.number().required().greater(0),
    title: Joi.string().required().min(1),
  })

  const notify = (errorMessage: string) =>
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })

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
            // type="number"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              dispatch(setExpenseAmount(Number(target.value)))
            }}
          />
        </div>
      </div>
      <button
        className="addExpenseButton button"
        onMouseDown={(e) => {
          const { error } = inputSchema.validate({
            amount: expenseAmount,
            title: expenseTitle,
          })
          // console.log(newBudget)
          if (error) {
            console.log(error)
            notify(error.toString())
          } else if (expenseAmount > 0) {
            dispatch(
              setNewExpense({
                title: expenseTitle,
                amount: expenseAmount,
                key: key,
              }),
            )
          }
        }}
      >
        Add Expense
      </button>
      <h3 className="expensesListTitle">Expenses:</h3>
      {/* <ToastContainer pauseOnFocusLoss={false} /> */}
    </>
  )
}

export default AddExpense
