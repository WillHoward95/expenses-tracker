import { useDispatch } from "react-redux"
import { deleteExpense } from "../expensesSlice"

const ExpenseItem = (props: any) => {
  const dispatch = useDispatch()
  const { item } = props

  return (
    <div className="expenseListItem">
      {item.title}:
      <div className="listItemButtons">
        <span className="expenseListCost">£{item.amount}</span>
        <button className="expenseListCost expenseListEdit">Edit</button>
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
