import React from 'react'
import { Input,TextEditor, Button, Loading } from './index'
import { useForm } from 'react-hook-form'
import appwritedatabase from '../appwrite/appwriteDatabase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function PostingForm() {

  const {register, handleSubmit,control} = useForm();
  const user = useSelector(state => state.userAuth?.userData?.userData);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const create = async (data)=>{
    setError('');
    try{
      setLoading(true);
      const file  = await appwritedatabase.uploadImage(data.thumbnil[0]);
      await appwritedatabase.createPost({
        title: data.title,
        content: data.content,
        summery: data.summery,
        featureImage: file.$id,
        userID: user.$id,
        author: user?.name
      })
      navigate(`/${user.$id}`);
    }catch(e){
      setError(e.message);
      setLoading(false);
    }
  }

  return (
    <div className='p-20 max-sm:p-10'>
        <div className='w-full max-sm:px-0 px-32'>
          <form onSubmit={handleSubmit(create)}  className='flex gap-2 flex-col'>
            <Input
              type='file'
              lebel='Blog Thumbnail'
              className='w-full border border-black rounded-md p-2 max-sm:text-xs'
              {...register('thumbnil',{
                required: true, 
              })}
            />
            <Input
              type='text'
              placeholder='Enter Title Of Blog'
              lebel='Blog Title'
              className='w-full border border-black rounded-md p-2 max-sm:text-xs'
              {...register('title',{
                required: true, 
              })}
            />
            <Input
              type='text'
              placeholder='Enter Summery Of Blog'
              lebel='Blog Summery'
              className='w-full border border-black rounded-md p-2 max-sm:text-xs'
              {...register('summery',{
                required: true, 
              })}
            />
            <TextEditor
              name='content'
              control={control}
            />
            {error && 
              <div className='text-center mt-2'>
                <p className='text-red-500 text-xs'>{error}</p>
              </div>
            
            }
            <Button  className='bg-black mt-3 w-fit mx-auto max-sm:text-xs  text-white px-4 py-2' disabled={loading}>
              {loading ? <Loading/> : 'Post'}
            </Button>
          </form>
        </div>
    </div>
  )
}

export default PostingForm