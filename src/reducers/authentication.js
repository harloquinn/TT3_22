let user = JSON.parse(localStorage.getItem('userName'));
const initialState = user ? { loggedIn: true, user} : {};
export default function authentication(state = initialState, action) {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'USER_LOGIN_FAILURE':
            return {};
        case 'USER_LOGOUT_REQUEST':
            return {
                loggedOut: true,
            }
        default:
            return state
    }
}