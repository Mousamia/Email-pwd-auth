/* eslint-disable no-unused-vars */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
import './Login.css'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");


    const handelSubmit = (event) => {
        // preventing auto reload on onSubmit
        event.preventDefault();
        // taking input values
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);



        // siging in with email and password
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user.email;
                setSuccess("User login successfull");
                setErrorMessage('');
                console.log(loggedUser);
            })
            .catch(error => {
                setErrorMessage(errorMessage);
            })

        event.target.reset();
    }




    // const handleEmail = (event) => {
    //     // setEmail(event.target.value);
    // }

    // const handlePwd = (event) => {
    //     // console.log(event.target.value);
    // }
    return (
        <div>
            <h2 className='text-center'>Login here</h2>
            <Form onSubmit={handelSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="text-danger"> {errorMessage} </p>
                <p className="text-success"> {success} </p>
            </Form>
            <p className='text-center'>New to this website please <Link to="/signup"> Sign Up</Link> </p>
        </div>
    );
};

export default Login;