import React from 'react';
import { useDispatch } from 'react-redux';
import { updateShowHrNotification } from 'store/episodeDataSlice';
import CustomSelect from 'components/atoms/CustomSelect';
import CustomInput from 'components/atoms/CustomInput';
import CustomDatePicker from 'components/atoms/CustomDatePicker';

import { FaRegBell } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

/**
 * Time Stats Component
 * @returns
 */
const HrNotification = () => {

  const dispatch = useDispatch();

  const alertActions = {
    pvc: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      burden: {
        operator: ['>', '<', '='],
        value: '20',
      },
    },
    svt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      hr: {
        operator: ['>', '<', '='],
        value: '150',
      },
    },
    vt: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      hr: {
        operator: ['>', '<', '='],
        value: '150',
      },
      duration: {
        operator: ['>', '<', '='],
        value: '30',
      },
    },
    pause: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      duration: {
        operator: ['>', '<', '='],
        value: '5',
      },
    },
    afib: {
      checked: false,
      action: ['Sound', 'SMS', 'Notification'],
      expiration: '07/08/2021',
      hr: {
        operator: ['>', '<', '='],
        value: '150',
      },
    },
  };

  return (
    <div className={'h-[calc(100vh-40px)] absolute bottom-0 right-2 tracking-tight w-[500px] z-[999] border-[1px] border-[#4A5060]'}>
      <div className='flex text-white items-center justify-between bg-mainPrimary h-[30px] px-2'>
        <div className='flex items-center text-lg'>Alert Editor <FaRegBell className={'ml-2 text-lg'}/></div>
        <div className={'flex items-center cursor-pointer'} onClick={() => {dispatch(updateShowHrNotification())}}>
          <CgClose className={'text-2xl'} />
        </div>
      </div>
      <div className='flex-1 bg-white p-1 h-[calc(100vh-70px)] text-sm text-black'>
        <div className='flex-1 bg-main h-full'>
          <div className='py-2 px-3'>
            <div className='flex flex-row items-center mb-[0.5rem]'>
              <input type='checkbox' className='custom-checkbox-alert mr-2'/>
              <div>Premature ventricular contractions (PVC)</div>
            </div>
            <div className='w-full grid grid-cols-2'>
              <CustomSelect label="Action" options={alertActions.pvc.action}/>
              <CustomDatePicker label="Expiration" value={alertActions.pvc.expiration}/>
              <CustomSelect label="Burden" options={alertActions.pvc.burden.operator}/>
              <CustomInput label="Value" backLabel="%" value={alertActions.pvc.burden.value} style={{maxWidth: "30px"}}/>
            </div>
          </div>
          <div className='flex border-b-[2px] border-[rgba(0,0,0,0.87)]' />

          <div className='py-2 px-3'>
            <div className='flex flex-row items-center mb-[0.5rem]'>
              <input type='checkbox' className='custom-checkbox-alert mr-2'/>
              <div>Supraventricular tachycardia (SVT)</div>
            </div>
            <div className='w-full grid grid-cols-2'>
              <CustomSelect label="Action" options={alertActions.svt.action} />
              <CustomDatePicker label="Expiration" value={alertActions.svt.expiration}/>
              <CustomSelect label="HR" options={alertActions.svt.hr.operator}/>
              <CustomInput label="Value" backLabel="bpm" value={alertActions.svt.hr.value} style={{maxWidth: "30px"}}/>
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
              <CustomSelect label="HR" options={alertActions.vt.hr.operator}/>
              <CustomInput label="Value" backLabel="bpm" value={alertActions.vt.hr.value} style={{maxWidth: "30px"}}/>
              <div className='mb-[0.5rem] ml-[58px]'>AND/OR</div>
              <div></div>
              <CustomSelect label="Duration" options={alertActions.vt.hr.operator}/>
              <CustomInput label="Value" backLabel="bpm" value={alertActions.vt.hr.value} style={{maxWidth: "30px"}}/>
            </div>
          </div>
          <div className='flex border-b-[2px] border-[rgba(0,0,0,0.87)]' />

          <div className='py-2 px-3'>
            <div className='flex flex-row items-center mb-[0.5rem]'>
              <input type='checkbox' className='custom-checkbox-alert mr-2'/>
              <div>Pause</div>
            </div>
            <div className='w-full grid grid-cols-2'>
              <CustomSelect label="Action" options={alertActions.pause.action}/>
              <CustomDatePicker label="Expiration" value={alertActions.pause.expiration}/>
              <CustomSelect label="HR" options={alertActions.pause.duration.operator}/>
              <CustomInput label="Value" backLabel="sec" value={alertActions.pause.duration.value} style={{maxWidth: "30px"}}/>
            </div>
          </div>
          <div className='flex border-b-[2px] border-[rgba(0,0,0,0.87)]' />

          <div className='py-2 px-3'>
            <div className='flex flex-row items-center mb-[0.5rem]'>
              <input type='checkbox' className='custom-checkbox-alert mr-2'/>
              <div>AFIB/Flutter</div>
            </div>
            <div className='w-full grid grid-cols-2'>
              <CustomSelect label="Action" options={alertActions.afib.action}/>
              <CustomDatePicker label="Expiration" value={alertActions.afib.expiration}/>
              <CustomSelect label="HR" options={alertActions.afib.hr.operator}/>
              <CustomInput label="Value" backLabel="bpm" value={alertActions.afib.hr.value} style={{maxWidth: "30px"}}/>
            </div>
          </div>
          <div className='flex border-b-[2px] border-[rgba(0,0,0,0.87)]' />
        </div>
      </div>
    </div>
  );
};

export default HrNotification;
