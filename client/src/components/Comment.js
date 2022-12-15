import React, { useState, useEffect } from "react";

const Comment = ({comment}) => {

    const [author, setAuthor] = useState({});

    const getAuthor = async () => {
        const response = await fetch(`http://localhost:4000/users/${comment.user}`);
        const userData = await response.json();
        setAuthor(userData);
    }

    useEffect(() => {
        getAuthor();
    }, [])

    return (
        <div className="comment">
            <p className="comment-author">{author.username}</p>
            <p className="comment-body">{comment.body}</p>
            {/* <p>{comment.likes} likes</p> */}
            {/* add like/dislike buttons */}
        </div>
    )
}

export default Comment;