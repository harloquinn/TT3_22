var http = new EasyHTTP();
var ctx = document.getElementById('myChart');
var history;
history = http.get('historyPrice.json')
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
    
    makeChart(xcoordinates,ycoordinates)
    // console.log(ycoordinates)
    // console.log(xcoordinates)
    
})
.catch(err => console.log(err))

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
