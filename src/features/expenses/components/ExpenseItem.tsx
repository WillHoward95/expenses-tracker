const ExpenseItem = (props: any) => {
  const { item } = props

  console.log(item)

  return (
    <div className="expenseListItem">
      {item.title}: <span className="expenseListCost">£{item.amount}</span>
    </div>
  )
}

export default ExpenseItem
