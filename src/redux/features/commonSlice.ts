import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  isLoading: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = commonSlice.actions;
export default commonSlice.reducer;
