import { userService } from "../services/userService";
import { createBrowserHistory } from 'history';

export const userActions = {
    login,
}

const history = createBrowserHistory();

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push(from);
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(user) { return { type: 'USER_LOGIN_REQUEST', user } }
    function success(user) { return { type: 'USER_LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'USER_LOGIN_FAILURE', error } }
}