import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Profile, Registration} from '../index'
import appwriteAuth from '../../appwrite/appwriteAuth'
import { login } from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function Header() {

  const status = useSelector(state => state.userAuth.status)
  const dispatch = useDispatch();
  useEffect(()=>{
    appwriteAuth.getUserAccount().then(data=>{
      if(data)dispatch(login(data));
    })
  },[])
  
 
  return (
    <header className='items-center justify-between flex w-full sticky top-0 bg-white h-full px-10 py-5'>
      <Link to='/' className='text-black'>
      <h1 className='font-bold text-xl'>Web Logs</h1>
      </Link>

      {status ? (<Profile/>) : (<Registration/>)}
      
    </header>
  )
}

export default Header