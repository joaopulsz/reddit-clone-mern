import React, { useState, useEffect } from "react";
import PostBanner from '../components/PostBanner';

const ForumContainer = ({forum, setPost, loggedInUser}) => {

    const [posts, setPosts] = useState([]);
    const [showNewPostForm, setShowNewPostForm] = useState(false);

    const [newPost, setNewPost] = useState({
        forum: forum._id,
        user: loggedInUser._id,
        title: "",
        body: ""
    });

    const id = forum._id;

    const fetchPosts = async () => {
        const response = await fetch(`http://localhost:4000/forums/${id}/posts`);
        const postsData = await response.json();
        setPosts(postsData.posts);
    }

    const createPost = async (post) => {
        const response = await fetch("http://localhost:4000/posts", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        });
        const createdPost = await response.json();
        setPosts([...posts, createdPost]);
    }

    const handleClick = () => {
        setShowNewPostForm(true);
    }

    const handleChange = event => {
        const name = event.target.name;
        const updatedPost = {...newPost}
        updatedPost[name] = event.target.value;
        setNewPost(updatedPost);          
    }

    const handleSubmit = event => {
        event.preventDefault();
        createPost(newPost);
        setNewPost({
            forum: forum._id,
            user: loggedInUser._id,
            title: "",
            body: ""
        });
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="forum">
            
            <h2 className="forum-title">{forum.title}</h2>

            {loggedInUser._id ? <button id="new-post-btn" onClick={handleClick} >Write New Post</button> : null}

            {showNewPostForm ? <div>
                <form id="new-post-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input name="title" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="body">Body: </label>
                        <textarea name="body" onChange={handleChange}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div> : null}

            {posts.map((post, index) => {
                return <PostBanner key={index} post={post} setPost={setPost} forum={forum.title} />        
            })}
                
        </div>
    )
}

export default ForumContainer;