import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';
import investorsReducer from './investorsSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    investors: investorsReducer,
  },
});
