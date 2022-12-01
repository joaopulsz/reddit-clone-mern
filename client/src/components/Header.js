import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedInUser, setLoggedInUser }) => {

    const handleClick = () => {
        setLoggedInUser({});
    }

    return !loggedInUser.username ? (
        <header>
            <nav id="navbar">
                <Link to='/'><h1>Fakeddit</h1></Link>
                
                <form>
                    <input type="text" placeholder="Search Fakeddit"></input>
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