import React from "react";
import { Link } from 'react-router-dom';

const PostBanner = ({post, forum}) => {

    const route = `/${forum.title}/${post._id}`;

    return (
        <Link to={route}>
            <div className="post-banner">
                <h3 className="post-title">{post.title}</h3>
                <p className="like-count">{post.likes} likes</p>
                {/* add like/dislike buttons */}
            </div>
        </Link>
    )
}

export default PostBanner;