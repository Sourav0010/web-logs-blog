import React from 'react'
import {Button} from "../index"
import appwriteAuth from '../../appwrite/appwriteAuth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { Link } from 'react-router-dom'


function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

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
        <Link to={'/articles'}>
            <Button className='text-black bg-white px-4 py-2 border border-black '>
            Visit Posts
            </Button>
        </Link>
        
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
        <Button onClick={logoutHandler} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</Button>
    </div>
  )
}

export default Profile