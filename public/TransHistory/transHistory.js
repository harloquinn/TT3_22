
getHistory('Group22','UKhTShVZLSav656')

function shortDate(date) {
    return (date.getMonth() + 1) + 
    "/" +  date.getDate() +
    "/" +  date.getFullYear();
}

function transCat(type,cost) {
    if(type === 'SELL') {
        return `+ ${cost}`
    }
    if(type === 'BUY'){
        return `- ${cost}`
    }
}

function typeStyle(type) {
    if(type === 'SELL') {
        return "class='table-danger'"
    }
    if(type === 'BUY'){
        return "class='table-success'"
    }
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


function getHistory(username='Group22', password='UKhTShVZLSav656') {
    const requestURL = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view';
    const requestOptions = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'},
    body: JSON.stringify({
    username: username,
    password: password,
    accountKey:"2b14f7ac-c26a-43f9-a202-b7c79a2fdbde"
    })
    };
    
    return fetch(`${requestURL}`,requestOptions)
    .then(handleResponse)
    .then(data => {

        let output = ''
    
            data.forEach(function(trans){
                time = new Date(trans.timestamp*1000)
                output += `
                <tr ${typeStyle(trans.orderType)} >
                    <th scope="row">${trans.transactionId}</th>
                    <td>${trans.orderType}</td>
                    <td>${trans.assetSymbol}</td>
                    <td >${trans.assetAmount}</td>
                    <td>${'$'+trans.assetPrice}</td>
                    <td>${transCat(trans.orderType, trans.cashAmount)}</td>
                    <td>${shortDate(time)}</td>
                </tr>
                `
                
            })
            document.getElementById('output').innerHTML = output;
    
    });
}