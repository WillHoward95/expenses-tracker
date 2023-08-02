import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface ExpensesState {
  value: number
  status: "idle" | "loading" | "failed"
  budget: number
  budgetBoolean: boolean
  expenseTitle: string
  expenseAmount: number
  expensesArray: []
  totalExpenses: number
}

const initialState: ExpensesState = {
  value: 0,
  status: "idle",
  budget: 0,
  budgetBoolean: false,
  expenseTitle: "",
  expenseAmount: 0,
  expensesArray: [],
  totalExpenses: 0,
}

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    setBudget: (state, action) => {
      state.budget = action.payload
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
      state.expensesArray.push(action.payload)
      state.totalExpenses = state.totalExpenses + action.payload.amount
    },
  },
})

export const {
  increment,
  setBudget,
  setBudgetBoolean,
  setExpenseTitle,
  setExpenseAmount,
  setNewExpense,
} = expensesSlice.actions

export const selectCount = (state: RootState) => state.expenses.value
export const selectBudget = (state: RootState) => state.expenses.budget
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

export default expensesSlice.reducer
