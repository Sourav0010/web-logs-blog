import React,{useEffect, useState} from 'react'
import { useActionData, useLoaderData, useParams } from 'react-router-dom'
import appwritedatabase from '../appwrite/appwriteDatabase';
import parse from 'html-react-parser'
function PostFullView() {
    const data = useParams();
    let [post, setPost] = useState('')
    useEffect(()=>{
        appwritedatabase.getPost(data.id).then((data)=>{
            setPost(data)
        })
    },[])
  return post ? (
    <>
        <div className='px-20 mt-20 mb-20'>
                <img class="w-full h-[30rem] object-cover" src={appwritedatabase.getFilePreview(post?.featureImage)} alt="image description"/>
            <h2 className='my-5 font-bold text-3xl'>{post?.title}</h2>
            <p className='text-sm my-2'>
                <i className="fa-solid fa-user"></i> {'  '}
                {post?.author} {'  '} {post?.$createdAt.slice(0,10).split('-').reverse().join('-')}
            </p>
            <div className='text-gray-800 mt-10'>
                {parse(post?.content || '')}
            </div>
        </div>
    </>
  ): null;
}

export default PostFullView