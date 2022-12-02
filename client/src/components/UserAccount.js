import React, { useEffect, useState } from "react";
import PostBanner from './PostBanner';

const UserAccount = ({ loggedInUser }) => {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:4000/users/${loggedInUser._id}/posts`);
        const userData = await response.json();
        setPosts(userData.posts);
    }

    const fetchComments = async () => {
        const response = await fetch(`http://localhost:4000/users/${loggedInUser._id}/comments`);
        const userData = await response.json();
        setComments(userData.comments);
    }

    useEffect(() => {
        fetchPosts();
        fetchComments();
    }, [])

    return (
        <div className="user-account-page">
            <h2>{loggedInUser.username}</h2>

            <div id="user-data-container">
                <div id="user-posts">
                    <h3>Posts</h3>

                    {posts.map((post, index) => {
                    return <PostBanner key={index} post={post} />})}
                </div>

                <div id="user-comments">
                    <h3>Comments</h3>

                </div>
            </div>
        </div>
    )
}

export default UserAccount;