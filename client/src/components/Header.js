import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    // TODO: add conditional rendering to change navbar if there is a user logged in
    return (
        <header>
            <nav id="navbar">
                <Link to='/'><h1>Fakeddit</h1></Link>
                
                <form>
                    <input type="text" placeholder="Search Fakeddit"></input>
                    <button type="submit">Search</button>
                </form>
                
                {/* add routes to the links below */}
                <div className="nav-links">
                    <a href="#">Sign Up</a>
                    <a href="#">Log in</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;