import React from 'react'

function Input({className,type,label,value,onChange,placeholder,labelClassName,divClassName}) {
  return (
    <>
    <div className={ divClassName ||'flex flex-col w-full'}> 
        <label className={labelClassName ?labelClassName:' text-left text-gray-400'}>{label}</label>
        <input className={className} type={type} onChange={onChange} value={value} placeholder={placeholder}/>
    </div>    
    </>
  )
}

export default Input