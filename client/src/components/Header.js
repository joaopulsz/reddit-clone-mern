const Header = () => {

    // TODO: add conditional rendering to change navbar if there is a user logged in
    return (
        <header>
            <nav id="navbar">
                <h1>Fakeddit</h1>
                <form>
                    <input type="text">Search Fakeddit</input>
                    <button type="submit">Search</button>
                </form>
                {/* add routes to the links below */}
                <a>Sign Up</a>
                <a>Log in</a>
            </nav>
        </header>
    )
}

export default Header;