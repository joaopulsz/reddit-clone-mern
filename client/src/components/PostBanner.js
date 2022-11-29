import React from "react";
import Comment from './Comment'

const PostBanner = ({post}) => {

    return (
        <div className="post-banner">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-author">{post.user}</p>
            {/* add like count and like/dislike buttons */}
        </div>
    )
}

export default PostBanner;