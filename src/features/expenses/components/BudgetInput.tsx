import { useRef, useEffect } from "react"

const BudgetInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <input
        // autoFocus
        type="number"
        defaultValue={10}
        ref={inputRef}
        // onFocus={(e) => e.currentTarget.select()}
        // onBlur={(e) => {
        //   dispatch(setBudget(e.target.value))
        //   dispatch(setBudgetBoolean())
        // }}
      ></input>
    </>
  )
}

export default BudgetInput
