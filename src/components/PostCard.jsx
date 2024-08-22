import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button } from './index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import appwritedatabase from '../appwrite/appwriteDatabase'
function Post({
    image='',
    title='',
    author='',
    summery='',
    url='',
    created='',
    likedBy=[],
    comments=[]
}) {

    const user = useSelector(state => state.userAuth.userData.userData)
    const [liked , setLiked] = useState(false);
    const [count , setCount] = useState(likedBy.length);

    useEffect(()=>{
        if(likedBy.includes(user?.$id)){
            setLiked(true)
        }else{
            setLiked(false)
        }
    },[])

    const handleLike = useCallback(async () => {
         if(!liked){
                appwritedatabase.updateLike(url,[...likedBy,user.$id])
                setLiked(l => !l);
               setCount(count => count+1);
            } else{
                appwritedatabase.updateLike(url,likedBy.filter(id => id !== user.$id))
                setLiked(l => !l);
               setCount(count => count-1);
            }
    },[liked])
  return (
    
<div className="relative max-w-[15rem] bg-white border border-gray-200 rounded-lg shadow ">
    <div className='mx-w-[12rem] max-h-24 overflow-hidden'>
    <img className="rounded-t-lg" src={image} alt="" />
    </div>
    <div className="p-5 pb-0">
        <div>
            <h5 className=" text-xl font-bold tracking-tight text-gray-900 ">{title}</h5>
        <p className="mb-3 font-normal text-sm text-gray-700 ">{summery}</p>
        </div>
        <div>
            <p></p>
        </div>
        
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
    <div className='absolute translate-y-3 translate-x-3  bottom-0'>
        <div className='flex items-center gap-2 justify-between'>
            <div className='flex items-center gap-2'>
                <Button className='bg-white text-black border border-gray-200 px-2 py-1 rounded-full text-xs' onClick={handleLike}>
                <i className={liked ?  `fa-solid fa-heart` : `fa-regular fa-heart`}></i>
                    {"  "}
                    {count}
                </Button>
            </div>
            <div className='flex items-center gap-2'>
                <Button className='bg-white text-black border border-gray-200 px-2 py-1 rounded-full text-xs'>
                <i className="fa-solid fa-comment"></i>
                    {"  "}
                    {comments.length}
                </Button>
            </div>
            
        </div>
    </div>
</div>

  )
}

export default Post