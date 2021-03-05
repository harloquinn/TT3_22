export const userService = {
    login,
    logout
};

function login(username, password) {
    const requestURL = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login';
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'},
        body: JSON.stringify({
            username: username,
            password: password
        })
    };

    return fetch(`${requestURL}`,requestOptions)
        .then(handleResponse)
        .then(response => {  
            localStorage.setItem('user', (response));
            localStorage.setItem('accountKey', JSON.stringify(response.accountKey));
            localStorage.setItem('firstName', JSON.stringify(response.firstName));
            localStorage.setItem('lastName', JSON.stringify(response.lastName));
            localStorage.setItem('nric', JSON.stringify(response.nric));
            localStorage.setItem('address', JSON.stringify(response.address));
            localStorage.setItem('phoneNumber', JSON.stringify(response.phoneNumber));
            localStorage.setItem('email', JSON.stringify(response.email));

            return response;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if(!response.ok) {
            if(response.status === 400) {
                //put under alert
                console.log("Bad Request")
            } 
            if(response.status === 403) {
                console.log("Forbidden")
            }
            if(response.status === 404) {
                console.log("Not Found")
            }
            if(response.status === 500) {
                console.log("Server Error")
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}