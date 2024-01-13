import { createSlice } from '@reduxjs/toolkit'
import { fetchEcgSummary } from './asyncThunk';

const initialState = {
  beatdata: [],
  beatdata_scatter: {}
}

export const heartRateSlice = createSlice({
  name: 'heartRate',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEcgSummary.fulfilled, (state, action) => {
        state.beatdata = action.payload.heart_rate_chart;
        state.beatdata_scatter = action.payload.heart_rate_chart_scatter;
      });
  },
})

export default heartRateSlice.reducer