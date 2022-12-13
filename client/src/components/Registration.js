import React, { useState } from "react";

const Registration = ({registerNewUser}) => {

    const [newUser, setNewUser] = useState({
            username: "", 
            email: "",
            password:""
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

    return (
        <div className="registration-container">

            
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <div>
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" name="username" 
                    value={newUser.username} required onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email" name="email" 
                    placeholder="xyz@example.com" value={newUser.email} required onChange={handleChange}/>
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" name="password" 
                    placeholder="minimum 8 characters" value={newUser.password} minLength="8" required onChange={handleChange}/>
                </div>

                <input id="register-btn" type="submit" value="Create Account" />

            </form>
            
        </div>
    )
}

export default Registration;