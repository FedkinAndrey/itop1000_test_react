import { createSlice } from '@reduxjs/toolkit';
import { statusPending, statusFulfilled, statusRejected } from './thunks';

const initialState = {
  currencies: null,
  status: 'idle',
  error: null,
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(statusPending, (state) => {
        state.status = 'loading';
      })
      .addCase(statusFulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currencies = action.payload;
      })
      .addCase(statusRejected, (state, action) => {
        state.status = 'failed';
        state.error = action?.error.message;
      });
  },
});

export default currenciesSlice.reducer;
