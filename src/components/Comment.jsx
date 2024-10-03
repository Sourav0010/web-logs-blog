import React,{useState} from 'react'

function Comment({comment}) {
  let [comments, setComments] = useState(JSON.parse(comment));
  return (
  <div className='flex gap-4 items-center '>
    
    <div className='mt-5 w-full border p-2 rounded-lg'>
      <div className='flex flex-row items-center gap-2'>
          <img src="https://avatar.iran.liara.run/public/boy" alt="" className='w-7 h-7 p-1 rounded-full ' />
          <p className='text-xs text-slate-600'>{comments.user.name}</p>
          <p className='text-xs text-slate-600'>{comments.createdAt.split(',').join('  ')}</p>
      </div>
        <h2 className=' px-10 py-2'>{comments.comment}</h2>
    </div>
  </div>
  )
}

export default Comment