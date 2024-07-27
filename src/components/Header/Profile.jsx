import React from 'react'
import appwriteAuth from '../../appwrite/appwriteAuth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { Link } from 'react-router-dom'


function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(state => state.userAuth.userData.userData)

    const logoutHandler = async () =>{
        try{
            await appwriteAuth.logout();
            dispatch(logout());
            navigate('/')
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='flex items-center flex-row gap-4'>
        {/* <Link to={'/articles'}>
            <Button className='max-sm:hidden  text-black bg-white px-4 py-2 border border-black '>
            Visit Posts
            </Button>
        </Link>
        <Link to='/create'>
           <Button className='max-sm:hidden  border border-black  text-black px-4 py-2 ' >
            Create Post
            </Button>
        </Link>
       
        <ProfileInfo/>
        <Button onClick={logoutHandler} type="button" className="bg-red-600 text-white px-4 py-2 border border-red-600 max-sm:text-xs ">Logout</Button> */}


        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" onClick={()=>{
                document.getElementById('user-dropdown').classList.toggle('hidden')
            }} class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
            </button>
            
            <div class="z-50 hidden absolute top-12 right-5 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">{user?.name}</span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
               
                <li>
                    <Link to='/create' class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Create Post</Link>
                </li>
                <li>
                    <Link to='/articles' class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">All Articles</Link>
                </li>
                <li>
                    <Link onClick={logoutHandler} type='button'  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</Link>
                </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile