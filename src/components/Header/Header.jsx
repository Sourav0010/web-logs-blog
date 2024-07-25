import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Profile, Registration} from '../index'
import appwriteAuth from '../../appwrite/appwriteAuth'
import { login , logout} from '../../store/authSlice'
import { useDispatch } from 'react-redux'

function Header() {

  let status = useSelector((state)=>state.userAuth.status);
  const dispatch = useDispatch();
  useEffect(()=>{
    appwriteAuth.getUserAccount()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
  },[])
  
 
  return (
    <header className='items-center justify-between z-50 flex w-full sticky top-0 bg-white h-full px-10 py-5'>
      <Link to='/' className='text-black'>
      <h1 className='font-bold text-xl'>Web Logs</h1>
      </Link>

      {status ? (<Profile/>) : (<Registration/>)}
      
    </header>
  )
}

export default Header