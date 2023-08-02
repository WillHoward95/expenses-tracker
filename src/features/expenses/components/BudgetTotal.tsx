import { useSelector, useDispatch } from "react-redux"
import {
  setBudget,
  selectBudget,
  selectBudgetBoolean,
  setBudgetBoolean,
  setNewBudget,
  selectNewBudget,
} from "../expensesSlice"

const BudgetTotal = () => {
  const dispatch = useDispatch()

  const budget = useSelector(selectBudget)
  const budgetBoolean = useSelector(selectBudgetBoolean)
  const newBudget = useSelector(selectNewBudget)

  return (
    <div className="totalsItem budgetTotal">
      <div className="budgetDisplay">
        <p>Budget: </p>
        {budgetBoolean ? (
          <input
            autoFocus
            type="number"
            defaultValue={budget}
            onFocus={(e) => e.currentTarget.select()}
            onInput={(e) => {
              const target = e.target as HTMLInputElement
              dispatch(setNewBudget(target.value))
            }}
          ></input>
        ) : (
          <p>£{budget}</p>
        )}
      </div>

      {budgetBoolean ? (
        <button
          onClick={() => {
            dispatch(setBudget(newBudget))
            dispatch(setBudgetBoolean())
          }}
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(setBudgetBoolean())
          }}
        >
          Edit
        </button>
      )}
    </div>
  )
}

export default BudgetTotal
