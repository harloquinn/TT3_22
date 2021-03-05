import React, { useState, usesEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import LoginPageStyles from './style';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;

    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    return (
        <LoginPageStyles>
            <div className="Login-box">
                <form className="Login-form">
                    <FormGroup className="form-group"
                        controlId="username"
                    >
                    <FormLabel>Username</FormLabel>
                    <FormControl className="form-input"
                        autoFocus
                        name="username"
                        type="username"
                        value={username}
                        placeholder="username"
                        onChange = {handleInputChange}
                    />
                    </FormGroup>
                    <FormGroup className="form-group"
                        controlId="password"
                    >
                    <FormLabel>Password</FormLabel>
                    <FormControl className="form-input"
                        autoFocus
                        name="password"
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange = {handleInputChange}
                    />
                    </FormGroup>
                    <button className="Login-btn"
                    >
                        Login
                    </button>
            </form>
            </div>
        </LoginPageStyles>
    )
}

export { LoginPage };