import React,{useEffect, useState} from 'react'
import {PostCard} from './index'
import appwriteDatabase from '../appwrite/appwriteDatabase.js'
function Articles() {
  let [posts, setPosts] = React.useState([])
  useEffect(()=>{
    appwriteDatabase.getPosts().then((data)=>{
      setPosts(data.documents)
      console.log(appwriteDatabase.getFilePreview(data.documents[0].featureImage))
    })
  },[])  
  return (
    <div className='flex items-center gap-2 my-20 flex-wrap justify-center flex-row'>
    {posts.length ==0 ? (<div className='min-h-svh'>
    <h1 className='text-4xl text-center mt-20'>No Posts</h1>
    </div>) :posts.map((post) => {
    return (
          <PostCard key={post.url} 
            title={post.title}
            summery={post.summery}
            author={post.author}
            image={appwriteDatabase.getFilePreview(post.featureImage)}
            />
    )
    })}
  </div>
  )
}

export default Articles