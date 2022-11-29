import React, { useEffect, useState } from "react";
import Post from '../components/Post';
import Comment from '../components/Comment';

const PostContainer = ({post}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        setComments(post.comments);
    }, [])

    return (
        <div>
            <p>HELLO</p>
            <Post post={post}/>
            <div className="comments-container">
                {comments.map((comment, index) => {
                    return <Comment key={index} comment={comment}/>
                })}
            </div>
        </div>
    )
}

export default PostContainer;