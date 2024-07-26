import React from 'react'
import { useDispatch } from 'react-redux'
import appwriteAuth from "../appwrite/appwriteAuth"
import { login } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Input,Button} from "../components/index"

function LoginForm() {
    let [error,setError] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {register,handleSubmit} = useForm();

    const onSubmit = async (data)=>{
        setError("");
        try {
            let response = await appwriteAuth.login(data);
            if(response){
                let session = await appwriteAuth.getUserAccount();
                dispatch(login(session));
                navigate('/articles');
            }else{
                setError("Invalid Email or Password");
            }
        } catch (error) {
           setError(error.message);
        }
    }

  return (
    <div className='w-full px-80 mt-20 max-md:px-5  mb-20'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full flex items-center justify-center flex-col bg-white p-20  border '>
            <div className='text-black items-center w-full text-center'>
                <h1 className='text-2xl font-bold max-sm:text-xl'>Login to your Account</h1>
                <p className='text-xs max-sm:text-[0.7rem] p-2 font-regular'>Don't have an account? <Link to={'/signup'} className='text-blue-600'>Create one</Link></p>
            </div>
            {error && <div className='text-red-600 text-xs pt-5 text-center'>{error}</div>}
            <div className='flex items-center flex-col justify-center gap-4 mt-10'>
                <Input
                type='email'
                placeholder='Email'
                lebel='Email'
                className="p-2 border border-black w-full max-sm:text-xs"
                {...register('email',{
                    required:true,
                    validate:{
                        matchPattern: (value)=>(
                            value.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value) || "Invalid Email")
                        )
                    }
                })}
                />
                <Input
                type='password'
                placeholder='Password'
                lebel='Password'
                className="p-2 border border-black w-full max-sm:text-xs"
                {...register('password',{
                    required:true,
                })}
                />
            </div>
            <Button 
            type='submit'
            className="text-white bg-black px-6 py-2 border border-black mt-7 max-sm:px-3 max-sm:py-1"
            >Login</Button>
        </form>
    </div>
  )
}

export default LoginForm