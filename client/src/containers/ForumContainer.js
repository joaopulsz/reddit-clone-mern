import React, { useState, useEffect } from "react";
import PostBanner from '../components/PostBanner';

const ForumContainer = ({forum, setPost}) => {

    const [posts, setPosts] = useState([]);

    const id = forum._id;

    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:4000/forums/${id}/posts`);
        const postsData = await response.json();
        setPosts(postsData.posts);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="forum">
            
            <h2 className="forum-title">{forum.title}</h2>

            {posts.map((post, index) => {
                return <PostBanner key={index} post={post} setPost={setPost} forum={forum.title} />        
            })}
                
        </div>
    )
}

export default ForumContainer;