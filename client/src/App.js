import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppContainer from './containers/AppContainer'
import RegisterContainer from './containers/RegisterContainer';
import LoginContainer from './containers/LoginContainer';
import ForumContainer from './containers/ForumContainer';
import PostContainer from "./containers/PostContainer";
import Footer from './components/Footer';

function App() {

    const [forums, setForums] = useState([]);

    const [post, setPost] = useState({});

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

                    <Route path="/register" element={<RegisterContainer/>} />

                    <Route path='/login' element={<LoginContainer/>} />

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
