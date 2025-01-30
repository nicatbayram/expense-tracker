import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Expense, Category, Budget } from '../../types';

interface ExpenseState {
  expenses: Expense[];
  categories: Category[];
  budgets: Record<string, Budget>;
  loading: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  expenses: [],
  categories: [
    { id: '1', name: 'Food', icon: '🍽️', color: '#FF6B6B' },
    { id: '2', name: 'Transport', icon: '🚗', color: '#4ECDC4' },
    { id: '3', name: 'Shopping', icon: '🛍️', color: '#45B7D1' },
    { id: '4', name: 'Bills', icon: '📄', color: '#96CEB4' },
    { id: '5', name: 'Entertainment', icon: '🎬', color: '#FFEEAD' },
  ],
  budgets: {},
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    updateExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.expenses.findIndex(exp => exp.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
    },
    setBudget: (state, action: PayloadAction<Budget>) => {
      state.budgets[action.payload.categoryId] = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addExpense,
  updateExpense,
  deleteExpense,
  setBudget,
  setLoading,
  setError,
} = expenseSlice.actions;
export default expenseSlice.reducer;