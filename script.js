
 //TODO: compare cities
 //TODO: see searching record
 

 //EVENT HANDLERS
window.onload = function() {
    getWeather("london");
  }


document.querySelector("#submit").addEventListener("click", function(e){

    e.preventDefault();
    console.log("clicked");

    city = document.querySelector("input").value;
    console.log(city);
    getWeather(city);

});

//FUNCTIONS
//fetch API function
function getWeather(city){

    const key = "da9a51208d5e4403a9053883caf4d08d";
        
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
    .then((resp) => {
        return resp.json()
    }) // Convert data to json
    .then((data) => {
            console.log(data);
            display(data);
            makeChart(data);
        })
}

//display function
function display(data){

    //get temperatures
    var temperature = data.data[0].temp;
    var highestTemp = data.data[0].max_temp; 
    var lowestTemp = data.data[0].min_temp; 
    //get current weather discription
    var description = data.data[0].weather.description;

    //innerHTML wording display
    document.querySelector(".city").innerHTML = data.city_name;
    document.querySelector(".sun").innerHTML = description;
    document.querySelector(".current-temp").innerHTML = temperature + "°C ";
    document.querySelector(".temp-highest").innerHTML = `<i class="fas fa-caret-up"></i> ${highestTemp}°C`;
    document.querySelector(".temp-lowest").innerHTML = `<i class="fas fa-caret-up"></i> ${lowestTemp}°C`;

    //show related img according to weather discription 
    if(temperature < "3"){
        console.log(temperature);
        document.querySelector("img").src = "img/cold.png";
    } else if(description.includes("clouds")){
        document.querySelector("img").src = "img/clouds.png";
    } else if(description.includes("thunderstorm")){
        document.querySelector("img").src = "img/thunderstorm.png";
    }  else if(description.includes("rain")){
        document.querySelector("img").src = "img/rain.png";
    }  else if(description.includes("sun")){
        document.querySelector("img").src = "img/sun.png";
    }  else {
        document.querySelector("img").src = "img/beach-sunset.png";
    }
}

//chart function
function makeChart(data){
    //forcast for chart
    var forcast1 = data.data[1].temp;
    var forcast2 = data.data[2].temp;
    var forcast3 = data.data[3].temp;
    var forcast4 = data.data[4].temp;
    var forcast5 = data.data[5].temp;
    console.log("5 days forcast: "+ forcast1 + "°C " + forcast2 + "°C " + forcast3 + "°C " +  forcast4 + "°C " +  forcast5 + "°C" );

    //date for chart
    var date1 = data.data[1].valid_date;
    var date2 = data.data[2].valid_date;
    var date3 = data.data[3].valid_date;
    var date4 = data.data[4].valid_date;
    var date5 = data.data[5].valid_date;
    console.log("The next 5 days: " + date1 + " "+ date2 + " "+ date3 + " "+ date4 + " "+ date5);

    var ctx = document.getElementById('myLineChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ date1 , date2, date3, date4, date5],
            datasets: [{
                label: 'TEMPERATURE',
                backgroundColor: 'transparent',
                borderColor: '#fba42c',
                data: [forcast1, forcast2, forcast3, forcast4, forcast5]
            }]
        },


        // Configuration options go here
        options: {
            responsive:false,
            scales: {
                xAxes: [{
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],


                yAxes: [{
                    
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return value + '°C';
                        },
                        stepSize: 5
                    }
                }]
            }
        }
    });
};

