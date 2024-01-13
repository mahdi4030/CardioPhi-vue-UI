import React from 'react';
import { useDispatch } from 'react-redux';
import { updateShowTcNotification } from 'store/ecgSlice';
import CustomSelect from 'components/atoms/CustomSelect';
import CustomInput from 'components/atoms/CustomInput';
import CustomDatePicker from 'components/atoms/CustomDatePicker';

import { FaRegBell } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

/**
 * Time Stats Component
 * @returns
 */
const TcNotification = () => {

  const dispatch = useDispatch();

  const alertActions = {

    afib: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      prob: {
        operator: ['>', '<', '='],
        value: '50',
      },
      rolling: ['Hourly', '6 hour', 'Daily'],
    },
    vt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      prob: {
        operator: ['>', '<', '='],
        value: '50',
      },
      rolling: ['Hourly', '6 hour', 'Daily'],
    },
    svt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      prob: {
        operator: ['>', '<', '='],
        value: '50',
      },
      rolling: ['Hourly', '6 hour', 'Daily'],
    },
  };

  return (
    <div className={'h-[calc(100vh-40px)] absolute bottom-0 right-2 tracking-tight w-[500px] z-[999] border-[1px] border-[#4A5060]'}>
      <div className='flex text-white items-center justify-between bg-mainPrimary h-[30px] px-2'>
        <div className='flex items-center text-xl'>Alert Editor <FaRegBell className={'ml-2 text-xl'}/></div>
        <div className={'flex items-center cursor-pointer'} onClick={() => {dispatch(updateShowTcNotification())}}>
          <CgClose className={'text-2xl'} />
        </div>
      </div>
      <div className='flex-1 bg-white p-1 h-[calc(100vh-70px)] text-sm text-black'>
        <div className='flex-1 bg-main h-full'>
          <div className='py-2 px-3'>
            <div className='flex flex-row items-center mb-[0.5rem]'>
              <input type='checkbox' className='custom-checkbox-alert mr-2'/>
              <div>AFIB/Flutter</div>
            </div>
            <div className='w-full grid grid-cols-2'>
              <CustomSelect label="Action" options={alertActions.afib.action}/>
              <CustomDatePicker label="Expiration" value={alertActions.afib.expiration}/>
              <CustomSelect label="Prob" options={alertActions.afib.prob.operator}/>
              <CustomInput label="Value" backLabel="%" value={alertActions.afib.prob.value} style={{maxWidth: "30px"}}/>
              <CustomSelect label="Rolling" options={alertActions.afib.rolling}/>
            </div>
          </div>
          <div className='flex border-b-[2px] border-[rgba(0,0,0,0.87)]' />

          <div className='py-2 px-3'>
            <div className='flex flex-row items-center mb-[0.5rem]'>
              <input type='checkbox' className='custom-checkbox-alert mr-2'/>
              <div>Ventricular tachycardia (VT)</div>
            </div>
            <div className='w-full grid grid-cols-2'>
              <CustomSelect label="Action" options={alertActions.vt.action}/>
              <CustomDatePicker label="Expiration" value={alertActions.vt.expiration}/>
              <CustomSelect label="Prob" options={alertActions.vt.prob.operator}/>
              <CustomInput label="Value" backLabel="%" value={alertActions.vt.prob.value} style={{maxWidth: "30px"}}/>
              <CustomSelect label="Rolling" options={alertActions.vt.rolling}/>
            </div>
          </div>
          <div className='flex border-b-[2px] border-[rgba(0,0,0,0.87)]' />

          <div className='py-2 px-3'>
            <div className='flex flex-row items-center mb-[0.5rem]'>
              <input type='checkbox' className='custom-checkbox-alert mr-2'/>
              <div>Supraventricular tachycardia (SVT)</div>
            </div>
            <div className='w-full grid grid-cols-2'>
              <CustomSelect label="Action" options={alertActions.svt.action}/>
              <CustomDatePicker label="Expiration" value={alertActions.svt.expiration}/>
              <CustomSelect label="Prob" options={alertActions.svt.prob.operator}/>
              <CustomInput label="Value" backLabel="%" value={alertActions.svt.prob.value} style={{maxWidth: "30px"}}/>
              <CustomSelect label="Rolling" options={alertActions.svt.rolling}/>
            </div>
          </div>
          <div className='flex border-b-[2px] border-[rgba(0,0,0,0.87)]' />
        </div>
      </div>
    </div>
  );
};

export default TcNotification;
