import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import appwritedatabase from '../appwrite/appwriteDatabase'
import Loading from './Loading'
import PostBody from './PostBody'
import CommentForm from './CommentForm'
import Button from './Button'
import { useSelector } from 'react-redux'

function PostFullView() {
    const data = useParams()
    let [post, setPost] = useState('')
    let [loading, setLoading] = useState(false)
    let [comment, setComment] = useState([])

    let userData = useSelector((state) => state.userAuth.userData)

    let [isAuthor, setIsAuthor] = useState(false)

    useEffect(() => {
        setLoading(true)
        appwritedatabase.getPost(data.id).then((data) => {
            setLoading(false)
            setPost(data)
            setIsAuthor(userData.userData.$id == data.userID)
            setComment(data.comment)
        })
    }, [])

    useEffect(() => {
        appwritedatabase.getComment(data.id).then((data) => {
            setComment(data.comment)
        })
    }, [comment])

    return loading ? (
        <div className="flex items-center justify-center px-20 mt-20 mb-20">
            <Loading />
        </div>
    ) : post ? (
        <>
            <div className="px-20 mt-20 mb-20 max-sm:px-10">
                <img
                    className="h-auto max-w-full"
                    src={appwritedatabase.getFilePreview(post?.featureImage)}
                    alt="image description"
                />
                <h2 className="my-5 font-bold text-3xl">{post?.title}</h2>
                <div className="flex gap-2 items-center">
                    <p className="my-2">
                        <i className="fa-solid fa-user"></i> {'  '}
                        {post?.author} {'  '}{' '}
                        {post?.$createdAt
                            .slice(0, 10)
                            .split('-')
                            .reverse()
                            .join('-')}
                    </p>
                    {isAuthor && (
                        <Link to={`/edit/${post?.$id}`}>
                            <i className="fa-solid fa-pen"></i>
                        </Link>
                    )}
                </div>
                <div className="text-gray-800 mt-10">
                    <PostBody post={post?.content} />
                </div>
                <CommentForm postId={data.id} />
            </div>
        </>
    ) : (
        <div className="px-20 mt-20 mb-20 flex items-center justify-center text-xl font-bold text-gray-600">
            404 Post not found
        </div>
    )
}

export default PostFullView
