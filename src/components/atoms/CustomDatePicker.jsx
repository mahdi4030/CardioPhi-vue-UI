import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const CustomDatePicker = ({label, value="", onChange, readonly}) => {

  const [date, setDate] = useState(new Date(value));

  const handleChange = (changedDate) => {
    setDate(changedDate);
  }

  return (
    <div className='flex flex-row items-center justify-start mb-[0.5rem]'>
      <div className='flex w-[50px] items-end justify-end'>
        {label}: 
      </div>
      <div className='ml-[8px]'>
        <DatePicker 
          selected={date}
          onChange={(date) => handleChange(date)}
          readOnly={readonly}
          className="w-[130px]"
        />
      </div>
    </div>
  )
}

export default CustomDatePicker