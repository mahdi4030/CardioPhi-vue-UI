import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ZoomSlider = ({value, onChange, min, max}) => {
  return (
    <div className='w-full flex flex-row items-center justify-center'>
      <div className='flex-none mr-[-2px]'>
        <AiOutlineMinusCircle size={24} color='#AAAAAA'/>
      </div>
      <div className='w-full flex-1 slider zoom-slider'>
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={(value) => {onChange(value)}}
          tooltip={false}
          style={{height:"100%"}}
        />
      </div>
      <div className='flex-none ml-[-2px]'>
        <AiOutlinePlusCircle size={24} color='#AAAAAA'/>
      </div>
    </div>
  )
}

export default ZoomSlider