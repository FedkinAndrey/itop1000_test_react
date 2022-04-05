import { createSelector } from '@reduxjs/toolkit';

const selectSelf = (state) => state.currencies;

export const selectCurrencies = createSelector(selectSelf, (currencies) => ({
  currencies: currencies.currencies,
  status: currencies.status,
  error: currencies.error,
}));
