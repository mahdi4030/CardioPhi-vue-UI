import { configureStore } from '@reduxjs/toolkit';
import ecgReducer from './ecgSlice';
import heartRateReducer from './heartRateSlice';
import episodeDataReducer from './episodeDataSlice';
import episodesReducer from './episodesSlice';

/**
 * use for dispatch logger on console 
 *
import { createLogger } from 'redux-logger'

export const store = configureStore({
  reducer: {
    ecg: ecgReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(createLogger({ predicate: () => process.env.NODE_ENV !== 'production' })),
    devTools: process.env.NODE_ENV !== 'production'
})
*/

export const store = configureStore({
  reducer: {
    ecg: ecgReducer,
    heartRate: heartRateReducer,
    episodeData: episodeDataReducer,
    episodes: episodesReducer
  }
})