import React from 'react'
import appwriteAuth from '../appwrite/appwriteAuth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Loading } from '../components/index';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
function SignUp() {
    const [error,setError] = React.useState('');
    const [loading,setLoading] = React.useState(false);
    const {register,handleSubmit}  = useForm();
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const create = async (data)=>{
        setError('');
        setLoading(true);
        try {
            await appwriteAuth.logout();
            let userData = await appwriteAuth.createAccount({...data,premium:true});
            if(userData){
                let currUser = await appwriteAuth.getUserAccount();
                if(currUser) dispatch(login(currUser));
                setLoading(false);
                navigate('/');
            }
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }
  return (
    <div className='w-full  px-80 max-md:px-5 mt-20  mb-20'>
        <form onSubmit={handleSubmit(create)} className='w-full flex items-center justify-center flex-col bg-white p-20 max-sm:p-10  border '>
            <div className='text-black items-center w-full text-center'>
                <h1 className='text-2xl font-bold'>SignUp for an Account</h1>
                <p className='text-xs p-2 font-regular'>Already have an account? <Link to={'/login'} className='text-blue-600'>Login Now</Link></p>
            </div>
            {error && <div className='text-red-600 text-xs pt-5 text-center'>{error}</div>}
            <div className='flex items-center flex-col justify-center gap-4 mt-10'>
                <Input
                type='text'
                placeholder='Enter Your Name'
                lebel='FullName'
                className='p-2 border border-black w-full max-sm:text-xs'
                {...register('name',{
                    required:true,
                })}
                />
                <Input
                type='email'
                placeholder='Enter Your Email'
                lebel='Email Id'
                className='p-2 border border-black w-full max-sm:text-xs'
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
                className='p-2 border border-black w-full max-sm:text-xs'
                lebel='Password'
                {...register('password',{
                    required:true,
                })}
                />
            </div>
            <Button 
            type='submit'
            disabled={loading}
            className="text-white bg-black px-6 py-2 border border-black mt-7 max-sm:px-3 max-sm:text-xs max-sm:py-1"
            >
                {loading ? <Loading/> : 'SignUp'}
            </Button>
        </form>
    </div>
  )
}

export default SignUp