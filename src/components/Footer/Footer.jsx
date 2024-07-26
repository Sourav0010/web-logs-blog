import React from 'react'
import {Button} from "../index"
function Footer() {
  return (
    <div className=' px-10 mt-auto py-10 flex flex-row items-center justify-between min-w-screen h-full bg-black text-white'> 
        <div className='w-full'>
          <h1 className='font-bold text-2xl '>Web Logs</h1>
          <p className='font-regular text-xs'>Build web and have fun</p>
          <p className='mt-20 text-xs font-regular' >@Copyright 2024 | weblogs</p>
        </div>
        <div className='w-[24rem] max-sm:hidden'>
          <p className='inline-block text-xs px-4 py-2 font-regular'>Subscribe to our newsletter</p>
          <div className='flex p-2 w-full bg-white rounded-full overflow-hidden'>
            <input type="email" name="email" autoComplete='true' placeholder='Enter Your Email Here' id="email" className='w-full text-black mx-2 outline-none' />
            <Button className='bg-black  p-2 rounded-full text-white'>
              Subscribe
            </Button>
          </div>
        </div>
    </div>
  )
}

export default Footer