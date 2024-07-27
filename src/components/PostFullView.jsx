import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import appwritedatabase from '../appwrite/appwriteDatabase';
import Loading from './Loading';
import PostBody from './PostBody';

function PostFullView() {
    const data = useParams();
    let [post, setPost] = useState('');
    let [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        appwritedatabase.getPost(data.id).then((data)=>{
            setLoading(false);
            setPost(data)
        })
    },[])
  return loading ? (
        <div className='flex items-center justify-center px-20 mt-20 mb-20'>
            <Loading/>
        </div>

    ) : post ? (
    <>
        <div className='px-20 mt-20 mb-20'>
                <img class="w-full h-[30rem] object-cover" src={appwritedatabase.getFilePreview(post?.featureImage)} alt="image description"/>
            <h2 className='my-5 font-bold text-3xl'>{post?.title}</h2>
            <p className='my-2'>
                <i className="fa-solid fa-user"></i> {'  '}
                {post?.author} {'  '} {post?.$createdAt.slice(0,10).split('-').reverse().join('-')}
            </p>
            <div className='text-gray-800 mt-10'>
                <PostBody post={post?.content}/>
            </div>
        </div>
    </>
  ): (
    <div className='px-20 mt-20 mb-20 flex items-center justify-center text-xl font-bold text-gray-600'>
        404 Post not found
    </div>
  );
}

export default PostFullView