
const CustomInput = ({label, backLabel="", value="", onChange, readonly, style}) => {
  return (
    <div className='flex flex-row items-center justify-start mb-[0.5rem]'>
      <div className='flex w-[50px] items-end justify-end'>
        {label}: 
      </div>
      <div className='ml-[8px]'>
        <input onChange={onChange} defaultValue={value} className="custom-input" readOnly={readonly} style={style}/>
      </div>
      <div className='flex-none ml-1'>
        {backLabel} 
      </div>
    </div>
  )
}

export default CustomInput