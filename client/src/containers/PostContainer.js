import React, { useEffect, useState } from "react";
import Post from '../components/Post';
import Comment from '../components/Comment';

const PostContainer = ({post}) => {

    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState({});

    const getAuthor = async () => {
        const response = await fetch(`http://localhost:4000/users/${post.user}`);
        const userData = await response.json();
        setAuthor(userData);
    }

    useEffect(() => {
        setComments(post.comments);
        getAuthor();
    }, [])


    //TODO: handlecick func to submit comment

    return (
        <div className="post-container">
            <Post post={post} author={author}/>
            <div className="comments-container">
                <h3>{comments.length} Comments</h3>

                <form>
                    <textarea id="comment-box" placeholder="What are your thoughts?"/>
                    <button id="submit-comment-btn">Comment</button>
                </form>

                {comments.map((comment, index) => {
                    return <Comment key={index} comment={comment}/>
                })}
            </div>
        </div>
    )
}

export default PostContainer;