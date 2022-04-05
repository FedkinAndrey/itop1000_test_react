import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from './currencies/slice';

export default configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});
