import { useDispatch, useSelector } from "react-redux"
import {
  deleteExpense,
  selectExpenseEditBoolean,
  setExpenseEditBoolean,
  setExpenseEditTitle,
  selectExpenseEditTitle,
  setExpenseEditAmount,
  selectExpenseEditAmount,
  editExpense,
} from "../expensesSlice"
import Joi from "joi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ExpenseItem = (props: any) => {
  const dispatch = useDispatch()
  const editBoolean = useSelector(selectExpenseEditBoolean)
  const { item } = props
  const expenseEditTitle = useSelector(selectExpenseEditTitle)
  const expenseEditAmount = useSelector(selectExpenseEditAmount)

  const editSchema = Joi.object({
    budget: Joi.number().greater(-1),
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
    <div className="expenseListItem">
      {editBoolean ? (
        <input
          className="input"
          type="text"
          placeholder={item.title}
          onInput={(e) => {
            const target = e.target as HTMLInputElement
            dispatch(setExpenseEditTitle(target.value))
          }}
        ></input>
      ) : (
        <span>{item.title}:</span>
      )}

      <div className="listItemButtons">
        {editBoolean ? (
          <input
            // type="number"
            placeholder={item.amount}
            className="input"
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              dispatch(setExpenseEditAmount(target.value))
            }}
          ></input>
        ) : (
          <span className="expenseListCost">£{item.amount}</span>
        )}

        {editBoolean ? (
          <button
            className="expenseListCost expenseListEdit"
            onClick={() => {
              const { error } = editSchema.validate({
                budget: Number(expenseEditAmount),
              })
              if (error) {
                console.log(error)
                notify(error.toString())
              } else {
                dispatch(
                  editExpense({
                    title: expenseEditTitle || item.title,
                    amount: expenseEditAmount || item.amount,
                    oldExpense: props.item,
                  }),
                )
              }

              dispatch(setExpenseEditBoolean())
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="expenseListCost expenseListEdit"
            onClick={() => {
              console.log(expenseEditAmount)
              dispatch(setExpenseEditBoolean())
            }}
          >
            Edit
          </button>
        )}

        <button
          className="expenseListCost expenseListDelete"
          onClick={(e) => {
            dispatch(deleteExpense(props.item))
          }}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default ExpenseItem
