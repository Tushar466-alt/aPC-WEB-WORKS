import React from 'react'

function Textarea({className,type,label,value,onChange,rows,labelClassName}) {
  return (
    <>
        <div className='flex flex-col'> 
        <label className={labelClassName ?labelClassName:' text-left text-gray-400'}>{label}</label>
        <textarea className={className} rows={rows} type={type} onChange={onChange} value={value}/>
    </div> 
    </>
  )
}

export default Textarea