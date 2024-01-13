import { createSlice } from '@reduxjs/toolkit'


const minHR = {
  value: ' 68 pbm',
  time: '07/10/2022 10:40 PM',
};

const maxHR = {
  value: ' 168 pbm',
  time: '07/10/2022 9:40 AM',
};

const episodeData = [
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: "black",
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: "black",
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: "black",
    },
  }],
];

const episodeLayout = {
  xaxis: {
    showline: true,
    showgrid: false,
    showticklabels: false,
    zeroline: false,
  },
  yaxis: {
    fixedrange: true,
    showline: false,
    showgrid: false,
    showticklabels: false,
    zeroline: false,
  },

  margin: {
    b: 0,
    l: 10,
    r: 10,
    t: 0,
  },
  width: 500,
  hovermode: false,
};

const psvc = {
  beats: '254 beats',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const pvc = {
  beats: '254 beats',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const otherBeats = {
  beats: '254 beats',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const sinus = {
  examples: '5 examples',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const afib = {
  burden: '45%',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};
const afibEpisodesData = [
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
  [{
    x: [],
    y: [],
    type: 'scatter',
    line: {
      color: 'black',
    },
  }],
];

const svt = {
  episodes: '1 episode',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};
const vt = {
  episodes: '5 episodes',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

const pauses = {
  episodes: '3 episodes',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};
const avBlock = {
  type: '--%',
  'longest duration': '1 d 20 h',
  'hr range': '55-178 bpm',
  avg: '89 bpm',
};

/** 
 * initial state
 */
const initialState = {
  showHrNotification: false,

  afib: afib,
  minHR: minHR,
  maxHR: maxHR,
  psvc: psvc,
  pvc: pvc,
  otherBeats: otherBeats,
  sinus: sinus,
  svt: svt,
  vt: vt,
  pauses: pauses,
  avBlock: avBlock,
  episodeData: episodeData,
  afibEpisodesData: afibEpisodesData,
  episodeLayout: episodeLayout,

  episodeChartData: {
    minHR: {
      episodeData: minHR,
      chartTitle: 'Min HR',
      chartId: 'minhr',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#ffa29e',
    },
    maxHR: {
      episodeData: maxHR,
      chartTitle: 'Max HR',
      chartId: 'maxhr',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#9274d5',
    },
    PSVC: {
      episodeData: psvc,
      chartTitle: 'PSVC',
      chartId: 'psvc',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#c5e1a5',
    },
    PVC: {
      episodeData: pvc,
      chartTitle: 'PVC',
      chartId: 'pvc',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#ffab40',
    },
    OtherBeats: {
      episodeData: otherBeats,
      chartTitle: 'Other Beats',
      chartId: 'other_beats',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#82b1ff',
    },
    sinus: {
      episodeData: sinus,
      chartTitle: 'Sinus',
      chartId: 'sinus',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#ff8a65',
    },
    AFib: {
      episodeData: afib,
      chartTitle: 'AFib/Flutter',
      chartId: 'afib',
      data: afibEpisodesData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#ffed80',
    },
    SVT: {
      episodeData: svt,
      chartTitle: 'SVT',
      chartId: 'svt',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#b39ddb',
    },
    VT: {
      episodeData: vt,
      chartTitle: 'VT',
      chartId: 'vt',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#ff80ab',
    },
    pauses: {
      episodeData: pauses,
      chartTitle: 'Pauses',
      chartId: 'pauses',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#80ffaa',
    },
    avBlock: {
      episodeData: avBlock,
      chartTitle: 'AV Block',
      chartId: 'av_block',
      data: episodeData,
      layout: episodeLayout,
      checked: false,
      show: false,
      color: '#80eaff',
    },
  },

  selectedChartData: {
    episodeData: {},
    chartTitle: '',
    chartId: '',
    data: [{}],
    layout: {},
    checked: "",
    show: false,
    color: '',
  },
}

export const episodeDataSlice = createSlice({
  name: 'episodeData',
  initialState,
  reducers: {
    updateShowHrNotification(state) {
      state.showHrNotification = !state.showHrNotification;
    },
    setSelectedChartData(state, action) {
      state.selectedChartData = action.payload;
    },
    setEpisodeChartDataChecked(state, action) {
      Object.keys(state.episodeChartData).map((item) => {
        if(item === action.payload.key) {
          state.episodeChartData[item].checked = action.payload.checked;
        }
        else {
          state.episodeChartData[item].checked = false;
        }
      });
    },
    setEpisodeData(state, action) {
      state.episodeData = action.payload.episodeData;
      state.afibEpisodesData = action.payload.afibEpisodesData;

      Object.keys(state.episodeChartData).map((item) => {
        state.episodeChartData[item].data = action.payload.episodeData;
      });
    }
  },
})

export const { updateShowHrNotification, setSelectedChartData, setEpisodeChartDataChecked, setEpisodeData } = episodeDataSlice.actions

export default episodeDataSlice.reducer