import React from 'react'

function Input(
    { type, lebel, onChange, placeholder, className = '', ...props },
    ref
) {
    return (
        <div className="w-full flex items-center justify-center  ">
            {lebel && <label className="w-36  max-sm:text-xs">{lebel}</label>}
            <input
                type={type}
                className={`${className}`}
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
                {...props}
            />
        </div>
    )
}

export default React.forwardRef(Input)
