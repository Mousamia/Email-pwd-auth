/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

import './Login.css'
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");
    const emailRef = useRef();
    const provider = new GoogleAuthProvider();


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


    const handleResetPassword = (event) => {
        const email = emailRef.current.value;
        console.log(email);
        if (!email) {
            alert("please provide your email");
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("password esent link sent");
            })

            .catch((error) => {
                console.log(error.message);
            })

    }


    const handleGoogleLogin = () => {
        console.log("google ke nnnn");
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });


    }

    return (
        <div>
            <h2 className='text-center'>Login here</h2>
            <Form onSubmit={handelSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />

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
            <p className="text-primary text-center">
                Forgot password? Please
                <button onClick={handleResetPassword} className="btn btn-link">
                    Reset Password
                </button>
            </p>
            <p className='text-center'>New to this website please <Link to="/signup"> Sign Up</Link> </p>

            <div>
                <p> Login with   <button className='google' onClick={() => handleGoogleLogin()}> Google </button></p>

            </div>
        </div>
    );
};

export default Login;