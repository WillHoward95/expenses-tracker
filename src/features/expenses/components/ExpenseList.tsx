import { selectExpensesArray } from "../expensesSlice"
import { useSelector } from "react-redux"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = () => {
  const expensesArray = useSelector(selectExpensesArray)

  return expensesArray.map((item) => {
    if (item.key > 0) {
      return <ExpenseItem item={item} />
    }
  })
}

export default ExpenseList
