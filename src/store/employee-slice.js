import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    loading: false,
    error: null
  },
  reducers: {
    setEmployees: (state, action) => {
      state.list = action.payload;
      state.totalItems = action.payload.length;
    },
    addEmployee: (state, action) => {
      state.list.push({
        ...action.payload,
        id: Date.now().toString()
      });
      state.totalItems = state.list.length;
    },
    updateEmployee: (state, action) => {
      const index = state.list.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteEmployee: (state, action) => {
      state.list = state.list.filter(emp => emp.id !== action.payload);
      state.totalItems = state.list.length;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setCurrentPage,
  setLoading,
  setError
} = employeeSlice.actions;

export default employeeSlice.reducer;
