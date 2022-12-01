import React, { useState } from "react";

const RegisterContainer = ({registerNewUser}) => {

    const [newUser, setNewUser] = useState({
            username: "", 
            email: "",
            password:"",
        });

        const handleChange = event => {
            const name = event.target.name;
            const updatedUser = {...newUser}
            updatedUser[name] = event.target.value;
            setNewUser(updatedUser);          
        }

        const handleSubmit = event => {
            event.preventDefault();
        
            registerNewUser(newUser);        
            setNewUser({
                username: "", 
                email: "",
                password:"",   
            })
        }

    return(
        <div className="registration-container">

            
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <label htmlFor="username">Username:</label>
                <input id="username" type="text" name="username" 
                placeholder="Username" value={newUser.username} required onChange={handleChange}/>

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" 
                placeholder="Email address" value={newUser.email} required onChange={handleChange}/>

                <label htmlFor="password">Password (minimum 8 characters): </label>
                <input id="password" type="password" name="password" 
                placeholder="Password" value={newUser.password} minLength="8" required onChange={handleChange}/>

                <input id="register-btn" type="submit" value="Create Account" />

            </form>
            
        </div>
    )
}

export default RegisterContainer;