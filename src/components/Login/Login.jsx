/* eslint-disable no-unused-vars */
import React from 'react';
import './Login.css'

const Login = () => {
    
    return (
        <div>
            <h2>Login Here</h2>
            <form>
                <input  type="email" name="email" id="email" placeholder='youremail here' />
                <input type="password" name="" id="password" placeholder='password'/>
                <input type="button" value="Login" />
            </form>
        </div>
    );
};

export default Login;