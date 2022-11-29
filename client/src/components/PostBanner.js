import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const PostBanner = ({post, forum}) => {

    const [user, setUser] = useState({});

    const getUser = async () => {
        const response = await fetch(`http://localhost:4000/users/${post.user}`);
        const userData = await response.json();
        setUser(userData);
    }

    useEffect(() => {
        getUser();
    }, [])

    const route = `/${forum.title}/${post._id}`;

    return (
        <Link to={route}>
            <div className="post-banner">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-author">{user.username}</p>
                <p className="like-count">{post.likes} likes</p>
                {/* add like/dislike buttons */}
            </div>
        </Link>
    )
}

export default PostBanner;