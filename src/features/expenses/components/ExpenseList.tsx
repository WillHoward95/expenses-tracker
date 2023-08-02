import { selectExpensesArray } from "../expensesSlice"
import { useSelector } from "react-redux"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = () => {
  const expensesArray = useSelector(selectExpensesArray)

  return expensesArray.map(
    (item: { title: string; amount: number }, index: number) => {
      return <ExpenseItem item={item} key={index} />
    },
  )
}

export default ExpenseList
