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

    //TODO: fix this:
    const postsList = posts.map(async (post, index) => {
        const fetchForum = async () => {
            const response = await fetch(`http://localhost:4000/forums/${post.forum}`);
            const forumData = await response.json();
            return forumData;
        } 
        const forum = await fetchForum();
        const forumTitle = forum.title;
        console.log(forumTitle)

        return <PostBanner key={index} post={post} forum={forumTitle} />
    })

    return (
        <div className="user-account-page">
            <h2>{loggedInUser.username}</h2>

            <div id="user-data-container">
                <div id="user-posts">
                    <h3>Posts</h3>

                    {postsList}
                </div>

                <div id="user-comments">
                    <h3>Comments</h3>
                    
                    {comments.map((comment, index) => {
                        return <div key={index} className="user-page-comment">
                            <p>{comment.body}</p>
                            <p>{comment.likes} likes</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserAccount;