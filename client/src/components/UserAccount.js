import React, { useEffect, useState } from "react";

const UserAccount = ({ loggedInUser, forums }) => {

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
                        let forumTitle;
                        for (let forum of forums) {
                            if (post.forum === forum._id) {
                                forumTitle = forum.title;
                            }
                        }
                        return <div className="user-page-post" key={index}>
                            <h4>{forumTitle}</h4>
                            <h5>{post.title}</h5>
                            {/* <p>{post.likes} likes</p> */}
                        </div>})}
                </div>

                <div id="user-comments">
                    <h3>Comments</h3>
                    
                    {comments.map((comment, index) => {
                        let postTitle;
                        for (let post of posts) {
                            if (post._id === comment.post) {
                                postTitle = post.title;
                            }
                        }

                        return <div key={index} className="user-page-comment">
                            <h5>{postTitle}</h5>
                            <p>{comment.body}</p>
                            {/* <p>{comment.likes} likes</p> */}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserAccount;