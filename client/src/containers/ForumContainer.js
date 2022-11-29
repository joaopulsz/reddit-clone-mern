import React, { useState, useEffect } from "react";
import Post from '../components/Post'

const ForumContainer = ({forum}) => {

    const [posts, setPosts] = useState([]);

    const id = forum._id;

    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:4000/forums/${id}/posts`);
        const postsData = await response.json();
        setPosts(postsData);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    //TODO: fix fetch posts by forum.
    console.log(posts)

    return (
        <div className="forum">
            <h2>{forum.title}</h2>
            {posts.map((post, index) => {
                return <Post key={index} post={post}/>
            })}
        </div>
    )
}

export default ForumContainer;