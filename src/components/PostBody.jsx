import React from 'react'
import parse from 'html-react-parser'
import "../preflight.css"
function PostBody({post = ''}) {
  return (
    <div className='reset-tw'>
    {parse(post || '')}
    </div>
  )
}

export default PostBody