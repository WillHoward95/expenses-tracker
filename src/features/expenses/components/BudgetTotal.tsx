import { useSelector, useDispatch } from "react-redux"
import {
  setBudget,
  selectBudget,
  selectBudgetBoolean,
  setBudgetBoolean,
  setNewBudget,
  selectNewBudget,
} from "../expensesSlice"
import Joi from "joi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const BudgetTotal = () => {
  const dispatch = useDispatch()

  const budget = useSelector(selectBudget)
  const budgetBoolean = useSelector(selectBudgetBoolean)
  const newBudget = useSelector(selectNewBudget)

  const numberSchema = Joi.object({
    budget: Joi.number().greater(0),
  })

  const notify = (errorMessage: string) =>
    toast.error(errorMessage, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })

  return (
    <div>
      <div className="totalsItem budgetTotal">
        <div className="budgetDisplay">
          <p className="budgetTitle">Budget:</p>
          {budgetBoolean ? (
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const { error } = numberSchema.validate({
                    budget: Number(newBudget),
                  })
                  // console.log(newBudget)
                  if (error) {
                    console.log(error)
                    notify(error.toString())
                  } else {
                    dispatch(setBudget(newBudget))
                  }
                  dispatch(setBudgetBoolean())
                }
              }}
              className="input budgetInput"
              autoFocus
              // type="number"
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
              const { error } = numberSchema.validate({
                budget: Number(newBudget),
              })
              // console.log(newBudget)
              if (error) {
                console.log(error)
                notify(error.toString())
              } else {
                dispatch(setBudget(newBudget))
              }
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
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  )
}

export default BudgetTotal
