import { createSlice } from '@reduxjs/toolkit';

export const investorsSlice = createSlice({
  name: 'investors',
  initialState: {
    investors: [],
  },
  reducers: {
    addInvestors: (state, action) => {
      state.investors = action.payload;
    },
  },
});

export const { addInvestors } = investorsSlice.actions;
export default investorsSlice.reducer;
