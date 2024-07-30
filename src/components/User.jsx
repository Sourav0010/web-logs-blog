import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Input, Button} from './index'
import { useForm } from 'react-hook-form';
import appwriteAuth from '../appwrite/appwriteAuth';
function User() {
  
  const userData = useSelector(state => state.userAuth.userData.userData);
  const {register, handleSubmit,setValue,getValues} = useForm({
    defaultValues: {
      name: userData?.name,
      email: userData?.email,
      phone: userData?.phone
    }
  });

  const update = (data) =>{
    if(data.name !== userData.name){
      appwriteAuth.updateName({name:data.name});
    }
    if(data.email !== userData.email){
      appwriteAuth.updateEmail({email:data.email,password:getValues('password')});
    }
    if(data.phone !== userData.phone){
      appwriteAuth.updatePhone({phone:data.phone,password:getValues('password')});
    }
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-5 my-4'>
      <img className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://avatar.iran.liara.run/public/boy" alt="Bordered avatar"/>
      <h2>Welcome {userData?.name}</h2>
      <form className='flex gap-4 flex-col' onSubmit={handleSubmit(update)}>
      <Input 
      type='text' 
      lebel='Name' 
      className="bg-white border p-2" 
      placeholder='Name' 
      {...register('name',{
        
      })}/>
      <Input type='text' lebel='Email' className="bg-white border p-2  max-sm:p-1 font-normal" placeholder='Name' {...register('email')}/>
      <Input type='text' lebel='Phone' className="bg-white border p-2 font-normal" {...register('phone')} placeholder='Phone No.' />
      <Input type='password' lebel='Password' className="bg-white border p-2 font-normal" {...register('password')}  placeholder='Password' />
      <Button type='submit' className='bg-black hover:cursor-pointer text-white p-2 font-normal rounded-md' >Update</Button>
      </form>
    </div>
  )
}

export default User