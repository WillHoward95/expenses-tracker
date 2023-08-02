import { useDispatch } from "react-redux"

const ExpenseItem = (props: any) => {
  const dipatch = useDispatch()
  const { item, key } = props

  console.log(props)

  return (
    <div className="expenseListItem">
      {item.title}:
      <div className="listItemButtons">
        <span className="expenseListCost">£{item.amount}</span>
        <button className="expenseListCost expenseListEdit">Edit</button>
        <button
          className="expenseListCost expenseListDelete"
          onClick={(e) => {}}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default ExpenseItem
