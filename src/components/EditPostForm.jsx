import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import appwritedatabase from '../appwrite/appwriteDatabase'
import PostingForm from './PostingForm'

function EditPostForm() {
    const { id } = useParams()
    const [post, setPost] = React.useState({})

    useEffect(() => {
        appwritedatabase
            .getPost(id)
            .then((post) => {
                console.log('post', post)
                setPost(post)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <PostingForm post={post} />
        </div>
    )
}

export default EditPostForm
