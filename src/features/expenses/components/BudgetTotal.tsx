import { useSelector, useDispatch } from "react-redux"
import {
  setBudget,
  selectBudget,
  selectBudgetBoolean,
  setBudgetBoolean,
} from "../expensesSlice"

const BudgetTotal = () => {
  const dispatch = useDispatch()

  const budget = useSelector(selectBudget)
  const budgetBoolean = useSelector(selectBudgetBoolean)

  if (budgetBoolean) {
    return (
      <div className="totalsItem budgetTotal">
        <p>
          Budget:
          <input
            type="number"
            defaultValue={budget}
            onBlur={(e) => {
              dispatch(setBudget(e.target.value))
              dispatch(setBudgetBoolean())
            }}
          ></input>
        </p>
        <button
        // onClick={(e) => {
        //   // dispatch(setBudget(e.target.value))
        //   dispatch(setBudgetBoolean())
        // }}
        >
          Save
        </button>
      </div>
    )
  }

  return (
    <div className="totalsItem budgetTotal">
      <p>Budget: £{budget}</p>
      <button
        onMouseDown={() => {
          dispatch(setBudgetBoolean())
        }}
      >
        Edit
      </button>
    </div>
  )
}

export default BudgetTotal
