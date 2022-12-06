import React, { useState, useEffect } from "react";
import PostBanner from '../components/PostBanner';

const ForumContainer = ({forum, setPost, loggedInUser}) => {

    const [posts, setPosts] = useState([]);
    const [showNewPostForm, setShowNewPostForm] = useState(false);

    const id = forum._id;

    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:4000/forums/${id}/posts`);
        const postsData = await response.json();
        setPosts(postsData.posts);
    }

    const handleClick = () => {
        setShowNewPostForm(true);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="forum">
            
            <h2 className="forum-title">{forum.title}</h2>

            {loggedInUser._id ? <button id="new-post-btn" onClick={handleClick} >Write New Post</button> : null}

            {showNewPostForm ? <div>
                <form>
                    
                </form>
            </div> : null}

            {posts.map((post, index) => {
                return <PostBanner key={index} post={post} setPost={setPost} forum={forum.title} />        
            })}
                
        </div>
    )
}

export default ForumContainer;