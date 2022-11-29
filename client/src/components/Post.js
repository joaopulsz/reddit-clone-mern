import React from "react";

const Post = ({post}) => {

    return (
        <div className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-author">{post.user}</p>
            <p className="post-body">{post.body}</p>
            <p className="likes">{post.likes} likes</p>
        </div>
    )
}

export default Post;