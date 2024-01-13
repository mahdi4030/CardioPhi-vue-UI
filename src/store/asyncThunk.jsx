import { ecgSummary } from '../api/rest';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchEcgSummary = createAsyncThunk("fetchEcgSummary", async () => {
  const res = await ecgSummary();
  return res;
});