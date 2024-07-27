import React from 'react'
import parse from 'html-react-parser'
function PostBody({post = ''}) {
  return (
    <>
    {...parse(post || '')}
    </>
  )
}

export default PostBody