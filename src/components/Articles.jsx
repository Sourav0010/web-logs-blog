import React,{useEffect} from 'react'
import {PostCard,Button, Loading} from './index'
import appwriteDatabase from '../appwrite/appwriteDatabase.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Articles() {
  let [posts, setPosts] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  let [page, setPage] = React.useState(0);
  const user = useSelector(state => state.userAuth.userData.userData)

  useEffect(()=>{
    setLoading(true);
    appwriteDatabase.getPosts(page,10).then((data)=>{
      setLoading(false);
      setPosts(data.documents)
    })
  },[page])
  
  
  return (
    <>
     {user?.labels[0] === 'admin' &&  <div className='flex flex-row items-center justify-end px-10'>
        <Link to='/test'>
           <Button className='hidden max-sm:block  max-sm:text-xs border border-black  text-black px-4 py-2 ' >
            <i class="fa-solid fa-plus"></i> Create
            </Button>
        </Link>
      </div>}

      <div className=' flex items-center gap-4 my-20 flex-wrap justify-center flex-row'>
        {loading ? (
            
          <Loading/>
          
          ) :posts.length ==0 ? (<div className=''>
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
                likedBy={post.likedBy}
                />
        )
        })}
      </div>

      <div className={`flex justify-center items-center gap-2 my-4`} >
        <Button onClick={()=>{setPage( page => page-1)}} disabled={page==0} 
        className={` text-white bg-black rounded-md max-sm:text-xs max-sm:px-3 max-sm:py-2 px-4 py-2  ${page==0 && 'bg-gray-700'}`} >
          Prev Post
        </Button>
        {` Page ${page+1} `}
        <Button onClick={()=>{setPage(page => page+1)}} disabled={!posts.length} 
        className={` text-white bg-black rounded-md max-sm:text-xs max-sm:px-3 max-sm:py-2 px-4 py-2 ${!posts.length && 'bg-gray-700'}`} >
          Next Post
        </Button>
      </div>
    </>
    
  )
}

export default Articles