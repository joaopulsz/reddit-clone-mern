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
import SearchResultsContainer from "./containers/SearchResultsContainer";
import Footer from './components/Footer';

function App() {

    const [forums, setForums] = useState([]);
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [post, setPost] = useState({});
    const [searchResultsArray, setSearchResultsArray] = useState([]);

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
                <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setSearchResultsArray={setSearchResultsArray}/>

                <Routes>
                    <Route path="/" element={<HomeContainer forums={forums} />} />

                    <Route path="/register" element={<Registration registerNewUser={registerNewUser} />} />

                    <Route path='/login' element={<Login setLoggedInUser={setLoggedInUser}/>} />

                    <Route path='/account' element={<UserAccount loggedInUser={loggedInUser} forums={forums}/>} />

                    <Route path='/search' element={<SearchResultsContainer searchResultsArray={searchResultsArray} setPost={setPost}/> } />

                    {forums.map((forum, index) => {
                        return <Route key={index} path={`/${forum.title}/*`} element={<ForumContainer forum={forum} setPost={setPost} loggedInUser={loggedInUser} />} />
                    })}

                    {post._id ? <Route path={`/${post._id}`} element={<PostContainer post={post} loggedInUser={loggedInUser}/>}/> : null}   
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
