// features/feature1/slice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchFeatureData } from './thunks';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const feature1Slice = createSlice({
  name: 'feature1',
  initialState,
  reducers: {
    // synchronous reducers
    clearData: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeatureData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeatureData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchFeatureData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearData } = feature1Slice.actions;
export default feature1Slice.reducer;