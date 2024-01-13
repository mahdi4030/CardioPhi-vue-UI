
const CustomSelect = ({label, options, onChange, style}) => {
  return (
    <div className='flex flex-row items-center justify-start mb-[0.5rem] mr-[1rem]'>
      <div className='flex w-[50px] items-end justify-end'>
        {label}: 
      </div>
      <div className='w-full flex-1 ml-[8px]'>
        <select onChange={onChange} className="custom-select" style={style}>
          {
            options.map((value, idx) => {
              return (
                <option key={idx} value={value}>{value}</option>
              )
            })
          }
        </select>
      </div>
    </div>
  )
}

export default CustomSelect