var http = new EasyHTTP();

const history = http.get('transhistory.json')
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

})
.catch(err => console.log(err))


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