import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Plotly from "plotly.js-dist-min";

import { setSelectedChartData, setEpisodeChartDataChecked } from 'store/episodeDataSlice';

import { BsPencil } from "react-icons/bs";
import { CgClose } from 'react-icons/cg';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export default function EpisodeChartForDrawer(props) {
  const dispatch = useDispatch();

  const episodePlotRef = useRef(null);
  const episodePlotRef2 = useRef(null);

  const selectedChartData = useSelector((state) => state.episodeData.selectedChartData);
  const {chartId, chartTitle, episodeData, data, layout} = selectedChartData;

  let [current, setCurrent] = useState(1);
  let [current2, setCurrent2] = useState(1);
  const total = 3;

  useEffect(() => {
    Plotly.newPlot(episodePlotRef.current,
      [
        {
          x: data[0][0].x,
          y: data[0][0].y,
          type: data[0][0].type,
          line: {color: data[0][0].line.color},
        }
      ],
      {
        "xaxis": {
          "showline": true,
          "showgrid": false,
          "showticklabels": false,
          "zeroline": false
        },
        "yaxis": {
          "fixedrange": true,
          "showline": false,
          "showgrid": false,
          "showticklabels": false,
          "zeroline": false
        },
        "margin": {
          "b": 0,
          "l": 10,
          "r": 10,
          "t": 0
        },
        "height": 100,
        "hovermode": false
      },
      {
        displaylogo: false,
        displayModeBar: false,
        modeBarButtonsToRemove: ['autoscale', 'pan', 'toimage'],
        responsive: true,
      }
    );

    Plotly.newPlot(episodePlotRef2.current,
      [
        {
          x: data[0][0].x,
          y: data[0][0].y,
          type: data[0][0].type,
          line: {color: data[0][0].line.color},
        }
      ],
      {
        "xaxis": {
          "showline": true,
          "showgrid": false,
          "showticklabels": false,
          "zeroline": false
        },
        "yaxis": {
          "fixedrange": true,
          "showline": false,
          "showgrid": false,
          "showticklabels": false,
          "zeroline": false
        },
        "margin": {
          "b": 0,
          "l": 10,
          "r": 10,
          "t": 0
        },
        "height": 100,
        "hovermode": false
      },
      {
        displaylogo: false,
        displayModeBar: false,
        modeBarButtonsToRemove: ['autoscale', 'pan', 'toimage'],
        responsive: true,
      }
    );
  }, []);

  const previous = () => {
    if (current > 1) {
      Plotly.restyle(episodePlotRef.current, { x: [data[current - 2][0]['x']], y: [data[current - 2][0]['y']] });
      setCurrent(current - 1);
    }
  };
  const next = () => {
    if (current < total) {
      Plotly.restyle(episodePlotRef.current, { x: [data[current][0]['x']], y: [data[current][0]['y']] });
      setCurrent(current + 1);
    }
  };
  const previous2 = () => {
    if (current2 > 1) {
      Plotly.restyle(episodePlotRef2.current, { x: [data[current2 - 2][0]['x']], y: [data[current2 - 2][0]['y']] });
      setCurrent2(current2 - 1);
    }
  };
  const next2 = () => {
    if (current2 < total) {
      Plotly.restyle(episodePlotRef2.current, { x: [data[current2][0]['x']], y: [data[current2][0]['y']] });
      setCurrent2(current2 + 1);
    }
  };
  const closeDrawer = () => {
    dispatch(setSelectedChartData({...selectedChartData, checked: "", show: false}));
    dispatch(setEpisodeChartDataChecked({key: chartId, checked: false}));

    setTimeout(() => {
      Plotly.Plots.resize("heartRateChart");
      Plotly.Plots.resize("ecgChart");
    }, 150);
  };

  return (
    <div className={'h-full w-full tracking-tight z-[999] border-[1px] border-[#4A5060]'}>
      <div className='flex text-white items-center justify-between bg-mainPrimary h-[30px] px-2'>
        <div className='flex items-center text-base'>{chartTitle}</div>
        <div className={'flex items-center cursor-pointer'}
          onClick={() => closeDrawer()}
        >
          <CgClose className={'text-xl'} />
        </div>
      </div>

      <div className='flex-1 bg-white p-1 h-[calc(100vh-32px)] text-sm text-black'>
        <div className='flex-1 bg-main h-full p-1'>
          <div className='flex bg-white p-2'>
          {
            Object.keys(episodeData).map((key, idx) => {
              return (
                <div className="flex-1 items-center justify-center px-1" key={idx}>
                  <div className="capitalize-first-letter">{key}</div>
                  <div className="font-bold">{episodeData[key]}</div>
                </div>
              )
            })
          }
          </div>

          <div className='flex flex-row bg-white mt-2 p-1 border-t-[1px] border-b-[1px] border-[#4A5060] text-xs text-black'>
            <div className='flex-2'>Duration 1 d 8 h Avg HR 150 bpm</div>
            <div className='flex-1 items-center justify-center'>
              <div className='flex items-center justify-center'>
                <button
                  type="button"
                  onClick={() => previous()}
                  className="relative inline-flex items-center justify-center font-sm text-drawerText hover:opacity-70 focus:outline-none mr-2"
                >
                  <KeyboardArrowLeft fontSize="small"/>
                </button>
                <div className='flex mx-1 font-bold'>{ current }/{ total }</div>
                <button
                  type="button"
                  onClick={() => next()}
                  className="relative inline-flex items-center justify-center font-sm text-drawerText hover:opacity-70 focus:outline-none ml-2"
                >
                  <KeyboardArrowRight fontSize="small"/>
                </button>
              </div>
            </div>

            <div className="flex-1 items-center justify-end">
              <div className="flex items-center justify-end font-bold">
                03/25/20 11:43:19
                <BsPencil className={"ml-3"} />
              </div>
            </div>
          </div>

          <div
            id="episodeChart"
            ref={episodePlotRef}
            className="flex h-[100px]"
          />

          <div className='flex flex-row bg-white mt-2 p-1 border-t-[1px] border-b-[1px] border-[#4A5060] text-xs text-black'>
            <div className='flex-2'>Duration 29h Avg HR 157 bpm</div>
            <div className='flex-1 items-center justify-center'>
              <div className='flex items-center justify-center'>
                <button
                  type="button"
                  onClick={() => previous2()}
                  className="relative inline-flex items-center justify-center font-sm text-drawerText hover:opacity-70 focus:outline-none mr-2"
                >
                  <KeyboardArrowLeft fontSize="small"/>
                </button>
                <div className='flex mx-1 font-bold'>{ current2 }/{ total }</div>
                <button
                  type="button"
                  onClick={() => next2()}
                  className="relative inline-flex items-center justify-center font-sm text-drawerText hover:opacity-70 focus:outline-none ml-2"
                >
                  <KeyboardArrowRight fontSize="small"/>
                </button>
              </div>
            </div>

            <div className="flex-1 items-center justify-end">
              <div className="flex items-center justify-end font-bold">
                03/24/20 10:43:19
                <BsPencil className={"ml-3"} />
              </div>
            </div>
          </div>

          <div
            id="episodeChart"
            ref={episodePlotRef2}
            className="flex h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}