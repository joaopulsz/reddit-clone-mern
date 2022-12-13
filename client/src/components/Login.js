import React,  { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const [loginFailed, setLoginFailed] = useState(false);

    const login = async (user) => {
        const response = await fetch("http://localhost:4000/login",{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const savedUser = await response.json();
        setLoggedInUser(savedUser);
        return savedUser;
    }

    const handleChange = (e) => {
        const propertyName = e.target.name;
        const copiedUser = {...user};
        copiedUser[propertyName] = e.target.value;
        setUser(copiedUser);
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user).then(savedUser => {
            if(savedUser.username) {
                setUser({
                    username: "",
                    password: ""
                })
                navigate('/');
            } else {
                setLoginFailed(true);
            }
        })
    }

    return (
        <div className="login">


            <form onSubmit={handleSubmit}>

                <h2>Log In</h2>

                {loginFailed ? <p id="failed-login-msg">Login failed, username and password do not match.</p> : null}
                
                <div id="username-field">
                    <label htmlFor="username">Username or Email Address: </label>
                    <input type="text" id="login-username" name="username" onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="login-password" name="password" onChange={handleChange}/>
                </div>

                <input id="login-btn" type="submit" value="Log in" />

                <p>Don't have an account? <Link to="/register">CLICK HERE</Link> to register!</p>

            </form>


        </div>
    )
}

export default Login;