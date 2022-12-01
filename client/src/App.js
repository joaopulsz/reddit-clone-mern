import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppContainer from './containers/AppContainer'
import Registration from './components/Registration';
import Login from './components/Login';
import ForumContainer from './containers/ForumContainer';
import PostContainer from "./containers/PostContainer";
import Footer from './components/Footer';

function App() {

    const [forums, setForums] = useState([]);
    const [users, setUsers] = useState([]);
    const [post, setPost] = useState({});

    const registerNewUser = async (newUser) => {
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        const savedUser = await response.json();
        setUsers([...users, savedUser]);
    }

    const fetchForums = async () => {
        const response = await fetch('http://localhost:4000/forums');
        const forumsData = await response.json();
        setForums(forumsData);
    }

    useEffect(() => {
        fetchForums();
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<AppContainer forums={forums} />} />

                    <Route path="/register" element={<Registration registerNewUser={registerNewUser}/>} />

                    <Route path='/login' element={<Login/>} />

                    {forums.map((forum, index) => {
                        return <Route key={index} path={`/${forum.title}/*`} element={<ForumContainer forum={forum} setPost={setPost} />} />
                    })}

                    {post._id ? <Route path={`/${post._id}`} element={<PostContainer post={post}/>}/> : null}   
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
