import React, { useEffect, useState } from "react";
import Post from '../components/Post';
import Comment from '../components/Comment';

const PostContainer = ({post, loggedInUser}) => {

    const [comments, setComments] = useState([]);
    const [author, setAuthor] = useState({});

    const [newComment, setNewComment] = useState({
        post: post._id,
        user: loggedInUser._id,
        body: ""
    });
    const [showCommentSubmittedMessage, setShowCommentSubmittedMessage] = useState(false);

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

    const createComment = async (comment) => {
        const response = await fetch("http://localhost:4000/comments", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        });
        const createdComment = await response.json();
        setComments([...comments, createdComment]);
    }

    const handleChange = event => {
        const name = event.target.name;
        const updatedComment = {...newComment}
        updatedComment[name] = event.target.value;
        setNewComment(updatedComment); 
    }

    const handleSubmit = event => {
        event.preventDefault();
        createComment(newComment);
        setNewComment({
            post: post._id,
            user: loggedInUser._id,
            body: ""
        });
        setShowCommentSubmittedMessage(true);
    }

    useEffect(() => {
        fetchComments();
        getAuthor();
    }, [])

    return (
        <div className="post-container">
            <Post post={post} author={author}/>
            <div className="comments-container">
                {comments.length !== 1 ? <h3>{comments.length} Comments</h3> : <h3>{comments.length} Comment</h3>}

                {loggedInUser.username && !showCommentSubmittedMessage ? <form onSubmit={handleSubmit}>
                    <textarea name="body" id="comment-box" placeholder="What are your thoughts?" onChange={handleChange}/>
                    <button type="submit" id="submit-comment-btn">Comment</button>
                </form> : null}

                {showCommentSubmittedMessage ? <p id="comment-submitted-msg">Comment submitted successfully!</p> : null}

                {comments.map((comment, index) => {
                    return <Comment key={index} comment={comment}/>
                })}
            </div>
        </div>
    )
}

export default PostContainer;