const Header = () => {

    // TODO: add conditional rendering to change navbar if there is a user logged in
    return (
        <header>
            <nav id="navbar">
                <h1>Fakeddit</h1>
                
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