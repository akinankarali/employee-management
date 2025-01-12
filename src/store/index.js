import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employee-slice.js';

export const store = configureStore({
  reducer: {
    employees: employeeReducer
  }
});

store.subscribe(() => {
  localStorage.setItem('employeeState', JSON.stringify(store.getState()));
});
