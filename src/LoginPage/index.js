import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';

import LoginPageStyles from './style';

function LoginPage() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    
    function handleInputChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        setSubmitted(true);
        if (username && password) {
            const { from } = location.state || { from: {pathname: "/" } };
            dispatch(userActions.login(username, password, from));
        }
    }

    return (
        <LoginPageStyles>
            <div className="Login-box">
                <form className="Login-form" onSubmit={handleSubmit}>
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