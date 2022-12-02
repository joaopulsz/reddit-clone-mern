import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeContainer from './containers/HomeContainer'
import Registration from './components/Registration';
import Login from './components/Login';
import UserAccount from './components/UserAccount';
import ForumContainer from './containers/ForumContainer';
import PostContainer from "./containers/PostContainer";
import Footer from './components/Footer';

function App() {

    const [forums, setForums] = useState([]);
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [currentForum, setCurrentForum] = useState("");
    const [post, setPost] = useState({});

    const registerNewUser = async (newUser) => {
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        const savedUser = await response.json();
        setLoggedInUser(savedUser); 
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
                <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />

                <Routes>
                    <Route path="/" element={<HomeContainer forums={forums} />} />

                    <Route path="/register" element={<Registration registerNewUser={registerNewUser} />} />

                    <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser}/>} />

                    <Route path='/account' element={<UserAccount loggedInUser={loggedInUser}/>} /> 

                    {forums.map((forum, index) => {
                        return <Route key={index} path={`/${forum.title}/*`} element={<ForumContainer forum={forum} setPost={setPost} setCurrentForum={setCurrentForum} />} />
                    })}

                    {post._id && currentForum !== "" ? <Route path={`/${currentForum}/${post._id}`} element={<PostContainer post={post}/>}/> : null}   
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
