
 //TODO: see searching record
 

 //EVENT HANDLERS
window.onload = function() {
    getWeather("brussels");
  }

//first city btn
document.querySelector("#submit").addEventListener("click", function(e){

    e.preventDefault();
    console.log("clicked");

    city = document.querySelector("input").value;
    console.log(city);
    getWeather(city);

});

//plus city btn 
document.querySelector("button.plus").addEventListener("click", function(){
    console.log("plus btn");
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container2").style.display = "grid";
    document.querySelector("button.plus").style.display = "none";
    document.querySelector("button.delete").style.display = "block";

    city2 = "bangkok";
    console.log(city2);
    getWeather2(city2);

})

//delete city btn
document.querySelector("button.delete").addEventListener("click", function(){
    console.log("delete btn");
    document.querySelector(".container2").style.display = "none";
    document.querySelector("button.plus").style.display = "block";
    document.querySelector("button.delete").style.display = "none";

})

//second city btn
document.querySelector("#submit2").addEventListener("click", function(e){

    e.preventDefault();

    city2 = document.querySelector("#input2").value;
    console.log(city2);
    getWeather2(city2);

    

});





//FUNCTIONS FOR CITY 1
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

let chartColor;
//display function
function display(data){

    //get temperatures
    var temperature = data.data[0].temp;
    var highestTemp = Math.round(data.data[0].max_temp); 
    var lowestTemp = Math.round(data.data[0].min_temp); 
    //get current weather discription
    var description = data.data[0].weather.description;
    //get weather details
    var precipation = Math.round(data.data[0].precip);
    var uv = Math.round(data.data[0].uv);
    var humidity = data.data[0].rh;
    var windSpeed =  Math.round(data.data[0].wind_spd);
  
    //innerHTML wording display
    document.querySelector(".city").innerHTML = data.city_name;
    document.querySelector(".sun").innerHTML = description;
    document.querySelector(".current-temp").innerHTML = temperature + "°c ";
    document.querySelector(".temp-highest").innerHTML = `<i class="fas fa-caret-up"></i> ${highestTemp}°c   
                                                          <i class="fas fa-caret-down"></i> ${lowestTemp}°c`;
    document.querySelector(".detail-num").innerHTML = `${uv} <br>  ${precipation}% <br>
                                                      ${humidity}% <br> ${windSpeed}km/h`;

    //show related img according to weather discription 
    if(temperature < "3"){
        document.querySelector("img").src = "img/cold.png";
        chartColor = "#4793ff";
    } else if(description.includes("clouds")){
        document.querySelector("img").src = "img/clouds.png";
        chartColor = "#fcc28c";
    } else if(description.includes("thunderstorm")){
        document.querySelector("img").src = "img/thunderstorm.png";
        chartColor = "#fcc28c";
    }  else if(description.includes("rain")){
        document.querySelector("img").src = "img/rain.png";
        chartColor = "#515070";
    }  else if(description.includes("sun")){
        document.querySelector("img").src = "img/sun.png";
        chartColor = "#fcc28c";
    }  else {
        document.querySelector("img").src = "img/beach-sunset.png";
        chartColor = "#fcc28c";
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
                label: 'TEMPERATURE FOR 5 DAYS',
                backgroundColor: 'transparent',
                borderColor: chartColor,
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


//FUNCTIONS FOR CITY2
//fetch API function
function getWeather2(city2){

    const key = "da9a51208d5e4403a9053883caf4d08d";
        
    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city2 +'&key='+ key)
    .then((resp) => {
        return resp.json()
    }) 
    .then((data2) => {
            console.log(data2);
            display2(data2);
            makeChart2(data2);
        })
}

let chartColor2;
//display function
function display2(data2){

    //get temperatures
    var temperature2 = data2.data[0].temp;
    var highestTemp2 = Math.round(data2.data[0].max_temp); 
    var lowestTemp2 = Math.round(data2.data[0].min_temp); 
    //get current weather discription
    var description2 = data2.data[0].weather.description;
    
    //get weather details
    var precipation2 = Math.round(data2.data[0].precip);
    var uv2 = Math.round(data2.data[0].uv);
    var humidity2 = data2.data[0].rh;
    var windSpeed2 =  Math.round(data2.data[0].wind_spd);
  
    //innerHTML wording display
    document.querySelector(".city2").innerHTML = data2.city_name;
    document.querySelector(".sun2").innerHTML = description2;
    document.querySelector(".current-temp2").innerHTML = temperature2 + "°c ";
    document.querySelector(".temp-highest2").innerHTML = `<i class="fas fa-caret-up"></i> ${highestTemp2}°c   
                                                          <i class="fas fa-caret-down"></i> ${lowestTemp2}°c`;
    document.querySelector(".detail-num2").innerHTML = `${uv2} <br>  ${precipation2}% <br>
                                                      ${humidity2}% <br> ${windSpeed2}km/h`;

    //show related img according to weather discription 
    if(temperature2 < "3"){
        document.querySelector("#image-city2").src = "img/cold.png";
        chartColor2 = "#4793ff";
    } else if(description2.includes("clouds")){
        document.querySelector("#image-city2").src = "img/clouds.png";
        chartColor2 = "#fcc28c";
    } else if(description2.includes("thunderstorm")){
        document.querySelector("#image-city2").src = "img/thunderstorm.png";
        chartColor2 = "#fcc28c";
    }  else if(description2.includes("rain")){
        document.querySelector("#image-city2").src = "img/rain.png";
        chartColor2 = "#515070";
    }  else if(description2.includes("sun")){
        document.querySelector("#image-city2").src = "img/sun.png";
        chartColor2 = "#fcc28c";
    }  else {
        document.querySelector("#image-city2").src = "img/beach-sunset.png";
        chartColor2 = "#fcc28c";
    }

    
}
//chart function
function makeChart2(data2){
    //forcast for chart
    var forcast12 = data2.data[1].temp;
    var forcast22 = data2.data[2].temp;
    var forcast32 = data2.data[3].temp;
    var forcast42 = data2.data[4].temp;
    var forcast52 = data2.data[5].temp;

    //date for chart
    var date12 = data2.data[1].valid_date;
    var date22 = data2.data[2].valid_date;
    var date32 = data2.data[3].valid_date;
    var date42 = data2.data[4].valid_date;
    var date52 = data2.data[5].valid_date;

    var ctx2 = document.getElementById('myLineChart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: [ date12 , date22, date32, date42, date52],
            datasets: [{
                label: 'TEMPERATURE FOR 5 DAYS',
                backgroundColor: 'transparent',
                borderColor: chartColor2,
                data: [forcast12, forcast22, forcast32, forcast42, forcast52]
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


