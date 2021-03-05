import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if(!localStorage.getItem('accountKey')) {
                return <Redirect to={{ pathname: '/login', state: {from: props.location } }}/>
            }

            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };