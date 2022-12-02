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

    const fetchComments = async () => {
        const response = await fetch(`http://localhost:4000/posts/${post._id}/comments`);
        const postData = await response.json();
        setComments(postData.comments);
    }

    useEffect(() => {
        fetchComments();
        getAuthor();
    }, [])


    //TODO: handlecick func to submit comment

    return (
        <div className="post-container">
            <Post post={post} author={author}/>
            <div className="comments-container">
                {comments.length > 1 ? <h3>{comments.length} Comments</h3> : <h3>{comments.length} Comment</h3>}

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