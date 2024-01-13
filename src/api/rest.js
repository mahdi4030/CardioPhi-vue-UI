/* eslint-disable max-len */
import axios from 'axios';

import heart_rate_chart from './heart_rate_chart.json';
import heart_rate_chart_scatter from './heart_rate_chart_scatter.json';

import ecg_chart from './ecg_chart.json';
import detections from './detections.json';

import afib_edpisode from './afib_episode_charts.json';
import av_block_edpisode from './av_block_episode_charts.json';
import maxhr_edpisode from './maxhr_episode_charts.json';
import minhr_edpisode from './minhr_episode_charts.json';
import other_beats_edpisode from './other_beats_episode_charts.json';
import pauses_edpisode from './pauses_episode-charts.json';
import psvc_edpisode from './psvc_episode_charts.json';
import pvc_edpisode from './pvc_episode_charts.json';
import sinus_edpisode from './sinus_episode_charts.json';
import svt_edpisode from './svt_episode_charts.json';
import vt_edpisode from './vt_episode_charts.json';

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_ROOT}`,
});

export async function ecgSummary() {
  return {
    metadata: { start_time: '1989-04-25T13:05:20', end_time: '1989-04-25T13:35:25.555556', duration: '30 minutes' },
    live_graph: {
      hr: { min: 58.378378378378386, current: 84.04669260700389, max: 114.89361702127658 },

      raw_signal: ecg_chart,
      detections,
    },
    episode_data: {
      min_hr: {
        value: '68 pbm',
        time: '07/10/2022 10:40 PM',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: minhr_edpisode.chart_1,
        chart_2: minhr_edpisode.chart_2,
        chart_3: minhr_edpisode.chart_3,
      },
      max_hr: {
        value: '168 pbm',
        time: '07/10/2022 10:40 PM',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: maxhr_edpisode.chart_1,
        chart_2: maxhr_edpisode.chart_2,
        chart_3: maxhr_edpisode.chart_3,
      },
      psvc: {
        value: '254 beats',
        hr_range: '55-178 bpm',
        avg: '89 pbm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: psvc_edpisode.chart_1,
        chart_2: psvc_edpisode.chart_2,
        chart_3: psvc_edpisode.chart_3,
      },
      pvc: {
        value: '254 beats',
        hr_range: '55-178 bpm',
        avg: '89 pbm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: pvc_edpisode.chart_1,
        chart_2: pvc_edpisode.chart_2,
        chart_3: pvc_edpisode.chart_3,
      },
      other_beats: {
        value: '254 beats',
        hr_range: '55-178 bpm',
        avg: '89 pbm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: other_beats_edpisode.chart_1,
        chart_2: other_beats_edpisode.chart_2,
        chart_3: other_beats_edpisode.chart_3,
      },
      sinus: {
        examples: '5 examples ',
        longest_duration: '1 d 20 h',
        hr_range: '55-178 bpm',
        avg: '89 bpm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: sinus_edpisode.chart_1,
        chart_2: sinus_edpisode.chart_2,
        chart_3: sinus_edpisode.chart_3,
      },
      afib: {
        burden: '45%',
        longest_duration: '1 d 20 h',
        hr_range: '55-178 bpm',
        avg: '89 bpm',
        chart_1: {
          duration: '1 d 8 h Avg HR 150 bpm',
          date_time: '03/24/22 10:43:22',
          afib_episode_1: afib_edpisode.chart_1,
          afib_episode_2: afib_edpisode.chart_2,
          afib_episode_3: afib_edpisode.chart_3,
        },
      },
      svt: {
        episodes: '1 episode',
        longest_duration: '1 d 20 h',
        hr_range: '55-178 bpm',
        avg: '89 bpm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: svt_edpisode.chart_1,
        chart_2: svt_edpisode.chart_2,
        chart_3: svt_edpisode.chart_3,
      },
      vt: {
        episodes: '5 episodes',
        longest_duration: '1 d 20 h',
        hr_range: '55-178 bpm',
        avg: '89 bpm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: vt_edpisode.chart_1,
        chart_2: vt_edpisode.chart_2,
        chart_3: vt_edpisode.chart_3,
      },
      pauses: {
        episodes: '3 episodes',
        longest_duration: '1 d 20 h',
        hr_range: '55-178 bpm',
        avg: '89 bpm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: pauses_edpisode.chart_1,
        chart_2: pauses_edpisode.chart_2,
        chart_3: pauses_edpisode.chart_3,
      },
      av_block: {
        type: '--%',
        longest_duration: '1 d 20 h',
        hr_range: '55-178 bpm',
        avg: '89 bpm',
        duration: '1 d 8 h Avg HR 150 bpm',
        date_time: '03/24/22 10:43:22',
        chart_1: av_block_edpisode.chart_1,
        chart_2: av_block_edpisode.chart_2,
        chart_3: av_block_edpisode.chart_3,
      },

    },
    heart_rate_chart,
    heart_rate_chart_scatter,
    prediction_widget: {
      daily: {
        AFIB: {
          0: 30.57536482810974, 1: 36.76665425300598, 2: 34.3063086271286, 3: 27.233043313026428, 4: 33.180415630340576, 5: 34.788212180137634, 6: 28.17707359790802, 7: 38.99441957473755, 8: 37.007805705070496, 9: 38.94234895706177,
        },
        SVT: {
          0: 28.79939377307892, 1: 30.643397569656372, 2: 29.847034811973572, 3: 24.95834082365036, 4: 35.3257030248642, 5: 31.018665432929993, 6: 30.531740188598633, 7: 40.53424894809723, 8: 32.792678475379944, 9: 26.210182905197144,
        },
        VT: {
          0: 40.6252384185791, 1: 32.58994221687317, 2: 35.84665656089783, 3: 47.80861735343933, 4: 31.49387836456299, 5: 34.19312536716461, 6: 41.29118323326111, 7: 20.471331477165222, 8: 30.1995187997818, 9: 34.84746515750885,
        },
      },
      hourly: {
        AFIB: {
          0: 30.57536482810974, 1: 36.76665425300598, 2: 34.3063086271286, 3: 27.233043313026428, 4: 33.180415630340576, 5: 34.788212180137634, 6: 28.17707359790802, 7: 38.99441957473755, 8: 37.007805705070496, 9: 38.94234895706177,
        },
        SVT: {
          0: 28.79939377307892, 1: 30.643397569656372, 2: 29.847034811973572, 3: 24.95834082365036, 4: 35.3257030248642, 5: 31.018665432929993, 6: 30.531740188598633, 7: 40.53424894809723, 8: 32.792678475379944, 9: 26.210182905197144,
        },
        VT: {
          0: 40.6252384185791, 1: 32.58994221687317, 2: 35.84665656089783, 3: 47.80861735343933, 4: 31.49387836456299, 5: 34.19312536716461, 6: 41.29118323326111, 7: 20.471331477165222, 8: 30.1995187997818, 9: 34.84746515750885,
        },
      },
      today: {
        AFIB: {
          morning: 35.38277980865285, afternoon: 60.16404445079977, evening: 38.48992114672825, overnight: 35.38277980865285,
        },
        SVT: {
          morning: 67.27047248003886, afternoon: 37.386311398539945, evening: 38.398583073875365, overnight: 67.27047248003886,
        },
        VT: {
          morning: 41.82649973666237, afternoon: 34.797083504181195, evening: 70.84687766441917, overnight: 41.82649973666237,
        },
      },
    },
    reportInfo: {
      patientInfo: {
        'Patient Name': 'John Smith',
        'Date of Birth': '02/02/2000 (22 yrs)',
        'Patient ID': 89854262,
        Sex: 'Male',
        'Primary Indication': 'Atrial Fibrillation',
        Physician: 'Dr. Will',
        Location: 'Kaiser Permanente',
        From: '01/18/22, 10:36am',
        To: '02/19/22, 06:19pm',
        'Monitoring Time': '20h 52min',
        'Analysis Time': '20h 52min',
      },
      'Heart Rate': {
        Avg: '75 bpm',
        Min: {
          val: '50 bpm',
          time: '01/18, 10:36am',
        },
        Max: {
          val: '102 bpm',
          time: '01/18, 10:36am',
        },
      },
      Ectopics: {
        'Premature Supraventricular Complexes': {
          Count: 150,
          'PSVC Per 24h': '168 (0.15 %)',
        },
        'Premature Ventricular Complexes': {
          Count: 140,
          'PVC Per 24h': '120 (0.15 %)',
        },
      },
      Other: {
        'Patient Events (count)': 2,
        'Noise (Burden)': '0.5 %',
      },
      'AFib/Flutter': {
        Burden: '45%',
        'Longest Duration': '1 d 20 h',
        'HR Range': '55-178 bpm',
        Avg: '89 bpm',
        episode_info: {
          label: 'Fastest AF',
          value: 'Avg HR 105 bpm',
          date: '03/02/20',
          time: '10:20am',
        },
      },
      Pauses: {
        Episodes: 4,
        'Longest pause': '5.9 s',
        Range: '2.9-5.9 s,',
      },
      VT: {
        Episodes: 3,
        'Longest episode': '57 s',
        'HR Range': '115-130 bpm',
        HR: '128 bpm',
      },
      SVT: {
        Episodes: 3,
        'Longest episode': '57 s',
        'HR Range': '115-130 bpm',
        HR: '128 bpm',
      },
      'AV Block': 'None Found',
      Findings: 'Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ... Patient had a min HR of 78 bpm, max HR of 158 bpm, and avg HR of 80 bpm. There were total ...',

      '1. AFib / Flutter Episode': {
        Duration: '1 d 20 h',
        'HR Range': '55-178 bpm',
        Avg: '89 bpm',
        '03/02/20': '10:20:am',
      },
      '2. AFib / Flutter Episode': {
        Duration: '1 d 20 h',
        'HR Range': '55-178 bpm',
        Avg: '89 bpm',
        '03/02/20': '10:20:am',
      },
    },
  };
}
