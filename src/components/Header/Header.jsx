/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
             <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign In</Link>
           
        </div>
    );
};

export default Header;<Link to="/login">Login</Link>