import { createSlice } from '@reduxjs/toolkit'
import { fetchEcgSummary } from './asyncThunk';

const initialState = {
  AfibChart1: {
    afibEpisode1: [],
    afibEpisode2: [],
    afibEpisode3: [],
    duration: '',
    date_time: '',
  },

  avBlockChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  maxHRChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  minHRChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  otherBeatsChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  pausesChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  psvcChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  pvcChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  sinusChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  svtChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },
  
  vtChart: {
    chart1: [],
    chart2: [],
    chart3: [],
  },

  afibData: {
    burden: '',
    longest_duration: '',
    hr_range: '',
    avg: '',
  },
}



export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEcgSummary.fulfilled, (state, action) => {
      state.AfibChart1.afibEpisode1 = action.payload.episode_data.afib.chart_1.afib_episode_1;
      state.AfibChart1.afibEpisode2 = action.payload.episode_data.afib.chart_1.afib_episode_2;
      state.AfibChart1.afibEpisode3 = action.payload.episode_data.afib.chart_1.afib_episode_3;
      state.AfibChart1.duration = action.payload.episode_data.afib.chart_1.duration;
      state.AfibChart1.date_time = action.payload.episode_data.afib.chart_1.date_time;
      state.afibData.burden = action.payload.episode_data.afib.burden;
      state.afibData.longest_duration = action.payload.episode_data.afib.longest_duration;
      state.afibData.hr_range = action.payload.episode_data.afib.hr_range;
      state.afibData.avg = action.payload.episode_data.afib.avg;
  
      state.avBlockChart.chart1 = action.payload.episode_data.av_block.chart_1;
      state.avBlockChart.chart2 = action.payload.episode_data.av_block.chart_2;
      state.avBlockChart.chart3 = action.payload.episode_data.av_block.chart_3;
  
      state.maxHRChart.chart1 = action.payload.episode_data.max_hr.chart_1;
      state.maxHRChart.chart2 = action.payload.episode_data.max_hr.chart_2;
      state.maxHRChart.chart3 = action.payload.episode_data.max_hr.chart_3;
  
      state.minHRChart.chart1 = action.payload.episode_data.min_hr.chart_1;
      state.minHRChart.chart2 = action.payload.episode_data.min_hr.chart_2;
      state.minHRChart.chart2 = action.payload.episode_data.min_hr.chart_3;
  
      state.otherBeatsChart.chart1 = action.payload.episode_data.other_beats.chart_1;
      state.otherBeatsChart.chart2 = action.payload.episode_data.other_beats.chart_2;
      state.otherBeatsChart.chart2 = action.payload.episode_data.other_beats.chart_3;
  
      state.pausesChart.chart1 = action.payload.episode_data.pauses.chart_1;
      state.pausesChart.chart2 = action.payload.episode_data.pauses.chart_2;
      state.pausesChart.chart2 = action.payload.episode_data.pauses.chart_3;
  
      state.psvcChart.chart1 = action.payload.episode_data.psvc.chart_1;
      state.psvcChart.chart2 = action.payload.episode_data.psvc.chart_2;
      state.psvcChart.chart2 = action.payload.episode_data.psvc.chart_3;
  
      state.pvcChart.chart1 = action.payload.episode_data.pvc.chart_1;
      state.pvcChart.chart2 = action.payload.episode_data.pvc.chart_2;
      state.pvcChart.chart2 = action.payload.episode_data.pvc.chart_3;
  
      state.sinusChart.chart1 = action.payload.episode_data.sinus.chart_1;
      state.sinusChart.chart2 = action.payload.episode_data.sinus.chart_2;
      state.sinusChart.chart2 = action.payload.episode_data.sinus.chart_3;
  
      state.svtChart.chart1 = action.payload.episode_data.svt.chart_1;
      state.svtChart.chart2 = action.payload.episode_data.svt.chart_2;
      state.svtChart.chart2 = action.payload.episode_data.svt.chart_3;
  
      state.svtChart.chart1 = action.payload.episode_data.svt.chart_1;
      state.svtChart.chart2 = action.payload.episode_data.svt.chart_2;
      state.svtChart.chart2 = action.payload.episode_data.svt.chart_3;
      });
  },
})

export default episodesSlice.reducer