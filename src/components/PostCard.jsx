import React from 'react'
import { Button } from './index'
import { Link } from 'react-router-dom'
function Post({
    image='',
    title='',
    author='',
    summery='',
    url='',
    created=''
}) {
  return (
    
<div className="max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow ">
    <div className='mx-w-[12rem] max-h-24 overflow-hidden'>
    <img className="rounded-t-lg" src={image} alt="" />
    </div>
    <div className="p-5 pb-0">
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>
        <p className="mb-3 font-normal text-sm text-gray-700 ">{summery}</p>

    </div>
     <div className='w-full flex items-center justify-center mb-5'>
            <Link to={`/${url}`}>
            <Button className="bg-black text-xs text-white px-4 py-2">
              Read More <i className="fa-solid fa-arrow-right"></i>
            </Button>
            </Link>
    </div>
    <div className='p-5 flex items-center justify-between flex-row text-xs'>
        <h3 className='text-xs font-regular mb-0'><i className="fa-solid fa-user"></i> {author}</h3>
        <p>{created}</p>
    </div>
</div>

  )
}

export default Post