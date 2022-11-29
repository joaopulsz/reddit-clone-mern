import React, { useState, useEffect } from "react";
import PostBanner from '../components/PostBanner';
import PostContainer from "./PostContainer";
import { Routes, Route } from 'react-router-dom';

const ForumContainer = ({forum}) => {

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
            
            <h2>{forum.title}</h2>

            {posts.map((post, index) => {
                return (
                    <>
                        <PostBanner key={index} post={post} forum={forum} />

                        {/* TODO: Fix routing to individual post pages */}
                        <Routes>
                            <Route key={post._id} path={`/${forum.title}/${post._id}`} element={<PostContainer post={post}/>}/>
                        </Routes>
                    </>
                )
            })}
                
        </div>
    )
}

export default ForumContainer;