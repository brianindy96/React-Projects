import React from 'react'

const PostForm = () => {
  return (
    <div>
        <h1>Create Post</h1>
        <form action="">
            <input type="text" placeholder="Enter Post Title" required/>
            <br /><br />
            <textarea cols="30" rows="5" placeholder="Enter Post" required />
            <button>Post</button>
        </form>
    </div>
  )
}

export default PostForm