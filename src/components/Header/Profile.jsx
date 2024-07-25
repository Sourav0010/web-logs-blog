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
        <Link to='/test'>
           <Button className=' border border-black  text-black px-4 py-2 ' >
            Create Post
            </Button>
        </Link>
       
    
        <Button onClick={logoutHandler} type="button" className="bg-red-600 text-white px-4 py-2 border border-red-600 ">Logout</Button>
    </div>
  )
}

export default Profile