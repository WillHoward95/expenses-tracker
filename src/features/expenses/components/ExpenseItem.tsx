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

const ExpenseItem = (props: any) => {
  const dispatch = useDispatch()
  const editBoolean = useSelector(selectExpenseEditBoolean)
  const { item } = props
  const expenseEditTitle = useSelector(selectExpenseEditTitle)
  const expenseEditAmount = useSelector(selectExpenseEditAmount)

  return (
    <div className="expenseListItem">
      {editBoolean ? (
        <input
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
            type="number"
            placeholder={item.amount}
            className="expenseListCost"
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
              if (expenseEditTitle) {
                if (expenseEditAmount > 0) {
                  dispatch(
                    editExpense({
                      title: expenseEditTitle,
                      amount: expenseEditAmount,
                      oldExpense: props.item,
                    }),
                  )
                }
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
