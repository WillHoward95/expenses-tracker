import { selectBudget, selectTotalExpenses } from "../expensesSlice"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const Remaining = () => {
  const budget = useSelector(selectBudget)
  const expenses = useSelector(selectTotalExpenses)
  const remaining = budget - expenses

  const [backgroundColor, setBackgroundColor] = useState("rgb(212, 237, 218)")
  const [border, setBorder] = useState("1px solid rgb(167, 226, 181)")

  useEffect(() => {
    if (remaining < 0) {
      setBackgroundColor("rgb(255, 200, 200)")
      setBorder("1px solid red")
    } else {
      setBackgroundColor("rgb(212, 237, 218)")
      setBorder("1px solid rgb(167, 226, 181)")
    }
  }, [remaining])

  return (
    <div
      className="totalsItem remainingTotal"
      style={{ backgroundColor: backgroundColor, border: border }}
    >
      <p>Remaining: £{remaining}</p>
    </div>
  )
}

export default Remaining
