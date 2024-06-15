import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    changeTextFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeTextFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
