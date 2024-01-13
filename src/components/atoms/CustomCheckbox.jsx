
const CustomInput = ({checked, onChange, style}) => {
  return (
    <input type="checkbox" className="custom-checkbox" checked={checked} onChange={onChange} style={style}/>
  )
}

export default CustomInput