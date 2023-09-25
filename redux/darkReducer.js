import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

export const DarkReducer = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    SS: (state, action) => {
      state.mode = action.payload.mode;
    },
  },
});

export const { SS} = DarkReducer.actions;
export default DarkReducer.reducer;
