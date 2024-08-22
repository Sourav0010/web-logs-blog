import React,{useEffect, useState} from 'react'
import Button from "../components/Button"
import { useForm } from 'react-hook-form'
import appwritedatabase from '../appwrite/appwriteDatabase';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import Loading from './Loading';

function CommentForm({postId}) {
    const {handleSubmit,register} = useForm();
    let [comment, setComment] = useState([]);
    let [user, setUser] = useState('');
    let data = useSelector(state => state.userAuth.userData.userData);
    let [loading, setLoading] = useState(false);
  

    const doSubmit = async (data)=>{
        setLoading(true);
        let current = {
            comment: data.comment,
            createdAt: new Date().toLocaleString(),
            user:user
        }
       await appwritedatabase.addComment(postId,[...comment,JSON.stringify(current)]);
       setComment([...comment,JSON.stringify(current)]);
         setLoading(false);
    }

    useEffect(()=>{
        appwritedatabase.getComment(postId).then((data)=>{
            setComment(data.comment)
        });
        setUser(data);
        
    },[comment.length])

  return (
    <>

     <div className='mt-10'>
        <h2 className='font-bold text-xl py-4'>Comments</h2>
        <form onSubmit={handleSubmit(doSubmit)}>
            <div className='flex flex-row max-w-[40rem]'>
               <input 
               type="text" 
               className='w-full px-4 outline-none border border-black' 
               {...register('comment',{
                required:true
               })}/>
               <Button type="submit" disabled={loading} className="bg-black text-white py-2 px-4">
                {loading ? <Loading/> : <i className="fa-solid fa-location-arrow"></i>}
               </Button>
            </div>
        </form>
    </div>
    
      {comment.length > 0 ? comment.map((comment, index)=>(
                <Comment key={index} comment={comment}/>
            )) : 
            <div className='text-gray-800 mt-5'>
                No Comments
            </div>
            }
    </>
   
  )
}

export default CommentForm