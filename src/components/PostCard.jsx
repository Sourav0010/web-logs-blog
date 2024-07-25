import React from 'react'
import { Button } from './index'
function Post({
    image='',
    title='',
    author='',
    summery='',
   
}) {
  return (
    

<div className="max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='mx-w-[12rem] max-h-24 overflow-hidden'>
    <img className="rounded-t-lg" src={image} alt="" />
    </div>
    <div className="p-5 pb-0">
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{summery}</p>

    </div>
     <div className='w-full flex items-center justify-center mb-5'>
            <Button className="bg-black text-white px-4 py-2">
              Read More
            </Button>
    </div>
    <div className='p-5 flex items-center justify-between flex-row text-xs'>
        <h3 className='text-xs'><i className="fa-solid fa-user"></i> {author}</h3>
        <p>Date:12/1/2024</p>
    </div>
</div>

  )
}

export default Post