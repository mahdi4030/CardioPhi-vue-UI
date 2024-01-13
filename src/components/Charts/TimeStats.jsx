import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Tab, Tabs} from 'react-bootstrap';
import clsx from "clsx";

import { FaRegBell } from 'react-icons/fa';
import { TbAdjustments } from 'react-icons/tb';

import TcNotification from './TcNotification';
import { updateShowTcNotification } from 'store/ecgSlice';

/**
 * Time Stats Component
 * @returns
 */
const TimeStats = () => {

  const dispatch = useDispatch();
  const [activeKey, setActiveKey] = useState('today');
  
  const { predictionWidget, showTcNotification } = useSelector((state) => state.ecg);

  const Spacer = (props) => {
    const { first, last } = {
      first: false,
      last: false,
      ...props,
    };

    return (
      <div
        className={clsx(
          "absolute w-[0px] left-[50%] border border-[#CECACA]",
          first || last ? "h-[50%]" : "h-full",
          first ? "top-[50%]" : "top-0"
        )}
      />
    );
  };

  return (
    <div className={clsx('w-full bg-mainPrimary px-2 py-1 timestats mt-1 h-[29vh] overflow-x-auto')}>
      <div className='relative'>
        <Tabs defaultActiveKey="today" transition={true} className="mb-1" onSelect={(key) => setActiveKey(key)}>
          <Tab eventKey="today" title="Today" tabClassName={clsx(activeKey === 'daily' || activeKey === 'hourly' ? "today-border" : "")}>
            <table className="text-white">
              <thead>
                <tr>
                  <th className="text-left w-[140px]"></th>
                  <th className="time-title time-title-first w-[300px]">Morning</th>
                  <th />
                  <th className="time-title w-[200px]">Afternoon</th>
                  <th />
                  <th className="time-title w-[200px]">Evening</th>
                  <th />
                  <th className="time-title w-[200px]">Overnight</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='time-first'>AFib/Flutter</td>
                  <td>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Burden:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">59s</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Max HR:</span>
                        <span className="time-third">154bpm</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">70%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">70%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">70%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>VT</td>
                  <td>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>SVT</td>
                  <td>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">10%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">10%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">10%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="hourly" title="Hourly">
            <table className="text-white w-full">
              <thead>
                <tr>
                  <th className="text-left w-[140px]"></th>
                  <th className="time-title time-title-first w-[270px]">10AM</th>
                  <th />
                  <th className="time-title">11AM</th>
                  <th />
                  <th className="time-title">12AM</th>
                  <th />
                  <th className="time-title">1PM</th>
                  <th />
                  <th className="time-title">2PM</th>
                  <th />
                  <th className="time-title">3PM</th>
                  <th />
                  <th className="time-title">4PM</th>
                  <th />
                  <th className="time-title">5PM</th>
                  <th />
                  <th className="time-title">6PM</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='time-first'>AFib/Flutter</td>
                  <td className='w-[270px]'>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Burden:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">59s</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Max HR:</span>
                        <span className="time-third">154bpm</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">27%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">28%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">39%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>VT</td>
                  <td className='w-[270px]'>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">36%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">48%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">20%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>SVT</td>
                  <td className='w-[270px]'>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">25%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="daily" title="Daily" tabClassName={clsx(activeKey === 'today' || activeKey === 'hourly' ? "daily-border" : "")}>
          <table className="text-white w-full">
              <thead>
                <tr>
                  <th className="text-left w-[140px]"></th>
                  <th className="time-title time-title-first w-[270px]">Mon</th>
                  <th />
                  <th className="time-title">Tues</th>
                  <th />
                  <th className="time-title">Weds</th>
                  <th />
                  <th className="time-title">Thurs</th>
                  <th />
                  <th className="time-title">Fri</th>
                  <th />
                  <th className="time-title">Sat</th>
                  <th />
                  <th className="time-title">Sun</th>
                  <th />
                  <th className="time-title">Mon</th>
                  <th />
                  <th className="time-title">Tues</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className='time-first'>AFib/Flutter</td>
                  <td className='w-[270px]'>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Burden:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">59s</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Max HR:</span>
                        <span className="time-third">154bpm</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">27%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">28%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">39%</span>
                  </td>
                  <td className="relative">
                    <Spacer first />
                  </td>
                  <td className="text-center">
                    <span className="text-base">37%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>VT</td>
                  <td className='w-[270px]'>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">36%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">48%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">34%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">20%</span>
                  </td>
                  <td className="relative">
                    <Spacer />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                </tr>

                <tr>
                  <td className='time-first'>SVT</td>
                  <td className='w-[270px]'>
                    <div className="mb-1">
                      <div className="flex items-center">
                        <span className="time-second">Episodes:</span>
                        <span className="time-third">59.62%</span>
                      </div>
                      <div className="flex items-center">
                        <span className="time-second">Longest Duration:</span>
                        <span className="time-third">57s</span>
                      </div>
                    </div>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">30%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">25%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">35%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">31%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">41%</span>
                  </td>
                  <td className="relative">
                    <Spacer last />
                  </td>
                  <td className="text-center">
                    <span className="text-base">33%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
        <div className={'absolute right-[0.25rem] top-[0.25rem] flex items-center cursor-pointer'}>
          <FaRegBell className={'text-xl font-bold text-white hover:text-black mr-1'} onClick={()=>dispatch(updateShowTcNotification())} />
          <TbAdjustments className={'text-xl text-white hover:text-[rgba(0,0,0,0)]'} onClick={()=>dispatch(updateShowTcNotification())}/>
        </div>
      </div>
      
      {showTcNotification && <TcNotification />}
    </div>
  );
};

export default TimeStats;
