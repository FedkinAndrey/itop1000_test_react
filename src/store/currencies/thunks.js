import { createAsyncThunk } from '@reduxjs/toolkit';
import CurrenciesService from '../../api/CurrenciesService';

const fetchCurrencies = createAsyncThunk(
  'currencies/getCurrencies',
  async () => {
    const response = await CurrenciesService.getAll();
    return response.data;
  }
);

const statusPending = fetchCurrencies.pending;
const statusFulfilled = fetchCurrencies.fulfilled;
const statusRejected = fetchCurrencies.rejected;

export { fetchCurrencies, statusPending, statusFulfilled, statusRejected };
