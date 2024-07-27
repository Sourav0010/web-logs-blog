import React,{useEffect} from 'react'
import {PostCard,Button, Loading} from './index'
import appwriteDatabase from '../appwrite/appwriteDatabase.js'
import { Link } from 'react-router-dom'
function Articles() {
  let [posts, setPosts] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  useEffect(()=>{
    setLoading(true);
    appwriteDatabase.getPosts().then((data)=>{
      setLoading(false);
      setPosts(data.documents)
    })
  },[])  
  return (
    <>

      <div className='flex flex-row items-center justify-end px-10'>
        <Link to='/test'>
           <Button className='hidden max-sm:block  max-sm:text-xs border border-black  text-black px-4 py-2 ' >
            <i class="fa-solid fa-plus"></i> Create
            </Button>
        </Link>
      </div>

      <div className=' flex items-center gap-2 my-20 flex-wrap justify-center flex-row'>
        {loading ? (
            
          <Loading/>
          
          ) :posts.length ==0 ? (<div className='min-h-svh'>
        <h1 className='text-4xl text-center mt-20'>No Posts</h1>
        </div>) :posts.map((post) => {
        return (
              <PostCard key={post.url} 
                title={post.title}
                summery={post.summery}
                author={post.author}
                image={appwriteDatabase.getFilePreview(post.featureImage)}
                created={post.$createdAt.slice(0,10).split('-').reverse().join('/')}
                url={post.url}
                />
        )
        })}
      </div>
     
    </>
    
  )
}

export default Articles