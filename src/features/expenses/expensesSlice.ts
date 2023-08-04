import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface ExpensesState {
  value: number
  status: "idle" | "loading" | "failed"
  budget: number
  newBudget: number
  budgetBoolean: boolean
  expenseTitle: string
  expenseAmount: number
  expensesArray: [{ key: number; amount: number; title: string }]
  totalExpenses: number
  key: number
  expenseEditBoolean: boolean
  expenseEditTitle: string
  expenseEditAmount: number
}

const initialState: ExpensesState = {
  value: 0,
  status: "idle",
  budget: 0,
  newBudget: 0,
  budgetBoolean: true,
  expenseTitle: "",
  expenseAmount: 0,
  expensesArray: [{ key: 0, amount: 0, title: "" }],
  totalExpenses: 0,
  key: 1,
  expenseEditBoolean: false,
  expenseEditTitle: "",
  expenseEditAmount: 0,
}

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    setBudget: (state, action) => {
      state.budget = action.payload
    },
    setNewBudget: (state, action) => {
      state.newBudget = action.payload
    },
    setBudgetBoolean: (state) => {
      state.budgetBoolean = !state.budgetBoolean
    },
    setExpenseTitle: (state, action) => {
      state.expenseTitle = action.payload
    },
    setExpenseAmount: (state, action) => {
      state.expenseAmount = action.payload
    },
    setNewExpense: (state, action) => {
      action.payload.key = state.key
      state.expensesArray.push(action.payload)
      state.totalExpenses = state.totalExpenses + action.payload.amount
      state.key += 1
    },
    deleteExpense: (state, action) => {
      const index = state.expensesArray.findIndex((item) => {
        return action.payload.key === item.key
      })
      state.totalExpenses = state.totalExpenses - action.payload.amount
      state.expensesArray.splice(index, 1)
    },
    setExpenseEditBoolean: (state) => {
      state.expenseEditBoolean = !state.expenseEditBoolean
    },
    setExpenseEditTitle: (state, action) => {
      state.expenseEditTitle = action.payload
    },
    setExpenseEditAmount: (state, action) => {
      state.expenseEditAmount = action.payload
    },
    editExpense: (state, action) => {
      const index = state.expensesArray.findIndex((item) => {
        return action.payload.oldExpense.key === item.key
      })

      state.expensesArray[index].title = action.payload.title
      state.expensesArray[index].amount = action.payload.amount

      let expensesCounter = 0
      state.expensesArray.map((item) => {
        expensesCounter += Number(item.amount)
      })

      state.totalExpenses = expensesCounter

      state.expenseEditTitle = ""
      state.expenseEditAmount = 0
    },
  },
})

export const {
  increment,
  setBudget,
  setNewBudget,
  setBudgetBoolean,
  setExpenseTitle,
  setExpenseAmount,
  setNewExpense,
  deleteExpense,
  setExpenseEditBoolean,
  setExpenseEditTitle,
  setExpenseEditAmount,
  editExpense,
} = expensesSlice.actions

export const selectCount = (state: RootState) => state.expenses.value
export const selectBudget = (state: RootState) => state.expenses.budget
export const selectNewBudget = (state: RootState) => state.expenses.newBudget
export const selectBudgetBoolean = (state: RootState) =>
  state.expenses.budgetBoolean
export const selectExpenseTitle = (state: RootState) =>
  state.expenses.expenseTitle
export const selectExpenseAmount = (state: RootState) =>
  state.expenses.expenseAmount
export const selectExpensesArray = (state: RootState) =>
  state.expenses.expensesArray
export const selectTotalExpenses = (state: RootState) =>
  state.expenses.totalExpenses
export const selectKey = (state: RootState) => state.expenses.key
export const selectExpenseEditBoolean = (state: RootState) =>
  state.expenses.expenseEditBoolean
export const selectExpenseEditTitle = (state: RootState) =>
  state.expenses.expenseEditTitle
export const selectExpenseEditAmount = (state: RootState) =>
  state.expenses.expenseEditAmount

export default expensesSlice.reducer
