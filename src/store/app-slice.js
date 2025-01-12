import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: false,
    error: null,
    toast: {
      message: '',
      type: '',
      visible: false
    },
    language: 'en'
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    showToast: (state, action) => {
      state.toast = {
        message: action.payload.message,
        type: action.payload.type,
        visible: true
      };
    },
    hideToast: (state) => {
      state.toast.visible = false;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    }
  }
});

export const { 
  setLoading, 
  setError, 
  showToast, 
  hideToast,
  setLanguage 
} = appSlice.actions;
export default appSlice.reducer; 