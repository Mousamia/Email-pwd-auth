/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './SignUp.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);






const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState("");


    const handelSubmit = (event) => {
        // preventing auto reload on onSubmit
        event.preventDefault();
        // taking input values
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        if (!/(?=.*[0-9])/.test(password)) {
            setErrorMessage('Please add atleast one number');
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage('Please add atleast one CAPITAL letter');
            return;
        }

        // creating User in Firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                // console.log(auth);
                console.log(userCredential);
                const loggedinUser = userCredential.user.email;
                // console.log(loggedinUser);
                console.log(loggedinUser);
                setErrorMessage("");
                event.target.reset();

                setSuccess(" User has been created successfully");
                emailVerification(loggedinUser);
            })

            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage);
                setErrorMessage(errorMessage);
                setSuccess("");
            })

    }
    // send email verification link
    const emailVerification = (user) => {
        sendEmailVerification(user)
            .then((result) => {
                console.log(result);
                alert("email sent forverification");
            })

    }

    // const handleEmail = (event) => {
    //     // setEmail(event.target.value);
    // }

    // const handlePwd = (event) => {
    //     // console.log(event.target.value);
    // }

    return (
        <div>
            <h2 className="text-center">Sign Up </h2>
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
                <p className=".text-success"> {success} </p>
            </Form>
            <p className='text-center'>Already User <Link to="/login">Login</Link> </p>
        </div>

    );
};

export default SignUp;