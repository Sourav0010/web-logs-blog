import React from 'react'
import {Button} from "../index"
function Footer() {
  return (
    <div className=' px-10 mt-auto py-10 flex flex-row items-center justify-between min-w-screen h-full bg-black text-white'> 
        <div className='w-full'>
          <h1 className='font-bold text-2xl text-white'>Web Logs</h1>
          <p className='font-regular text-xs'>Build web and have fun</p>
          <p className='mt-20 text-xs font-regular' >@Copyright 2024 | weblogs</p>
        </div>
        
    </div>
  )
}

export default Footer