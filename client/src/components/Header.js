import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ loggedInUser, setLoggedInUser, setSearchResultsArray }) => {

    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const fetchPosts = async (query) => {
        const response = await fetch(`http://localhost:4000/posts/search/?q=${query}`);
        const searchResults = await response.json();
        setSearchResultsArray(searchResults);
    }

    const handleSubmit = async event => { 
        event.preventDefault();
        await fetchPosts(query);
        navigate('/search');
    }

    const handleChange = event => {
        setQuery(event.target.value);
    }

    const handleClick = () => {
        setLoggedInUser({});
    }

    return !loggedInUser.username ? (
        <header>
            <nav id="navbar">
                <Link to='/'><h1>Fakeddit</h1></Link>
                
                <form onSubmit={handleSubmit}>
                    <input name="search" type="text" placeholder="Search Fakeddit" onChange={handleChange}/>
                    <button type="submit">Search</button>
                </form>
                
                <div className="nav-links">
                    <Link to="/register">Sign Up</Link>
                    <Link to ="/login">Log in</Link>
                </div>
            </nav>
        </header>
    ) : (
        <header>
            <nav id="navbar">
                <Link to='/'><h1>Fakeddit</h1></Link>
                
                <form>
                    <input type="text" placeholder="Search Fakeddit"></input>
                    <button type="submit">Search</button>
                </form>

                <p>Logged-in as: {loggedInUser.username}</p>
                
                <div className="nav-links">
                    <Link to='/account'>My Account</Link>
                    <Link to ='/' onClick={handleClick}>Sign Out</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;