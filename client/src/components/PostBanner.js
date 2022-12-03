import React from "react";
import { Link } from 'react-router-dom';

const PostBanner = ({post, setPost, forum}) => {

    const route = `/${post._id}`;

    const handleClick = () => {
        setPost(post);
    }

    return (
        <Link to={route} onClick={handleClick}>
            <div className="post-banner">
                <h3 className="post-title">{post.title}</h3>
                <p className="like-count">{post.likes} likes</p>
                {/* add like/dislike buttons */}
            </div>
        </Link>
    )
}

export default PostBanner;