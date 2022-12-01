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

            <h2>Log In</h2>

            <form onSubmit={handleSubmit}>

                {loginFailed ? <p id="failed-login-msg">Login failed, username and password do not match.</p> : null}
                
                <label htmlFor="username">Username or Email Address: </label>
                <input type="text" id="login-username" name="username" onChange={handleChange}/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="login-password" name="password" onChange={handleChange}/>

                <input id="login-btn" type="submit" value="Log in" />

            </form>

            <p>Don't have an account? <Link to="/register">CLICK HERE</Link> to register!</p>

        </div>
    )
}

export default Login;