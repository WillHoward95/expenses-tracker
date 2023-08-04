import { useSelector, useDispatch } from "react-redux"
import {
  selectExpenseTitle,
  setExpenseTitle,
  setExpenseAmount,
  selectExpenseAmount,
  setNewExpense,
  selectKey,
} from "../expensesSlice"
import Joi from "joi"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRef } from "react"

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

  const titleRef = useRef<HTMLInputElement>(null)
  const amountRef = useRef<HTMLInputElement>(null)

  const onClear = () => {
    if (titleRef.current) {
      titleRef.current.value = ""
    }
    if (amountRef.current) {
      amountRef.current.value = ""
    }
  }

  return (
    <>
      <h2 className="addExpenseTitle">Add an expense</h2>
      <div className="addExpense">
        <div className="addExpenseTitles">
          <h4>Title:</h4>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const { error } = inputSchema.validate({
                  amount: expenseAmount,
                  title: expenseTitle,
                })
                // console.log(newBudget)
                if (error) {
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
                onClear()
              }
            }}
            className="expenseInput"
            type="text"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              dispatch(setExpenseTitle(target.value))
            }}
            ref={titleRef}
          />
        </div>
        <div className="addExpenseTitles">
          <h4>Amount:</h4>
          <input
            className="expenseInput"
            // type="number"
            ref={amountRef}
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              dispatch(setExpenseAmount(Number(target.value)))
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const { error } = inputSchema.validate({
                  amount: expenseAmount,
                  title: expenseTitle,
                })
                // console.log(newBudget)
                if (error) {
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
                onClear()
              }
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
        onClick={onClear}
      >
        Add Expense
      </button>
      <h3 className="expensesListTitle">Expenses:</h3>
      {/* <ToastContainer pauseOnFocusLoss={false} /> */}
    </>
  )
}

export default AddExpense
