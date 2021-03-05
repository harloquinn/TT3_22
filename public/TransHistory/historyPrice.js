var http = new EasyHTTP();
var ctx = document.getElementById('myChart');
var history;

getHistory()

function makeChart(x,y) {
    
    var ctx = document.getElementById('myChart');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: x,
        datasets: [{
            label: 'TTK Price', // Name the series
            data: y, // Specify the data values array
            fill: false,
            borderColor: 'rgba(255,50,51,.8)', // Add custom color border (Line)
            backgroundColor: 'rgba(255,50,51,.8)', // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},

      // Configuration options go here
      options: {
            scales: {
                xAxes: [{
                    ticks: {
                        display: false //this will remove only the label
                    }
                }]
            }
        }
    });

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
    const requestURL = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/historical';
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
        let ycoordinates = []
        let xcoordinates = [];
        let i =0;
        data.forEach(function (entry) {
            ycoordinates.push(                
                    entry.price
            )
            xcoordinates.push(i++)
        })
        // console.log(ycoordinates)
        // console.log(xcoordinates)
        makeChart(xcoordinates,ycoordinates)
    });
}


