/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Home.css'
import { ContextPrime } from '../providers/ContextUth';

const Home = () => {

    const user = useContext(ContextPrime);
    return (
        <div> I paradigms your home
            <Header />
            <h2> This is home of user && {user.displyNme} </h2>
        </div>
    );
};

export default Home;