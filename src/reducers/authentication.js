let user = JSON.parse(localStorage.getItem('username'));
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
    switch (action.type) {
        case 'USERS_LOGIN_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            };
        case 'USERS_LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'USERS_LOGIN_FAILURE':
            return {};
        default:
            return state
    }
}