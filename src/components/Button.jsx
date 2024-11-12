import React from 'react';

function Button({ children, className = '', ...props }, ref) {
   return (
      <button className={`${className}`} ref={ref} {...props}>
         {children}
      </button>
   );
}

export default React.forwardRef(Button);
