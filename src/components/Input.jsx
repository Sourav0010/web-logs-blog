import React from 'react'

function Input({
    type,
    lebel,
    onChange,
    placeholder,
    className = '',
    ...props
},ref) {
  return (
    <div className='w-full flex items-center justify-center  '>
        {lebel && <label className='w-36  max-sm:text-xs'>{lebel}</label>}
        <input type={type} placeholder={placeholder} ref={ref} {...props} className={`${className}`} onChange={onChange} />
    </div>
  )
}

export default React.forwardRef(Input);