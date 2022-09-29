import React from 'react'

const PostForm = () => {

    const handleSubmit = (e) =>{
        // prevents Refresing when submitted
        e.preventDefault();

        const title = title.value;
        const message = message.value;
        const data = {
            id: new Date(),
            title,
            message
        };
    }

  return (
    <div>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Post Title" required/>
            <br /><br />
            <textarea cols="30" rows="5" placeholder="Enter Post" required />
            <button>Post</button>
        </form>
    </div>
  )
}

export default PostForm